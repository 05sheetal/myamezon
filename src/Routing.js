import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";
import Women from "./Women";
import Mens from "./Mens";

import Jewellery from "./Jewellery";
function Routing()
{
    return(
        <div>
      <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="women" element={<Women></Women>}></Route>
        <Route path="mens" element={<Mens></Mens>}></Route>
        <Route path="jewellery" element={<Jewellery></Jewellery>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
      </div>
    )
}export default Routing