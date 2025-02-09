// custom styles
import "./src/styles/normalize.css"
// custom typefaces

export const onClientEntry = () => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    document.documentElement.setAttribute('data-theme', savedTheme)
}