import DoubleSymbolKey from '../keys/DoubleSymbolKey'
import SingleSymbolKey from '../keys/SingleSymbolKey'
import * as Constants from '../../constants/constants'

type KeyboardProps = {
  activeKeyMap: Set<string>
}

const Keyboard = ({ activeKeyMap }: KeyboardProps) => {
  return (
    <div>
      <svg width="800px" height="280px">
        <rect height="100%" width="100%" rx={Constants.BoardRx} ry={Constants.BoardRy} fill={Constants.BaseFill} />
        <svg x={12} y={12}>
          {/* First row */}
          <DoubleSymbolKey x={0} y={Constants.RowPositions[0]} topText="~" botText="`" isActive={activeKeyMap.has("Backquote")} />
          <DoubleSymbolKey x={52} y={Constants.RowPositions[0]} topText="!" botText=" 1" isActive={activeKeyMap.has("Digit1")} />
          <DoubleSymbolKey x={104} y={Constants.RowPositions[0]} topText="@" botText="2" isActive={activeKeyMap.has("Digit2")} />
          <DoubleSymbolKey x={156} y={Constants.RowPositions[0]} topText="#" botText="3" isActive={activeKeyMap.has("Digit3")} />
          <DoubleSymbolKey x={208} y={Constants.RowPositions[0]} topText="$" botText="4" isActive={activeKeyMap.has("Digit4")} />
          <DoubleSymbolKey x={260} y={Constants.RowPositions[0]} topText="%" botText="5" isActive={activeKeyMap.has("Digit5")} />
          <DoubleSymbolKey x={312} y={Constants.RowPositions[0]} topText="^" botText="6" isActive={activeKeyMap.has("Digit6")} />
          <DoubleSymbolKey x={364} y={Constants.RowPositions[0]} topText="&" botText="7" isActive={activeKeyMap.has("Digit7")} />
          <DoubleSymbolKey x={416} y={Constants.RowPositions[0]} topText="*" botText="8" isActive={activeKeyMap.has("Digit8")} />
          <DoubleSymbolKey x={468} y={Constants.RowPositions[0]} topText="(" botText="9" isActive={activeKeyMap.has("Digit9")} />
          <DoubleSymbolKey x={520} y={Constants.RowPositions[0]} topText=")" botText="0" isActive={activeKeyMap.has("Digit0")} />
          <DoubleSymbolKey x={572} y={Constants.RowPositions[0]} topText="_" botText="-" isActive={activeKeyMap.has("Minus")} />
          <DoubleSymbolKey x={624} y={Constants.RowPositions[0]} topText="+" botText="=" isActive={activeKeyMap.has("Equal")} />
          <SingleSymbolKey x={676} y={Constants.RowPositions[0]} text="backspace" width="100" isActive={activeKeyMap.has("Backspace")} />

          {/* Second row */}
          <SingleSymbolKey x={0} y={Constants.RowPositions[1]} text="tab" width="74" textX={Constants.LeftSpecialX} isActive={activeKeyMap.has("Tab")} />
          <SingleSymbolKey x={78} y={Constants.RowPositions[1]} text="Q" isActive={activeKeyMap.has("KeyQ")} />
          <SingleSymbolKey x={130} y={Constants.RowPositions[1]} text="W" isActive={activeKeyMap.has("KeyW")} />
          <SingleSymbolKey x={182} y={Constants.RowPositions[1]} text="E" isActive={activeKeyMap.has("KeyE")} />
          <SingleSymbolKey x={234} y={Constants.RowPositions[1]} text="R" isActive={activeKeyMap.has("KeyR")} />
          <SingleSymbolKey x={286} y={Constants.RowPositions[1]} text="T" isActive={activeKeyMap.has("KeyT")} />
          <SingleSymbolKey x={338} y={Constants.RowPositions[1]} text="Y" isActive={activeKeyMap.has("KeyY")} />
          <SingleSymbolKey x={390} y={Constants.RowPositions[1]} text="U" isActive={activeKeyMap.has("KeyU")} />
          <SingleSymbolKey x={442} y={Constants.RowPositions[1]} text="I" isActive={activeKeyMap.has("KeyI")} />
          <SingleSymbolKey x={494} y={Constants.RowPositions[1]} text="O" isActive={activeKeyMap.has("KeyO")} />
          <SingleSymbolKey x={546} y={Constants.RowPositions[1]} text="P" isActive={activeKeyMap.has("KeyP")} />
          <DoubleSymbolKey x={598} y={Constants.RowPositions[1]} topText="{" botText="[" isActive={activeKeyMap.has("BracketLeft")} />
          <DoubleSymbolKey x={650} y={Constants.RowPositions[1]} topText="}" botText="]" isActive={activeKeyMap.has("BracketRight")} />
          <DoubleSymbolKey x={702} y={Constants.RowPositions[1]} topText="|" botText="\" width="74" isActive={activeKeyMap.has("Backslash")} />

          {/* Third row */}
          <SingleSymbolKey x={0} y={Constants.RowPositions[2]} text="caps" textX={Constants.LeftSpecialX + 4} width="86" isActive={activeKeyMap.has("CapsLock")} />
          <SingleSymbolKey x={90} y={Constants.RowPositions[2]} text="A" isActive={activeKeyMap.has("KeyA")} />
          <SingleSymbolKey x={142} y={Constants.RowPositions[2]} text="S" isActive={activeKeyMap.has("KeyS")} />
          <SingleSymbolKey x={194} y={Constants.RowPositions[2]} text="D" isActive={activeKeyMap.has("KeyD")} />
          <SingleSymbolKey x={246} y={Constants.RowPositions[2]} text="F" isActive={activeKeyMap.has("KeyF")} />
          <SingleSymbolKey x={298} y={Constants.RowPositions[2]} text="G" isActive={activeKeyMap.has("KeyG")} />
          <SingleSymbolKey x={350} y={Constants.RowPositions[2]} text="H" isActive={activeKeyMap.has("KeyH")} />
          <SingleSymbolKey x={402} y={Constants.RowPositions[2]} text="J" isActive={activeKeyMap.has("KeyJ")} />
          <SingleSymbolKey x={454} y={Constants.RowPositions[2]} text="K" isActive={activeKeyMap.has("KeyK")} />
          <SingleSymbolKey x={506} y={Constants.RowPositions[2]} text="L" isActive={activeKeyMap.has("KeyL")} />
          <DoubleSymbolKey x={558} y={Constants.RowPositions[2]} topText=":" botText=";" isActive={activeKeyMap.has("Semicolon")} />
          <DoubleSymbolKey x={610} y={Constants.RowPositions[2]} topText={'"'} botText="'" isActive={activeKeyMap.has("Quote")} />
          <SingleSymbolKey x={662} y={Constants.RowPositions[2]} text="enter" width="114" textX="72" isActive={activeKeyMap.has("Enter")} />

          {/* Fourth row */}
          <SingleSymbolKey x={0} y={Constants.RowPositions[3]} text="shift" textX={Constants.LeftSpecialX + 3} width="112" isActive={activeKeyMap.has("ShiftLeft")} />
          <SingleSymbolKey x={116} y={Constants.RowPositions[3]} text="Z" isActive={activeKeyMap.has("KeyZ")} />
          <SingleSymbolKey x={168} y={Constants.RowPositions[3]} text="X" isActive={activeKeyMap.has("KeyX")} />
          <SingleSymbolKey x={220} y={Constants.RowPositions[3]} text="C" isActive={activeKeyMap.has("KeyC")} />
          <SingleSymbolKey x={272} y={Constants.RowPositions[3]} text="V" isActive={activeKeyMap.has("KeyV")} />
          <SingleSymbolKey x={324} y={Constants.RowPositions[3]} text="B" isActive={activeKeyMap.has("KeyB")} />
          <SingleSymbolKey x={376} y={Constants.RowPositions[3]} text="N" isActive={activeKeyMap.has("KeyN")} />
          <SingleSymbolKey x={428} y={Constants.RowPositions[3]} text="M" isActive={activeKeyMap.has("KeyM")} />
          <DoubleSymbolKey x={480} y={Constants.RowPositions[3]} topText="<" botText="," isActive={activeKeyMap.has("Comma")} />
          <DoubleSymbolKey x={532} y={Constants.RowPositions[3]} topText=">" botText="." isActive={activeKeyMap.has("Period")} />
          <DoubleSymbolKey x={584} y={Constants.RowPositions[3]} topText="?" botText="/" isActive={activeKeyMap.has("Slash")} />
          <SingleSymbolKey x={636} y={Constants.RowPositions[3]} text="shift" width="140" textX="100" isActive={activeKeyMap.has("ShiftRight")} />

          {/* Fifth row */}
          <SingleSymbolKey x={0} y={Constants.RowPositions[4]} text="ctrl" width="74" textX={Constants.LeftSpecialX} isActive={activeKeyMap.has("ControlLeft")} />
          <SingleSymbolKey x={78} y={Constants.RowPositions[4]} text="alt" width="74" isActive={activeKeyMap.has("AltLeft")} />
          <SingleSymbolKey x={156} y={Constants.RowPositions[4]} width="464" isActive={activeKeyMap.has("Space")} />
          <SingleSymbolKey x={624} y={Constants.RowPositions[4]} text="alt" width="74" isActive={activeKeyMap.has("AltRight")} />
          <SingleSymbolKey x={702} y={Constants.RowPositions[4]} text="ctrl" width="74" isActive={activeKeyMap.has("ControlRight")} />

        </svg>

      </svg>
    </div >
  )
}

export default Keyboard