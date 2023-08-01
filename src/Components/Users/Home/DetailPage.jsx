import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from "moment";
import Comments from "./Blocks/Comments";
import { useQuery } from "@tanstack/react-query";
import { getProjectDetails } from "../../Api/ApiCalls";

const DetailPage = () => {
  const { id } = useParams();
  console.log(id);

  const projectDetail = useQuery({
    queryFn: () => getProjectDetails(id),
    queryKey: ["projectDetail"],
  });

  const projectInfo = projectDetail?.data?.data;
  console.log("Form React Query", projectInfo);

  const [detailedProject, setDetailedProject] = useState({});

  // console.log(detailedProject);

  const getProjectDetail = async () => {
    try {
      // const mainURI = "https://devbucket.onrender.com";
      const localURI = "http://localhost:2001";
      const URI = `${localURI}/api/project/detail/${id}`;
      await axios.get(URI).then((res) => {
        // console.log("From The Console", res.data.data);
        setDetailedProject(res.data.data);
      });
    } catch (error) {
      console.log("An Error Occoured", error);
    }
  };

  useEffect(() => {
    getProjectDetail();
  }, []);

  return (
    <Container>
      <Wrapper>
        <TopBox>
          <UserAvatar>
            <img src="/image/ava.png" alt="" />
          </UserAvatar>
          <UserProjDetails>
            <ProjectName> {detailedProject?.projectTitle} </ProjectName>
            <UserName>Olorunda Samuel | follow</UserName>
          </UserProjDetails>
        </TopBox>

        <ButtomBox>
          <ImageBox>
            <img src={detailedProject?.projectImage} alt="" />
          </ImageBox>
          <DescriptionBox>
            <DiscriptionBoxHold>
              <ProjectTitle> {detailedProject.projectName} </ProjectTitle>
              <ProjectContent>{detailedProject.projectDetails}</ProjectContent>
            </DiscriptionBoxHold>
          </DescriptionBox>
          <LovePublishHold>
            <LoveIcon>
              <AiFillHeart />
            </LoveIcon>
            <ProjectTitleButtom>
              {detailedProject?.projectTitle}
            </ProjectTitleButtom>
            <LikesCommentHold>
              <IconNumHold>
                <Icons>
                  <AiFillHeart />
                </Icons>
                <IconsNum>
                  {" "}
                  {/* {Math.floor(detailedProject?.likes.length)}{" "} */}
                </IconsNum>
              </IconNumHold>
              <IconNumHold>
                <Icons>
                  <AiFillEye />
                </Icons>
                <IconsNum> 12 </IconsNum>
              </IconNumHold>
              <IconNumHold>
                <Icons>
                  <FaComment />
                </Icons>
                <IconsNum>
                  {" "}
                  {/* {Math.floor(detailedProject?.comments.length)}{" "} */}
                </IconsNum>
              </IconNumHold>
            </LikesCommentHold>

            <PublishDiv>
              Published:{" "}
              {moment(detailedProject.createdAt).format(
                "MMMM Do YYYY, h:mm:ss a"
              )}
            </PublishDiv>
          </LovePublishHold>
          {/* Comment comes in here */}
          <Comments />
          <GitHubLiveCard>
            <GitLiveCardHold>
              <GitCardHold>
                <TopCard>CheckOut My Codes</TopCard>
                <CardButton>
                  <a href={detailedProject.gitHubURI}>
                    <button>View On GitHub</button>
                  </a>
                </CardButton>
              </GitCardHold>
              <GitCardHold>
                <TopCard>View Live Project</TopCard>
                <CardButton>
                  <a href={detailedProject.liveURI}>
                    <button>Go To Site</button>
                  </a>
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
