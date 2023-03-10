import styled from "styled-components";
import { AiOutlineDown } from "react-icons/ai";
import teste from "../assets/img.jpg";
import { DebounceInput } from 'react-debounce-input';
import { useState, useCallback, useEffect } from "react";
import axios from "axios"
import env from "react-dotenv";
import { Link, useNavigate } from "react-router-dom"

export default function NavBar() {
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const handleChange = useCallback((event) => {
    const { value } = event.target;
    setSearch(value)
  }, [])

  useEffect(() => {
    if (search === "") {
      setSearchResults([])
      return
    }

    const URL = `${env.REACT_APP_API_URL}/users`

    const promise = axios.get(URL, {
      params: {
        peopleSearched: search
      }
    })

    promise.then((res) => {
      console.log('deu certo');
      setSearchResults(res.data);
      console.log(search);
    })

    promise.catch((err) => {
      console.log('oxe, algo deu errado');
    })

    console.log(searchResults)

  }, [search])

  return (
    <ContainerHeader>
      <p>linkr</p>
      <Search>
        <DebounceInput
          data-test="search"
          type="search"
          placeholder="Search for people"
          minLength={3}
          debounceTimeout={300}
          onChange={handleChange}
        />
        <Results show={searchResults.length ? "flex" : "none"} >
          {searchResults.map((item) => (
            <Link to={`/user/${item.id}`}>
              <SingleResult data-test="user-search">
                <img src={item.image} alt={"foto de perfil do usuário"} />
                <h1>{`${item.name}`}</h1>
              </SingleResult>
            </Link>
          ))}
        </Results>
      </Search>
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

const SingleResult = styled.div`
display: flex;
align-items: center;
//margin-top: 14px;
margin-bottom: 15px;
margin-left: 17px;
//background-color: red;

  h1{
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    color: #515151;
    margin-left: 12px;
  }
`

const Results = styled.div`
  padding-top: 19px;
  position: absolute;
  top: 33px;
  display: ${(props) => props.show};//flex;
  width: 563px;
  flex-direction: column;
  background-color: #E7E7E7;
  border-radius: 8px;
  z-index: 0;
  img{
    width: 39px;
    height: 39px;
    border-radius: 200px;
    object-fit: cover;
}
`

const Search = styled.div`
position: relative;
`

const ContainerHeader = styled.div`
  background-color: #151515;
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  //position: relative;

  
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
    padding-left: 17px;
    position: relative;
    z-index: 1;

    ::placeholder {
      font-family: "Lato", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 19px;
      line-height: 23px;
      color: #c6c6c6;
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




