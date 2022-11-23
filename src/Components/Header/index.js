import { Link } from "react-router-dom";
import Popup from "reactjs-popup";

import {
  ActionLinkContainer,
  Actiontitle,
  BsLinkedinEl,
  GrDocumentDownloadEl,
  GrDocumentEl,
  HeaderContainer,
  Logo,
  MyAvatar,
  MyDetailsContainer,
  PopupActionContainer,
  PopupAvatar,
  PopupCloseButton,
  PopupMainContainer,
  PopupNameTitle,
  SubHeading,
} from "./styledComponents";

const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <Logo
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
      />
    </Link>

    <div className="popup-container">
      <Popup
        modal
        trigger={
          <MyDetailsContainer>
            <SubHeading>Creator Details</SubHeading>
            <MyAvatar
              src="https://avatars.dicebear.com/api/micah/john.svg"
              alt="my avatar"
            />
          </MyDetailsContainer>
        }
      >
        {(close) => (
          <PopupMainContainer>
            <PopupAvatar
              src="https://avatars.dicebear.com/api/avataaars/reddy.svg"
              alt="my avatar"
            />
            <PopupNameTitle>Sai Uttej.G</PopupNameTitle>

            <PopupActionContainer>
              <ActionLinkContainer
                href="https://drive.google.com/file/d/1mkKtB1cJk4ws-KTiFTHh8YFqS-GCQte3/view?usp=sharing"
                target="_blank"
              >
                <GrDocumentEl color="#00306e" />
                <Actiontitle>View Resume Online</Actiontitle>
              </ActionLinkContainer>
              <ActionLinkContainer
                href="https://www.linkedin.com/in/saiuttejg/"
                target="_blank"
              >
                <BsLinkedinEl color="#00306e" />
                <Actiontitle>LinkedIn Profile</Actiontitle>
              </ActionLinkContainer>
              <ActionLinkContainer
                href="https://drive.google.com/uc?export=download&id=1mkKtB1cJk4ws-KTiFTHh8YFqS-GCQte3"
                target="_blank"
                download
              >
                <GrDocumentDownloadEl color="#00306e" />
                <Actiontitle>Download Resume</Actiontitle>
              </ActionLinkContainer>
            </PopupActionContainer>

            <PopupCloseButton
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              Close
            </PopupCloseButton>
          </PopupMainContainer>
        )}
      </Popup>
    </div>
  </HeaderContainer>
);

export default Header;
