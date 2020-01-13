import * as React from 'react'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import defaultTheme from './theme'
import Header from './Header'

export default function ThemeProvider ({ children, theme = {}, location }) {
  return (
    <div>
      <Header location={location} />
      <EmotionThemeProvider theme={{ ...defaultTheme, ...theme }}>
        {children}
      </EmotionThemeProvider>
    </div>
  )
}
