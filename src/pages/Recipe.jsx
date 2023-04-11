import {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import { FaArrowCircleLeft, FaClipboardList } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi"
import { useNavigate } from 'react-router-dom';

export const Recipe = () => {

  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}

  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions")

  const fetchInfo = async() => {
    const data = await fetch (`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${import.meta.env.VITE_API_KEY}`);
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchInfo();
  }, [params.name]);

  return(
    <DetailWrapper>

      <span>
        <FaArrowCircleLeft onClick={goBack}/>
      </span>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <div>
          <Button className={activeTab === "instructions" ? "active" : ""} onClick={() => setActiveTab("instructions")}>
            Instructions
            <FaClipboardList />
            
          </Button>
          <Button className={activeTab === "ingredients" ? "active" : ""} onClick={() => setActiveTab("ingredients")}>
          Ingredients
          <GiFruitBowl />
          </Button>
        </div>
        {activeTab === "instructions" && (
          <section>
            <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
            <h3 dangerouslySetInnerHTML={{__html: details.diets}}></h3>
          </section>
        )}
        {activeTab === "ingredients" && (
          <ul>
          {details.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>))}
        </ul>
        )}
        
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display:flex;
  flex-direction: column;
  align-items: center;
  

  .active{
    background: #67c0b0;
    color: white;
  }

  span{
    margin-right: 40rem;
    padding: 3rem;
    color:  #67c0b0;
    font-size: 2rem;

  }

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2{
    margin-bottom: 2rem;
    justify-content:center;
    text-transform: uppercase;
    color: rgb(56,56,56);
  }

  li{
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul{
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: rgb(56,56,56);
  background: white;
  border: 2px solid #67c0b0;
  margin-right: 2rem;
  font-weight: 600;
  font-size: 1.25rem;
`;

const Info = styled.div`

  div{
    display: flex;
    flex-direction: row;  
    justify-content: center;
    margin: 2rem;
  }

  section{
    text-align: justify;
    
  }

  h3{
    border: 1px solid #67c0b0;
    border-radius: 2rem;
    padding: 1rem;
    text-align: center;
  }

  svg{
    margin-left: 1rem;
  }

`





