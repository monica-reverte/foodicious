import styled from "styled-components"
import banner from "../assets/bannerimg.png"

export const Banner = () => {
  return (
    <BannerContainer>
      <div>
        <h3>Hello!</h3>
        <p>I am a food lover and I created this blog for all the people like me. I spend a lot of our lifetime in the kitchen cooking, baking, and creating! i hope to inspire you to be more confident in the kitchen, because making food from scratch can be really fun. I'm happy to share my easy recipes here with you!</p>
      </div>
      <img src={banner} alt="banner" />
    </BannerContainer>
  )
}

const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 4rem;
  background-color: #f8b69d;

  div{
    flex-direction: column;
    padding: 2rem;
    
  }

  h3{
    color: white;
  }

  p{
    color: white;
    font-weight: 500;
    font-size: 1.25rem;
    text-align: justify;
  }

  img{
    margin: 2rem;
    width: 40%;
  }

  @media only screen and (max-width: 700px) {
    
      display: none;
    }

    @media only screen and (max-width: 1090px) {
    
      flex-direction: column;

      img{
        display: none
      }
    }



`
