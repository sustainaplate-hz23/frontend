import "@fontsource/inter";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "./utils/theme";
import Home from "./components/Home";
import RecipeDetails from "./components/RecipeDetails";
import Lucky from "./components/Lucky";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/lucky" element={<Lucky />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
