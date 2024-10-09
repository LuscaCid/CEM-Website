import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import { AppLayout } from "../Layouts/Main";
import { StructureEvents } from "../Pages/StructureEvents";
import { About } from "../Pages/About";
import { Blog } from "../Pages/Blog";
import { Contact } from "../Pages/Contact";

export const ApplicationRouter = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element ={<Home />}/>
          <Route path="/about" element ={<About />}/>
          <Route path="/structureEvents" element ={<StructureEvents />}/>
          <Route path="/blog" element ={<Blog />}/>
          <Route path="/contact" element ={<Contact />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}