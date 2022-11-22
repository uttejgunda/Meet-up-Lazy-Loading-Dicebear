import { Link } from "react-router-dom";
import Header from "../Header";
import {
  ActionContainer,
  ActionTitle,
  BgContainer,
  Button,
  ContentContainer,
  Desc,
  DisplayImg,
  Heading,
  PageBody,
  WhatsappButton,
} from "./styledComponents";

const Home = () => (
  <>
    <Header />
    <BgContainer>
      <ContentContainer>
        <PageBody>
          <Heading>Welcome to Meetup</Heading>
          <Desc>Click below to meet your Team!</Desc>
          <Link to="/my-team">
            <Button type="button">Let's meet</Button>
          </Link>

          <DisplayImg
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </PageBody>
      </ContentContainer>
      <ActionContainer>
        <ActionTitle>Contact Creator</ActionTitle>
        <WhatsappButton
          href="https://wa.me/919059709745?text=Hello"
          target="_blank"
        />
      </ActionContainer>
    </BgContainer>
  </>
);

export default Home;
