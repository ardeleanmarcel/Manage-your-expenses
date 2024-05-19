// src/theme.d.ts
import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    customBackground?: Palette['primary']
  }

  interface PaletteOptions {
    customBackground?: PaletteOptions['primary']
  }
}
