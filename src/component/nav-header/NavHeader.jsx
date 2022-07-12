import * as React from "react";
import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Binance's Order Book
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
