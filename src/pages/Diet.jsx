import  React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";


export const Diet = () => {

  const [diet, setDiet] = useState ([]);
  let params = useParams();

  const getDiet = async (name) => {

  const check = localStorage.getItem("diet");

    if(check){
      setDiet(JSON.parse(check));
    }else{
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=25b391182638438e8b24f28b555e9b64&diet=${name}`);
    const recipes = await data.json();

      localStorage.setItem("diet", JSON.stringify(data.recipes));
      setDiet(recipes.results)
      console.log(data);
    }
  }

  // const getDiet = async (name) => {
  //   const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=25b391182638438e8b24f28b555e9b64&diet=${name}`);
  //   const recipes = await data.json();
  //   setDiet(recipes.results);
  // };

  useEffect(()=> {
    getDiet(params.type)
  }, []);

  return (
  <Grid
  animate={{opacity:1}}
  initial={{opacity: 0}}
  exit={{opacity: 0}}
  transition={{duration: 0.5}}
  >
    {diet.map((item)=> {
      return(
        <Card key={item.id}>
          <Link to={"/recipe/" + item.id}>
          <img src={item.image} alt={item.title}/>
          <h4>{item.title}</h4>
          </Link>
        </Card>
      )
    })}
    </Grid>
  )
  
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;

`;

const Card = styled.div`
  img{
    width: 100%;
    border-radius: 0.5rem;
    opacity: 90%;
  }

  a{
    text-decoration: none;
  }

  h4{
    text-align: center;
    padding: 1rem;
  }
`
