import styled from "styled-components";

export const MyTeamBgContainer = styled.div`
  background-image: linear-gradient(
    to bottom,
    #ffffff,
    #cffcf1,
    #cffcf1,
    #cffcf1,
    #defafe
  );
  min-height: 91vh;
  display: flex;
  justify-content: center;
`;

export const MyTeamContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h1`
  font-family: "Bree Serif";
  font-size: 32px;
  color: #334155;
`;

export const ShowDesc = styled.p`
  font-family: "Bree Serif";
  font-size: 14px;
  color: #334155;
  position: fixed;
  top: 10%;
  left: 90%;
`;

export const ProfilesListContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  width: 95%;
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 85%;
  left: 70%;

  @media screen and (min-width: 768px) {
    top: 85%;
    left: 93%;
  }
`;

export const WhatsappButton = styled.a`
  background-image: url("https://res.cloudinary.com/saiuttej/image/upload/v1668920336/Insta%20Share%20Project%20Assets/whatsapp_icon_wgpxsp.png");
  background-size: cover;
  width: 50px;
  height: 50px;
  background-color: transparent;
  outline: none;
  border: transparent;
  cursor: pointer;

  :hover {
    border: 1px solid #25d366;
    border-radius: 100px;
    box-shadow: 0px 0px 10px grey;
  }

  @media screen and (min-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const FailureImg = styled.img`
  width: 120px;

  @media screen and (min-width: 992px) {
    width: 200px;
  }
`;

export const FailureTitle = styled.h1`
  font-family: "Roboto";
  font-size: 16px;
  color: #383838;
  text-align: center;
  margin-top: 20px;
  font-weight: 500;

  @media screen and (min-width: 992px) {
    font-size: 24px;
    margin-top: 40px;
  }
`;

export const FailureDesc = styled.p`
  font-family: "Roboto";
  font-size: 14px;
  color: #606060;
  text-align: center;
  margin-top: 0px;
  padding: 0px 20px;
  max-width: 400px;

  @media screen and (min-width: 992px) {
    font-size: 16px;
    max-width: 450px;
  }
`;

export const RetryButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #4f46e5;
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 500;
  color: #ffffff;
  border-radius: 4px;
  width: 80px;
  height: 32px;
  margin-top: 5px;
`;
