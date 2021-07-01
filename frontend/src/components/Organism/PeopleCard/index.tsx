import { Card as CardMUI, CardContent } from "@material-ui/core";
import styled from "styled-components";
import { CardContent as Content } from "../../index";

interface IPeopleCard {
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

const Card = styled(CardMUI)`
  background: #aae4ff;
  padding: 16px;
  border: 1px solid black;
`;

const PeopleCard = ({ cardTitle, cardContent }: IPeopleCard) => {
  return (
    <Card>
      <CardContent>
        <Content cardTitle={cardTitle} cardContent={cardContent}></Content>
      </CardContent>
    </Card>
  );
};

export default PeopleCard;
