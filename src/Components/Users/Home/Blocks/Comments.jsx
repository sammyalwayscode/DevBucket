import styled from "styled-components";
import React, { useState } from "react";
import moment from "moment";
import { BsDot } from "react-icons/bs";

const Comments = () => {
  const [projectComments, setProjectComments] = useState([]);
  console.log("Top View", projectComments);

  //   const getUsersComments = async () => {
  //     try {
  //       // const mainURI = "https://devbucket.onrender.com";
  //       const localURI = "http://localhost:2001";
  //       const URI = `${localURI}/api/comments/${id}/projectComments`;

  //       await axios.get(URI).then((res) => {
  //         setProjectComments(res);
  //         console.log("Console View", res.data.data.comments);
  //         console.log("State View", projectComments);
  //       });
  //     } catch (error) {
  //       console.log("An Error Occoured", error);
  //     }
  //   };

  //   useEffect(() => {
  //     getUsersComments();
  //     return () => getUsersComments();
  //   }, []);

  return (
    <Container>
      {/* <CommentsDiv>
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
            {projectComments?.map((props) => {
              return (
                <UserComment>
                  <UserCommAva>
                    <img
                      src={
                        props.userCommentAvatar !== ""
                          ? props.userCommentAvatar
                          : "/image/ava.png"
                      }
                      alt=""
                    />
                  </UserCommAva>
                  <UserCommDetails>
                    <UserNameDate>
                      {" "}
                      <span> {props.userCommentName} </span> <BsDot />{" "}
                      <small> {moment(props.createdAt).fromNow()} </small>{" "}
                    </UserNameDate>
                    <UserMainComment>{props.userComment}</UserMainComment>
                  </UserCommDetails>
                </UserComment>
              );
            })}
          </AllComments>
        </CommentDivHold>
      </CommentsDiv> */}

      <h2>Comments</h2>
    </Container>
  );
};

export default Comments;

const Container = styled.div``;

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
