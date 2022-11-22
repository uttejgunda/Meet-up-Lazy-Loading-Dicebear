import styled from "styled-components";

export const CardItem = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 40px;
  max-width: 200px;
  list-style-type: none;
  border-top: 5px;
  border-top-style: solid;
  border-top-color: ${(props) => `${props.borderColorIndex}`};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0px 0px 10px grey;

  @media screen and (min-width: 768px) {
    max-width: 280px;
  }
`;

export const CardImg = styled.img`
  width: 60px;
  height: 60px;
  box-shadow: 0px 0px 2px grey;
  border-radius: 100px;
`;

export const CardTitle = styled.h1`
  color: #171f46;
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const CardDesc = styled.p`
  color: #64748b;
  font-family: "Roboto";
  font-size: 14px;
  margin-top: 0px;
`;
