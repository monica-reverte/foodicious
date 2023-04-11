import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide} from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";




export const Trending = () => {

  const [tren, setTren] = useState([]);

  useEffect(()=> {
    getTrending();
  }, []);

  const getTrending = async () => {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=6`);
      const data = await api.json();

      setTren(data.recipes)
      
    }
    
    
  return (
    <div>
      <Wrapper>
        <h3>TRENDING</h3>
          <Splide options={{
            perPage: 2,
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}>
            {tren.map((recipe) => {
              return(
                <SplideSlide key={recipe.id}>
                  <Card>
                  <Link to={"/recipe/" + recipe.id}>
                      <img src={recipe.image} alt={recipe.title} />
                      <h4>{recipe.title}</h4>
                    </Link>
                  </Card>
                </SplideSlide>
              );
            })}
          </Splide>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
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



