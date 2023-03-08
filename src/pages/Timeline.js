import NavBar from "../components/NavBar";
import React from "react";
import styled from "styled-components";
import SideBar from "../components/SideBar";
import Post from "../components/Post";
import Posts from "../components/Posts";

export default function Timeline() {
  return (
    <>
      <NavBar />
      <Container>
        <Feed>
          <TL>timeline</TL>
          <Post />
          <Posts/>
        </Feed>
        <SideBar />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 1024px;
  display: flex;
  justify-content: center;
  background-color: #333333;
`;

const Feed = styled.div`

`;
const TL = styled.p`
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 43px;
  line-height: 64px;
  color: #ffffff;
  margin-bottom: 20px;
`;

