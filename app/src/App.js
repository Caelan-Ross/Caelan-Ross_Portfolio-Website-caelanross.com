import { GlobalStyles } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout.js";
import Contact from "./pages/contact.js";
import Home from "./pages/home.js";
import NoPage from "./pages/nopage.js";
import "./styles/style.css";

function App() {
  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            margin: 0,
          },
          "body::-webkit-scrollbar": {
            display: "none",
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
