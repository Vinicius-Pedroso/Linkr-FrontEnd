import styled from "styled-components";

export default function SideBar() {
  return (
    <ContainerTrending>
      <Trending>
        <p>trending</p>
      </Trending>
      <TrendingList>
        <li>#react</li>
        <li>#react</li>
        <li>#react</li>
        <li>#react</li>
      </TrendingList>
    </ContainerTrending>
  );
}

const ContainerTrending = styled.div`
  width: 301px;
  max-height: 406px;
  background-color: #171717;
  border-radius: 16px;
  margin: 80px 0 0 30px;
`;

const Trending = styled.div`
  height: 61px;
  border-bottom: 1px solid #484848;

  p {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    color: #ffffff;
    padding: 10px;
  }
`;

const TrendingList = styled.ul`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  letter-spacing: 0.05em;
  color: #ffffff;
  padding: 20px;
`;
