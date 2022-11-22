import styled from "styled-components";
import { BsLinkedin } from "react-icons/bs";
import { GrDocument, GrDocumentDownload } from "react-icons/gr";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  padding-bottom: 0px;
`;

export const Logo = styled.img`
  width: 90px;

  @media screen and (min-width: 768px) {
    width: 130px;
  }
`;

export const MyDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SubHeading = styled.h1`
  font-family: "Roboto";
  font-size: 14px;
  color: #334155;
  font-weight: 500;
  margin-right: 5px;
  margin-top: 0px;
  margin-bottom: 0px;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    font-weight: normal;
    margin-right: 10px;
  }
`;

export const MyAvatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 100px;
  border: 1px solid #7b8794;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const PopupMainContainer = styled.div`
  background-color: #ffffff;
  padding: 34px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px grey;
  width: 300px;
  height: 350px;

  @media screen and (min-width: 768px) {
    width: 450px;
    height: 400px;
    padding: 42px;
  }
`;

export const PopupAvatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 100px;
  border: 1px solid #7b8794;

  @media screen and (min-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

export const PopupNameTitle = styled.h1`
  font-family: "Bree Serif";
  font-size: 24px;
  color: #181818;
  font-weight: 600;

  @media screen and (min-width: 556px) {
    font-size: 28px;
  }
`;

export const PopupActionContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ActionLinkContainer = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  outline: none;

  @media screen and (min-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const GrDocumentEl = styled(GrDocument)`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const BsLinkedinEl = styled(BsLinkedin)`
  width: 30px;
  height: 30px;

  @media screen and (min-width: 768px) {
    width: 38px;
    height: 38px;
  }
`;

export const GrDocumentDownloadEl = styled(GrDocumentDownload)`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const Actiontitle = styled.p`
  font-family: "Roboto";
  font-size: 14px;
  color: #334155;
  width: 85px;
  text-align: center;
`;

export const PopupCloseButton = styled.button`
  padding: 8px 16px;
  background-color: transparent;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 500;
  color: #7e858e;
  border: 1px solid #7e858e;
  border-radius: 3px;
  margin-top: 10px;
  outline: none;
  cursor: pointer;

  @media screen and (min-width: 556px) {
    padding: 10px 20px;
    font-size: 16px;
  }
`;
