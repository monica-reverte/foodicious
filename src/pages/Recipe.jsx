import {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";

export const Recipe = () => {

  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions")

  const fetchInfo = async() => {
    const data = await fetch (`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=25b391182638438e8b24f28b555e9b64`);
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData)
  };

  useEffect(() => {
    fetchInfo();
  }, [params.name]);

  return(
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <div>
          <Button className={activeTab === "instructions" ? "active" : ""} onClick={() => setActiveTab("instructions")}>Instructions</Button>
          <Button className={activeTab === "ingredients" ? "active" : ""} onClick={() => setActiveTab("ingredients")}>Ingredients</Button>
        </div>
        {activeTab === "instructions" && (
          <section>
            <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
            <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
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
  margin-top: 10rem;
  margin-bottom: 5rem;
  display:flex;
  flex-direction: column;
  align-items: center;
  

  .active{
    background: #67c0b0;
    color: white;
  }

  h2{
    margin-bottom: 2rem;
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
  color: grey;
  background: white;
  border: 2px solid #67c0b0;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`

  div{
    display: flex;
    flex-direction: row;  
    justify-content: center;
  }

  section{
    text-align: justify;
  }

`



