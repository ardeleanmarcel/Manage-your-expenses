import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  GlobalStyles,
  PaletteMode,
  ThemeProvider,
  createTheme,
} from '@mui/material'

import Register from './Pages/Register/Register'
import LoginWithFormik from './Pages/Home/Home'
import './App.css'
import React from 'react'

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#4B0082',
          },
          background: {
            default: '#F8F8FF',
          },
          text: {
            primary: '#000000',
            secondary: '#4B0082',
          },
          action: {
            active: '#4B0082',
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#FF0000',
          },
          background: {
            default: '#121212',
          },
          text: {
            primary: '#FFFFFF',
            secondary: '#ffcccb',
          },
          action: {
            active: 'red',
          },
        }),
  },
})

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
})

export default function App() {
  const [mode, setMode] = React.useState<PaletteMode>('light')
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        )
      },
    }),
    []
  )

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <GlobalStyles
          styles={{
            body: {
              backgroundColor: theme.palette.background.default,
            },
          }}
        />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginWithFormik />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
