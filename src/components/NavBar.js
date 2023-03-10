import styled from "styled-components";
import { AiOutlineDown } from "react-icons/ai";
import teste from "../assets/img.jpg";

export default function NavBar() {
  return (
    <ContainerHeader>
      <p>linkr</p>
      <input type="search" placeholder="Search for people" />
      <PictureUser>
        <AiOutlineDown
          size={60}
          style={{ color: "#ffffff", padding: "20px" }}
        />
        <img src={teste} alt={"foto de perfil do usuário"} />
      </PictureUser>
    </ContainerHeader>
  );
}

const ContainerHeader = styled.div`
  background-color: #151515;
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  
  p {
    font-family: "Passion One";
    font-style: normal;
    font-weight: 700;
    font-size: 49px;
    line-height: 54px;
    letter-spacing: 0.05em;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    justify-content: space-between;

    input {
        display: none;
    }
  }

  input {
    width: 563px;
    height: 45px;
    background: #ffffff;
    border-radius: 8px;
    border: none;

    ::placeholder {
      font-family: "Lato", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 19px;
      line-height: 23px;
      color: #c6c6c6;
      padding: 17px;
    }
  }

  

`;
const PictureUser = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 53px;
    height: 53px;
    border-radius: 26.5px;
  }
`;


 
 
