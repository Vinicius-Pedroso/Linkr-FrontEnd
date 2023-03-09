import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'

export default function SignUpPage() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")  
  const [username, setUsername] = useState("")
  const [pictureUrl, setPictureUrl] = useState("")

  return (
    <Body>
      <LeftContainer>
        <div>
          <h1>linkr</h1>
          <h2>save, share and discover the best links on the web</h2>
        </div>
      </LeftContainer>
      <RightContainer>
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="e-mail"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="password"
          required
        />
        <input
          type="username"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="username"
          required
        />
        <input
          type="pictureUrl"
          name="pictureUrl"
          value={pictureUrl}
          onChange={e => setPictureUrl(e.target.value)}
          placeholder="pictureUrl"
          required
        />
        <button onClick={() => SendSignUp({email, password, username, pictureUrl})}>
          Sign In
        </button>

        <SignInLink>
          <Link to='/'>
            <p>Switch back to log in</p>
          </Link>
        </SignInLink>

      </RightContainer>
    </Body>
  )
}

async function SendSignUp(email, password, username, pictureUrl){

  const navigate = useNavigate();

  const userSignUp = {
    email: email,
    password: password,
    username: username,
    pictureUrl: pictureUrl
  }

  const promise = axios.post(`https://linkr-backend3.onrender.com/signup";`, userSignUp)
  promise.catch(error => {
    alert("Cadastro não foi efetuado corretamente. Mais informações estão disponíveis no console")
    console.log(error)
  })

  return promise.then((response) => {
    localStorage.setItem("User_Info", JSON.stringify(response.data))
    if (response.data){
        navigate("/timeline")
    } else {
        navigate("/")
    }
  });
}

const Body = styled.div`
  display: flex;
`;

const LeftContainer = styled.div`
  width: 60%;
  background-color: #151515;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  @media (min-width: 612px) {
    width: 67%;
    height: 100vh;
  }

  div {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-family: "Passion One";
    font-weight: 700;
    font-size: 76px;
    color: #ffffff;
  }

  h2 {
    font-family: "Oswald";
    font-weight: 700;
    font-size: 23px;
    color: #ffffff;
  }
`;

const RightContainer = styled.div`
  width: 40%;
  background-color: #2b2b2b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-top: 8px;
    height: 45px;
    padding-left: 11px;
    border-radius: 6px;
    font-family: 'Oswald';
    font-size: 22px;
    font-weight: 700;
    color: black;
    background: "#F2F2F2";
  }
  input::placeholder {
    color: #9F9F9F;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 45px;
    margin-top: 8px;
    padding-left: 11px;
    background: #1877f2;
    border: none;
    border-radius: 6px;
    font-family: 'Oswald';
    font-size: 22px;
    font-weight: 700;
    color: #ffffff;
  }
`;

const SignInLink = styled.div`
  p{
  font-family: "Lato";
  font-size: 17px;
  color: #ffffff;
  text-decoration: underline;
  margin-top: 18px;
  }
`;