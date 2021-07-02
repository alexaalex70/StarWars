import { Fragment } from "react";
import styled from "styled-components";
import { CardInformation } from "../../";

interface ICardContent {
  cardTitle: string;
  cardContent: IContent;
}

interface IContent {
  birth_year: string;
  height: string;
  mass: string;
  created: string;
  edited: string;
}

const Title = styled.h2`
  color: #000000;
  font-weight: 300;
  margin-bottom: 16px;
`;

const CardContent = ({ cardTitle, cardContent }: ICardContent) => {
  const generateContent = Object.entries(cardContent).map(
    ([key, value]: any, index) => {
      return <CardInformation key={index} label={key} content={value} />;
    }
  );
  return (
    <Fragment>
      <Title>{cardTitle}</Title>
      {generateContent}
    </Fragment>
  );
};

export default CardContent;
