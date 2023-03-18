import React from "react";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import styled from "styled-components";

const DetailPage = () => {
  return (
    <Container>
      <Wrapper>
        <TopBox>
          <UserAvatar>
            <img src="/image/ava.png" alt="" />
          </UserAvatar>
          <UserProjDetails>
            <ProjectName>Behance Saas Redesign | Darkmode</ProjectName>
            <UserName>Olorunda Samuel | follow</UserName>
          </UserProjDetails>
        </TopBox>

        <ButtomBox>
          <ImageBox>
            <img src="/image/test.png" alt="" />
          </ImageBox>
          <DescriptionBox>
            <DiscriptionBoxHold>
              <ProjectTitle>The Best Design Ever</ProjectTitle>
              <ProjectContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
                Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                sapiente officiis modi at sunt excepturi expedita sint? Sed
                quibusdam recusandae alias error harum maxime adipisci amet
                laborum. Perspiciatis minima nesciunt dolorem! Officiis iure
                rerum voluptates a cumque velit quibusdam sed amet tempora. Sit
                laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim
                commodi iusto libero magni deleniti quod quam consequuntur!
                Commodi minima excepturi repudiandae velit hic maxime
                doloremque. Quaerat provident commodi consectetur veniam
                similique ad earum omnis ipsum saepe, voluptas, hic voluptates
                pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
                excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
                Voluptatem quaerat non architecto ab laudantium modi minima sunt
                esse temporibus sint culpa, recusandae aliquam numquam totam
                ratione voluptas quod exercitationem fuga. Possimus quis earum
                veniam quasi aliquam eligendi, placeat qui corporis!
              </ProjectContent>
            </DiscriptionBoxHold>
          </DescriptionBox>
          <LovePublishHold>
            <LoveIcon>
              <AiFillHeart />
            </LoveIcon>
            <ProjectTitleButtom>
              Behance Saas Redesign | Darkmode
            </ProjectTitleButtom>
            <LikesCommentHold>
              <IconNumHold>
                <Icons>
                  <AiFillHeart />
                </Icons>
                <IconsNum>20</IconsNum>
              </IconNumHold>
              <IconNumHold>
                <Icons>
                  <AiFillEye />
                </Icons>
                <IconsNum>413</IconsNum>
              </IconNumHold>
              <IconNumHold>
                <Icons>
                  <FaComment />
                </Icons>
                <IconsNum>12</IconsNum>
              </IconNumHold>
            </LikesCommentHold>

            <PublishDiv>Published: June 15 2020</PublishDiv>
          </LovePublishHold>
          <CommentsDiv>
            <CommentDivHold>
              <PostComments>
                <UserAva>
                  <img src="/image/ava.png" alt="" />
                </UserAva>
                <TextAreaBtn>
                  <textarea placeholder="What are your thoughts on this project?" />
                  <AreaBtn>
                    <button>Post a Comment</button>
                  </AreaBtn>
                </TextAreaBtn>
              </PostComments>
              <hr />
              <AllComments>
                <UserComment>
                  <UserCommAva>
                    <img src="/image/ava.png" alt="" />
                  </UserCommAva>
                  <UserCommDetails>
                    <UserNameDate>
                      {" "}
                      <span>Olorunda Samuel</span> <BsDot />{" "}
                      <small>2 minutes ago</small>{" "}
                    </UserNameDate>
                    <UserMainComment>
                      No highly saturated colors. Brilliant color balance!
                    </UserMainComment>
                  </UserCommDetails>
                </UserComment>
                <UserComment>
                  <UserCommAva>
                    <img src="/image/grr.jpg" alt="" />
                  </UserCommAva>
                  <UserCommDetails>
                    <UserNameDate>
                      {" "}
                      <span>Lawal Ayomide</span> <BsDot />{" "}
                      <small>17 minutes ago</small>{" "}
                    </UserNameDate>
                    <UserMainComment>
                      Detailed yet simple, great concept and project!
                    </UserMainComment>
                  </UserCommDetails>
                </UserComment>
              </AllComments>
            </CommentDivHold>
          </CommentsDiv>
          <GitHubLiveCard>
            <GitLiveCardHold>
              <GitCardHold>
                <TopCard>CheckOut My Codes</TopCard>
                <CardButton>
                  <button>View On GitHub</button>
                </CardButton>
              </GitCardHold>
              <GitCardHold>
                <TopCard>View Live Project</TopCard>
                <CardButton>
                  <button>Go To Site</button>
                </CardButton>
              </GitCardHold>
            </GitLiveCardHold>
          </GitHubLiveCard>
        </ButtomBox>
      </Wrapper>
    </Container>
  );
};

export default DetailPage;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.userDetailPageBackgroundColor};
`;
const Wrapper = styled.div`
  width: 85%;

  @media (max-width: 500px) {
    width: 95%;
  }
`;

const TopBox = styled.div`
  display: flex;
  margin: 20px 0;
