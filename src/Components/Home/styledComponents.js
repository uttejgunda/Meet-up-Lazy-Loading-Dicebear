import styled from "styled-components";

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 85vh;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 95%;
`;

export const PageBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const Heading = styled.h1`
  font-family: "Roboto";
  font-size: 28px;
  color: #334155;

  @media screen and (min-width: 768px) {
    font-size: 38px;
  }
`;

export const Desc = styled.p`
  font-family: "Roboto";
  font-size: 14px;
  color: #475569;
  margin-top: 0px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background-color: #3b82f6;
  width: 85px;
  height: 28px;
  border-radius: 8px;
  font-family: "Roboto";
  font-size: 12px;
  color: #ffffff;
  margin-top: 20px;

  :hover {
    background-color: #2563eb;
  }

  @media screen and (min-width: 768px) {
    width: 90px;
    height: 32px;
  }
`;

export const DisplayImg = styled.img`
  width: 100%;
  max-width: 650px;
  margin-top: 60px;
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 85%;
  left: 70%;

  @media screen and (min-width: 768px) {
    top: 80%;
    left: 90%;
  }
`;

export const ActionTitle = styled.h1`
  font-family: "Roboto";
  font-size: 14px;
  color: #334155;
  font-weight: 600;
  margin-bottom: 0px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
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
