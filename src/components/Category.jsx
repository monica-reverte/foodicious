import styled from "styled-components";
import { NavLink } from "react-router-dom";



export const Category = () => {
  return (
    <List>
      <Nlink to={"/diet/glutenfree"}>
        <p>GLUTEN FREE</p>
      </Nlink>
      <Nlink to={"/diet/ketogenic"}>
        <p>KETOGENIC</p>
      </Nlink>
      <Nlink to={"/diet/vegetarian"}>
        <p>VEGETARIAN</p>
      </Nlink>
      <Nlink to={"/diet/vegan"}>
        <p>VEGAN</p>
      </Nlink>
      <Nlink to={"/diet/pescetarian"}>
        <p>PESCETARIAN</p>
      </Nlink>
      <Nlink to={"/diet/paleo"}>
        <p>PALEO</p>
      </Nlink>

    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const Nlink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 500;

  &.active {
    color: #67c0b0;
  }
`

