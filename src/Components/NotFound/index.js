import Header from "../Header";
import {
  NotFoundContainer,
  ResponsiveContainer,
  BottomContainer,
  NotFoundImg,
  NotfoundTitle,
  NotFoundDesc,
} from "./styledComponents";

const NotFound = () => (
  <NotFoundContainer>
    <ResponsiveContainer>
      <Header />
      <BottomContainer>
        <NotFoundImg
          src={
            "https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
          }
          alt="not found"
        />
        <NotfoundTitle>Page Not Found</NotfoundTitle>
        <NotFoundDesc>
          we are sorry, the page you requested could not be found.
        </NotFoundDesc>
      </BottomContainer>
    </ResponsiveContainer>
  </NotFoundContainer>
);
export default NotFound;
