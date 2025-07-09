import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home.js';
import Contact from "./pages/contact.js";
import NoPage from "./pages/nopage.js";
import Navbar from "./components/navbar.js";
import './styles/style.css'
import { GlobalStyles } from "@mui/material";

function App() {
  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          },
          "body::-webkit-scrollbar": {
            display: "none",
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
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
