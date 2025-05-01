import Footer from "./Components/Common/Footer";
import Nav from "./Components/Common/Nav";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import { BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/projects" element={<Projects/>} />
    <Route path="/contact" element={<Contact/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
