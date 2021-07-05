import { useStyles } from "../../../assets/mui-styles/card-styles";

interface ICardInformation {
  label: string;
  content: string;
}

const CardInformation = ({ label, content }: ICardInformation) => {
  const classes = useStyles();
  return (
    <p className={classes.cardContent}>
      <span className={classes.cardLabels}>{label}</span>
      {content}
    </p>
  );
};

export default CardInformation;
