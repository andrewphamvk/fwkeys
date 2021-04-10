import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import styles from "./display.module.css";
import { useGetKeyPress } from "../hooks/useGetKeyPress";
import { useTypedEntries } from "../hooks/useTypedEntries";

// Split a string into lines of maxLineLength
function splitLines(input: string, maxLineLength: number) {
  const lines: string[][] = [[]];
  let currentLine = 0;
  let currentLineLength = 0;
  input.split(" ").forEach((word) => {
    if (currentLineLength + word.length + 1 > maxLineLength) {
      currentLine += 1;
      currentLineLength = 0;
    }
    if (lines[currentLine] == null) {
      lines[currentLine] = [];
    }
    lines[currentLine].push(word + " ");
    currentLineLength += word.length + 1;
  });
  return lines;
}

// Generate the JSX elements to render
const generateRenderLines = (
  lines: string[][],
  cursorIndex: number,
  validClass: string
): JSX.Element => {
  let currentIndex = 0;
  return (
    <>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className={styles.line}>
          {line.map((word, wordIndex) => (
            <span key={wordIndex} className={styles.token}>
              {word.split("").map((ch) => {
                let className = "";
                let id = "";
                if (currentIndex === cursorIndex) {
                  id = styles.cursor;
                }
                if (currentIndex < cursorIndex) {
                  className = validClass;
                }

                currentIndex += 1;

                return (
                  <span key={currentIndex - 1} id={id} className={className}>
                    {ch}
                  </span>
                );
              })}
            </span>
          ))}
        </span>
      ))}
    </>
  );
};

let nextInput =
  "thould predining befor ther have just thread and might submit lidzy any livil had the excely who prest sharly";
let input =
  "frez told volute her have later remonly coly wered recold othe exced you past for must saw wher betwen";

const TextDisplay = () => {
  const keyPressed = useGetKeyPress();
  const { incrementTypedEntry } = useTypedEntries();

  const [cursorIndex, setCursorIndex] = useState(0);
  const [renderLines, setRenderLines] = useState(<></>);
  const [cursorBlink, setCursorBlink] = useState(false);
  const { toggleColorMode } = useColorMode();
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorBlinkClass = useColorModeValue(styles.blink, styles.blink_dark);
  const validClass = useColorModeValue(
    styles.symbol_valid,
    styles.symbol_valid_dark
  );

  // Blink cursor
  useEffect(() => {
    if (!cursorRef || !cursorRef.current) {
      return;
    }
    var child = cursorRef.current.querySelector(`#${styles.cursor}`);
    if (!child) {
      return;
    }
    let timer: NodeJS.Timeout;
    if (cursorBlink) {
      child.className = cursorBlinkClass;
    } else {
      child.className = "";
    }

    timer = setTimeout(() => setCursorBlink((prev) => !prev), 500);
    return () => clearTimeout(timer);
  }, [cursorBlink, keyPressed, cursorBlinkClass]); // Monitor keyPressed so that spamming keys will keep cursor on

  const maxLineLength = 57;

  // Check if key pressed is correct
  useEffect(() => {
    console.log(`keyPressed: ${keyPressed.key}`);
    setCursorBlink(true);
    if (input[cursorIndex] === keyPressed.key) {
      // If the correct key is pressed, deactivate blinker so that it can be activated after render lines generation
      setCursorBlink(false);
      incrementTypedEntry();
      if (cursorIndex === input.length - 1) {
        [input, nextInput] = [nextInput, input];
        setCursorIndex(0);
      } else {
        setCursorIndex((prev) => prev + 1);
      }
    }

    if (keyPressed.key === "Tab") {
      toggleColorMode();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyPressed]);

  // Generate the display lines whenever the cursor updates
  useEffect(() => {
    const lines: string[][] = splitLines(input, maxLineLength);
    setRenderLines(generateRenderLines(lines, cursorIndex, validClass));
    setCursorBlink(true);
  }, [cursorIndex, validClass]);

  return (
    <Box ref={cursorRef} pt="12px" pb="30px">
      {renderLines}
    </Box>
  );
};

export default TextDisplay;
