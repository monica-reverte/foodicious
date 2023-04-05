import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home"
import { Diet } from "../pages/Diet";
import { SearchInput } from "../pages/SearchInput";
import { Recipe } from "../pages/Recipe";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";


function Pages() {

    const location = useLocation();

    return(
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/diet/:type" element={<Diet />} />
            <Route path="/search/:search" element={<SearchInput />} />
            <Route path="/recipe/:name" element={<Recipe />}  />
        </Routes>
        </AnimatePresence>
    )
}

export default Pages