`;

const ButtomBox = styled.div`
  background-color: #fafafa;
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageBox = styled.div`
  width: 100%;
  /* margin-bottom: 30px; */
  img {
    width: 100%;
    object-fit: cover;
  }
`;
const DescriptionBox = styled.div`
  padding: 40px 0;
  background-color: #ffffff;
  /* background-color: ${(props) =>
    props.theme.userDetailPageBackgroundColorCard}; */
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const UserAvatar = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: lightgray;
  border: 1px solid #000;
  margin-right: 8px;

  img {
    height: 35px;
    width: 35px;
    object-fit: cover;
    border-radius: 50%;
  }
`;
const UserProjDetails = styled.div``;
const ProjectName = styled.div`
  font-size: 17px;
  font-weight: 700;

  @media (max-width: 500px) {
    font-size: 15px;
  }
`;
const UserName = styled.div`
  font-size: 13px;
  @media (max-width: 500px) {
    font-size: 11px;
  }
`;

const DiscriptionBoxHold = styled.div`
  width: 80%;
  color: #696969;
  font-size: 20px;

  @media (max-width: 800px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 95%;
  }
`;

const ProjectTitle = styled.h1`
  @media (max-width: 800px) {
    font-size: 25px;
    text-align: center;
  }
`;
const ProjectContent = styled.div`
  @media (max-width: 800px) {
    font-size: 15px;
    text-align: center;
  }
`;
const LovePublishHold = styled.div`
  width: 100%;
  height: 290px;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LoveIcon = styled.div`
  height: 80px;
  width: 80px;
  background-color: #ff0000;
  font-size: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;
  cursor: pointer;

  :hover {
    background-color: #da0600;
  }
`;
const ProjectTitleButtom = styled.div`
  margin: 20px 0;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;
const LikesCommentHold = styled.div`
  display: flex;
  color: #959595;
`;
const IconNumHold = styled.div`
  display: flex;
  margin: 0 5px;
  margin-bottom: 25px;
  /* align-items: center; */
  /* background-color: aliceblue; */
`;
const Icons = styled.div`
  margin-right: 3px;
`;
const IconsNum = styled.div`
  font-size: 13px;
  font-weight: 600;
`;
// const ChecksHold = styled.div``;
// const CommentHold = styled.div``;
const PublishDiv = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #959595;
`;

const CommentsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const CommentDivHold = styled.div`
  width: 80%;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
    width: 100%;
  }

  hr {
    width: 100%;
    border: none;
    background-color: lightgray;
    height: 1px;
  }
`;
const PostComments = styled.div`
  width: 95%;
  /* background-color: aliceblue; */
  margin-top: 20px;
  display: flex;
  margin-bottom: 30px;
`;
const UserAva = styled.div`
  height: 50px;
  width: 50px;
  border: 1px solid gray;
  border-radius: 50%;
  margin-right: 20px;
  img {
    height: 50px;
    width: 50px;
    object-fit: cover;
    border-radius: 50%;
  }

  @media (max-width: 500px) {
    height: 30px;
    width: 30px;
    margin-right: 10px;
    img {
      height: 30px;
      width: 30px;
    }
  }
`;
const TextAreaBtn = styled.div`
  width: 100%;
  textarea {
    width: 98%;
    height: 120px;
    resize: none;
    border: 1px solid lightgray;
    font-family: Montserrat;
    font-weight: 600;
    padding-left: 10px;
    padding-top: 10px;
    outline: none;
  }
`;
const AreaBtn = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: flex-end;
  button {
    height: 35px;
    width: 150px;
    border-radius: 40px;
    background-color: transparent;
    border: 1px solid lightgray;
    transition: all 350ms;
    font-family: Montserrat;
    font-weight: 600;
    cursor: pointer;
    :hover {
      background-color: #f1f1f1;
      transform: scale(0.97);
    }
  }
`;
const AllComments = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
`;
const UserComment = styled.div`
  display: flex;
  margin: 20px 0;
`;
const UserCommAva = styled.div`
  height: 50px;
  width: 50px;
  border: 1px solid gray;
  border-radius: 50%;
  margin-right: 20px;
  img {
    height: 50px;
    width: 50px;
    object-fit: cover;
    border-radius: 50%;
  }

  @media (max-width: 500px) {
    height: 30px;
    width: 30px;
    margin-right: 10px;
    img {
      height: 30px;
      width: 30px;
    }
  }
`;
const UserCommDetails = styled.div``;
const UserNameDate = styled.div`
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  small {
    font-size: 11px;
    font-weight: lighter;
  }

  @media (max-width: 500px) {
    font-size: 12px;
    small {
      font-size: 9px;
    }
  }
`;
const UserMainComment = styled.div`
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const GitHubLiveCard = styled.div`
  margin-bottom: 30px;
`;
const GitLiveCardHold = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const GitCardHold = styled.div`
  height: 240px;
  width: 432px;
  background-color: #fff;
  margin: 0 25px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin: 10px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;
const TopCard = styled.div`
  height: 120px;
  background-color: #000;
  color: #fff;
  font-size: 25px;
  font-weight: 800;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;
const CardButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  button {
    height: 35px;
    width: 90%;
    border-radius: 40px;
    background-color: transparent;
    border: 1px solid lightgray;
    transition: all 350ms;
    font-family: Montserrat;
    font-weight: 600;
    cursor: pointer;
    :hover {
      background-color: #f1f1f1;
      transform: scale(0.97);
    }
  }
`;
