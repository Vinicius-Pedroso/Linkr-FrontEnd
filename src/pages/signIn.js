import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function SignInPage() {

  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

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
        <button onClick={() => SendSignIn({email, password})}>
          Log In
        </button>

        <SignUpLink>
          <Link to='/signup'>
            <p>First time? Create an account!</p>
          </Link>
        </SignUpLink>

      </RightContainer>
    </Body>
  )
}

function SendSignIn(email, password){

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

const SignUpLink = styled.div`
  p{
  font-family: "Lato";
  font-size: 17px;
  color: #ffffff;
  text-decoration: underline;
  margin-top: 18px;
  }
`;