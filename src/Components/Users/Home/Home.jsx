import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import styled from "styled-components";
const Home = () => {
  return (
    <Container>
      <Wrapper>
        <DisplayCards>
          <ImageDiv>
            <img src="/image/grr.jpg" alt="" />
          </ImageDiv>
          <NameLikeDiv>
            <Top>
              <ProgUser>
                <img src="/image/ava.png" alt="" />
              </ProgUser>
              <ProgTitle>The Git Guildians...</ProgTitle>
            </Top>
            <LikeComment>
              <LikeHold>
                <Icon>
                  <AiFillHeart size="17" />
                </Icon>
                <LikeNum>20</LikeNum>
              </LikeHold>
              <CommentHold>
                <Icon>
                  <FaComment size="15" />
                </Icon>
                <CommentNum>34</CommentNum>
              </CommentHold>
            </LikeComment>
          </NameLikeDiv>
        </DisplayCards>
        <DisplayCards>
          <ImageDiv>
            <img src="/image/grr.jpg" alt="" />
          </ImageDiv>
          <NameLikeDiv>
            <Top>
              <ProgUser>
                <img src="/image/ava.png" alt="" />
              </ProgUser>
              <ProgTitle>The Git Guildians...</ProgTitle>
            </Top>
            <LikeComment>
              <LikeHold>
                <Icon>
                  <AiFillHeart size="17" />
                </Icon>
                <LikeNum>20</LikeNum>
              </LikeHold>
              <CommentHold>
                <Icon>
                  <FaComment size="15" />
                </Icon>
                <CommentNum>34</CommentNum>
              </CommentHold>
            </LikeComment>
          </NameLikeDiv>
        </DisplayCards>
        <DisplayCards>
          <ImageDiv>
            <img src="/image/grr.jpg" alt="" />
          </ImageDiv>
          <NameLikeDiv>
            <Top>
              <ProgUser>
                <img src="/image/ava.png" alt="" />
              </ProgUser>
              <ProgTitle>The Git Guildians...</ProgTitle>
            </Top>
            <LikeComment>
              <LikeHold>
                <Icon>
                  <AiFillHeart size="17" />
                </Icon>
                <LikeNum>20</LikeNum>
              </LikeHold>
              <CommentHold>
                <Icon>
                  <FaComment size="15" />
                </Icon>
                <CommentNum>34</CommentNum>
              </CommentHold>
            </LikeComment>
          </NameLikeDiv>
        </DisplayCards>
        <DisplayCards>
          <ImageDiv>
            <img src="/image/grr.jpg" alt="" />
          </ImageDiv>
          <NameLikeDiv>
            <Top>
              <ProgUser>
                <img src="/image/ava.png" alt="" />
              </ProgUser>
              <ProgTitle>The Git Guildians...</ProgTitle>
            </Top>
            <LikeComment>
              <LikeHold>
                <Icon>
                  <AiFillHeart size="17" />
                </Icon>
                <LikeNum>20</LikeNum>
              </LikeHold>
              <CommentHold>
                <Icon>
                  <FaComment size="15" />
                </Icon>
                <CommentNum>34</CommentNum>
              </CommentHold>
            </LikeComment>
          </NameLikeDiv>
        </DisplayCards>
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ba;
`;
const Wrapper = styled.div`
  width: 95%;
  color: #000;
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
