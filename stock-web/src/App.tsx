import { ThemeProvider } from "@mui/material";
import { createTheme, StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./components/Main";
import { routes as appRoutes } from "./routes";

function App() {
  // define theme
  const theme = createTheme({
    palette: {
      primary: {
        light: "#63b8ff",
        main: "#0989e3",
        dark: "#005db0",
        contrastText: "#000",
      },
      secondary: {
        main: "#4db6ac",
        light: "#82e9de",
        dark: "#00867d",
        contrastText: "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst> {/* solve override makeStyles */}
        <Router>
          <Main routes={appRoutes} />
        </Router>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
