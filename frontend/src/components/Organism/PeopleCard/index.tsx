import { Card, CardContent } from "@material-ui/core";
import { useStyles } from "../../../assets/mui-styles/card-styles";
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

const PeopleCard = ({ cardTitle, cardContent }: IPeopleCard) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Content cardTitle={cardTitle} cardContent={cardContent}></Content>
      </CardContent>
    </Card>
  );
};

export default PeopleCard;
