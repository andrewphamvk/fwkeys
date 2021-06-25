import { VisuallyHidden } from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import { useKeyUp } from "../hooks/useKeyUp";
import { useKeyDown } from "../hooks/useKeyDown";
import { useResetActiveKeys } from "../hooks/useResetActiveKeys";

export const BackgroundInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const keyUp = useKeyUp();
  const keyDown = useKeyDown();
  const resetActiveKeys = useResetActiveKeys();

  // Always set the focus of the application to the input element
  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement> | null) => {
    // Run the method with setTimeout to fix issue in FireFox
    setTimeout(() => {
      resetActiveKeys();
      if (inputRef != null && inputRef.current != null) {
        inputRef.current.focus({ preventScroll: true });
      }
    });
  };

  // When app loads, set the focus to the background input
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => handleOnBlur(null), []);

  return (
    <VisuallyHidden>
      <input
        type="text"
        onKeyDown={keyDown}
        onKeyUp={keyUp}
        onBlur={handleOnBlur}
        ref={inputRef}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        aria-hidden="true"
      />
    </VisuallyHidden>
  );
};
