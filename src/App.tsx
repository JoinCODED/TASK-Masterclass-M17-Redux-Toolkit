import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";

import "./App.css";
import CookieAdd from "./pages/CookieAdd";
import CookieEdit from "./pages/CookieEdit";
import CookieList from "./pages/CookieList";
import Home from "./pages/Home";
import { lightTheme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cookies" element={<CookieList />}></Route>
        <Route path="/cookies/new" element={<CookieAdd />}></Route>
        <Route path="/cookies/:cookieId" element={<CookieEdit />}></Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
