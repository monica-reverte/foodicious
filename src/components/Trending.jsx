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

    const check = localStorage.getItem("trending");

    if(check){
      setTren(JSON.parse(check));
    }else{
      const api = await  (`https://api.spoonacular.com/recipes/random?apiKey=25b391182638438e8b24f28b555e9b64&number=6`);
      const data = await api.json();

      localStorage.setItem("trending", JSON.stringify(data.recipes));
      setTren(data.recipes)
      console.log(data);
    }
    
    
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



