import { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import Header from "../Header";
import ProfileCard from "../ProfileCard";
import {
  MyTeamBgContainer,
  Heading,
  MyTeamContentContainer,
  ProfilesListContainer,
  ActionContainer,
  WhatsappButton,
  LoaderContainer,
  FailureContainer,
  FailureImg,
  FailureTitle,
  FailureDesc,
  RetryButton,
  ShowDesc,
} from "./styledComponents";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "INPROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const MyTeam = () => {
  const [userList, setList] = useState([]);
  const [selectedList, setSelectedList] = useState([]);
  const [apiStatus, updateApiStatus] = useState(apiStatusConstants.initial);
  const [apiError, setError] = useState(true);
  const [page, setPage] = useState(8);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    const getdata = async () => {
      updateApiStatus(apiStatusConstants.inProgress);
      const url = "https://jsonplaceholder.typicode.com/posts";
      const options = {
        method: "GET",
      };

      const response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        setList(data);
        setSelectedList(data.slice(0, page));
        console.log("api call time");
        updateApiStatus(apiStatusConstants.success);
      } else {
        updateApiStatus(apiStatusConstants.failure);
      }
    };
    getdata();
  }, [apiError, page]);
  console.log(selectedList);
  console.log(loadMore);

  useEffect(() => {
    if (loadMore) {
      setTimeout(() => {
        setSelectedList(userList.slice(0, page));
        setLoadMore(false);
      }, 1000);
    }
  }, [page, loadMore, userList]);

  const handleScroll = () => {
    if (
      document.documentElement.scrollTop + window.innerHeight + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoadMore(true);
      setPage((prev) => prev + 8);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderSuccessView = () => (
    <>
      <ProfilesListContainer>
        {selectedList.map((eachItem) => (
          <ProfileCard details={eachItem} key={eachItem.id} />
        ))}
      </ProfilesListContainer>
      {loadMore && (
        <Loader type="TailSpin" color="#3b82f6" height="60" width="60" />
      )}
    </>
  );

  const renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <div className="loader-container">
        <Loader type="ThreeDots" color="#3b82f6" height="60" width="60" />
      </div>
    </LoaderContainer>
  );

  const onRetry = () => {
    setError((prevState) => !prevState);
  };

  const renderFailureView = () => (
    <FailureContainer>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureTitle>Oops! Something Went Wrong</FailureTitle>
      <FailureDesc>
        We are having some trouble to complete your request. Please try again.
      </FailureDesc>
      <RetryButton type="button" onClick={onRetry}>
        Retry
      </RetryButton>
    </FailureContainer>
  );

  const renderViews = () => {
    switch (apiStatus) {
      case apiStatusConstants.success:
        return renderSuccessView();
      case apiStatusConstants.inProgress:
        return renderLoader();
      case apiStatusConstants.failure:
        return renderFailureView();
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <MyTeamBgContainer>
        <MyTeamContentContainer>
          <Heading>Meet your Team!</Heading>
          <ShowDesc>{`Showing ${page} results`}</ShowDesc>
          {renderViews()}
        </MyTeamContentContainer>
        <ActionContainer>
          <WhatsappButton
            href="https://wa.me/919059709745?text=Hello"
            target="_blank"
          />
        </ActionContainer>
      </MyTeamBgContainer>
    </>
  );
};

export default MyTeam;
