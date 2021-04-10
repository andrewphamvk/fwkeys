// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Define the new text styles
const theme = extendTheme({
  components: {
    Heading: {
      defaultProps: {
        colors: "pink",

      },
      colors: {
        pink: {
          50: '#ffe8f1',
          100: '#f3c2d2',
          200: '#e59ab3',
          300: '#d97395',
          400: '#cd4c77',
          500: '#b3325d',
          600: '#8c2649',
          700: '#651a34',
          800: '#3e0d1f',
          900: '#1b010b',
        }
      }
    }
  },
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ["48px", "72px"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
    h2: {
      fontSize: ["36px", "48px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
  },
  colors: {
    pink: {
      50: '#ffe8f1',
      100: '#f3c2d2',
      200: '#e59ab3',
      300: '#d97395',
      400: '#cd4c77',
      500: '#b3325d',
      600: '#8c2649',
      700: '#651a34',
      800: '#3e0d1f',
      900: '#1b010b',
    }
  }
})

export default theme