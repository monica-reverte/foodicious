import { useState, useEffect} from 'react'
import { useParams, Link } from "react-router-dom";
import styled from 'styled-components';
require("dotenv").config();

export const SearchInput = () => {

  const [searchRecipe, setSearchRecipes] = useState([]);
  let params = useParams();

  const getSearchInput = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=25b391182638438e8b24f28b555e9b64&query=${name}`);
    const recipes = await data.json();
    setSearchRecipes(recipes.results);
  };

  useEffect(()=>{
    getSearchInput(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searchRecipe.map((item) => {
        return(
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            </Link>
          </Card>
        )
      })}

    </Grid>
  )
}


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;

`;

const Card = styled.div`
  img{
    width: 100%;
    border-radius: 2rem;
  }

  a{
    text-decoration: none;
  }

  h4{
    text-align: center;
    padding: 1rem;
  }
`

