import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

// Define your custom color palette
const customColors = {
  primary: {
    50: '#ffe5e7',
    100: '#ffbcc0',
    200: '#f78c91',
    300: '#f65b61',
    400: '#f42931',
    500: '#e50914', // Primary color as rgb(229, 9, 20)
    600: '#b80610',
    700: '#8a050c',
    800: '#5d0308',
    900: '#2f0104',
  },
}

const fontSizes = {
  p: {
    base: '1.125rem',
    lg: '1.5rem'
  }
};

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-10px)"
};

// Extend the Chakra theme
const customTheme = extendTheme(
  {
    colors: customColors,
    fonts: {
      heading: '"Raleway", system-ui',
      body: '"Raleway", system-ui',
    },
    fontSize: fontSizes,
    styles: {
      global: {
        'p': {
          fontSize: fontSizes.p
        }
      }
    },
    components: {
      Form: {
        variants: {
          floating: {
            container: {
              _focusWithin: {
                label: {
                  ...activeLabelStyles
                }
              },
              "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {
                ...activeLabelStyles
              },
              label: {
                top: 0,
                left: 0,
                zIndex: 2,
                position: "absolute",
                backgroundColor: "transparent",
                pointerEvents: "none",
                mx: 3,
                px: 1,
                my: 2,
                transformOrigin: "left top"
              }
            }
          }
        }
      }
    }
  },
  withDefaultColorScheme({
    colorScheme: 'primary', // Use your custom primary color
    components: ['Button', 'Badge'],
  }),
  withDefaultColorScheme({
    colorScheme: 'blue', // Set different color scheme for other components
    components: ['Alert', 'Table'],
  }),
)

export default customTheme
