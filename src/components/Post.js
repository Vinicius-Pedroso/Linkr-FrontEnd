import teste from "../assets/img.jpg";
import styled from "styled-components";

export default function Post() {
  return (
    <ContainerPost>
      <UserImage src={teste} />
      <PostForm>
        <FixedText>What are you going to share today?</FixedText>
        <InputLink type="url" placeholder="http://..." />
        <InputComment type="text" placeholder="Add a comment" />
        <PublishButton>Publish</PublishButton>
      </PostForm>
    </ContainerPost>
  );
}

const ContainerPost = styled.div`
  width: 611px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
  align-self: flex-start;
`;

const PostForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FixedText = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #707070;
  margin-bottom: 20px;
`;

const InputLink = styled.input`
  width: 503px;
  height: 30px;
  border: none;
  border-radius: 5px;
  padding: 5px;
  background-color: #efefef;
  margin-bottom: 10px;

  ::placeholder {
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    color: #949494;
  }
`;

const InputComment = styled.input`
  width: 503px;
  height: 66px;
  border: none;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
  background-color: #efefef;

  ::placeholder {
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    color: #949494;
  }
`;

const PublishButton = styled.button`
  width: 112px;
  height: 31px;
  background-color: #1877f2;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  align-self: flex-end;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
`;