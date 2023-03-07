import styled from 'styled-components'

export default function signInPage(){

    return (
        <Body>
            <LeftContainer>
                <h1>linkr</h1>
                <h2>save, share and discover the best links on the web</h2>
            </LeftContainer>
            <RightContainer>

            </RightContainer>
        </Body>
    )
}

const Body = styled.div`
    display: flex;
`

const LeftContainer = styled.div`
    background-color: #151515;
    width: 60%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;

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
`

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`