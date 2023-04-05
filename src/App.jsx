import React from "react";
import Pages from "./routes/Pages"
import { BrowserRouter } from "react-router-dom";
import { Category } from "./components/Category";
import { Search } from "./components/Search";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";





function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Search />
        <Category />
        <Pages />
        <Footer />      
      </BrowserRouter>
  
    
    </div>
  )
}






export default App
