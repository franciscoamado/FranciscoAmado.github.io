import Typography from "typography"
// import Wordpress2016 from "typography-theme-wordpress-2016"

// Wordpress2016.overrideThemeStyles = () => {
//   return {
//     "a.gatsby-resp-image-link": {
//       boxShadow: `none`,
//     },
//   }
// }

// delete Wordpress2016.googleFonts

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "avenir next",
    "avenir",
    "helvetica neue",
    "helvetica",
    "ubuntu",
    "roboto",
    "noto",
    "segoe ui",
    "arial",
    "sans-serif",
  ],
  headerWeight: 600,
  headerColor: "#333",
  bodyFontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "avenir next",
    "avenir",
    "helvetica neue",
    "helvetica",
    "ubuntu",
    "roboto",
    "noto",
    "segoe ui",
    "arial",
    "sans-serif",
  ],
  bodyColor: "#222",
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
