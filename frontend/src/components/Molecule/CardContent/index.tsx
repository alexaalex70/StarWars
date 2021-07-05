import { Fragment } from "react";
import { useStyles } from "../../../assets/mui-styles/card-styles";
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

const CardContent = ({ cardTitle, cardContent }: ICardContent) => {
  const classes = useStyles();
  const generateContent = Object.entries(cardContent).map(
    ([key, value]: any, index) => {
      return <CardInformation key={index} label={key} content={value} />;
    }
  );
  return (
    <Fragment>
      <h2 className={classes.cardTitle}>{cardTitle}</h2>
      {generateContent}
    </Fragment>
  );
};

export default CardContent;
