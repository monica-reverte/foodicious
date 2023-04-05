import { Banner } from "../components/Banner";
import { Trending } from "../components/Trending";
import { motion } from "framer-motion";



export const Home = () => {

  return (

    <motion.div>
      <Banner />
      <Trending />
    </motion.div>

  )


}

