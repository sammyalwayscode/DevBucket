import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import styled from "styled-components";
const Home = () => {
  const [getProjects, setGetProjects] = useState([]);

  const getProjectsData = async () => {
    try {
      // const mainURI = "https://devbucket.onrender.com";
      const localURI = "http://localhost:2001";
      const URI = `${localURI}/api/allProjects`;

      await axios.get(URI).then((res) => {
        console.log(res.data.data);
        setGetProjects(res.data.data);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProjectsData();
  }, []);

  return (
    <Container>
      <Wrapper>
        {getProjects?.map((props) => {
          return (
            <DisplayCards key={props._id}>
              <ImageDiv>
                <img src={props.projectImage} alt="" />
              </ImageDiv>
              <NameLikeDiv>
                <Top>
                  <ProgUser>
                    <img src="/image/ava.png" alt="" />
                  </ProgUser>
                  <ProgTitle> {props.projectTitle} </ProgTitle>
                </Top>
                <LikeComment>
                  <LikeHold>
                    <Icon>
                      <AiFillHeart size="17" />
                    </Icon>
                    <LikeNum> {props.likes.length} </LikeNum>
                  </LikeHold>
                  <CommentHold>
                    <Icon>
                      <FaComment size="15" />
                    </Icon>
                    <CommentNum>{props.comments.length}</CommentNum>
                  </CommentHold>
                </LikeComment>
              </NameLikeDiv>
            </DisplayCards>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.pageBackground};
`;
const Wrapper = styled.div`
  width: 95%;
  /* color: #000; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* background-color: aliceblue; */
`;
const DisplayCards = styled.div`
  height: 260px;
  width: 300px;
  /* background-color: aliceblue; */
  margin: 10px;
  @media (max-width: 500px) {
    width: 100%;
    margin: 10px 0;
  }
`;
const ImageDiv = styled.div`
  height: 220px;
  width: 100%;
  margin-bottom: 10px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
const NameLikeDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
`;
const ProgUser = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: 1px solid #000;
  margin-right: 7px;
  cursor: pointer;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
const ProgTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
`;
const LikeComment = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
`;
const LikeHold = styled.div`
  display: flex;
  margin-right: 8px;
  cursor: pointer;
`;
const Icon = styled.div`
  margin-right: 2px;
`;
const LikeNum = styled.div``;
const CommentHold = styled.div`
  display: flex;
  cursor: pointer;
`;
const CommentNum = styled.div``;
