import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  card: {
    background: "#aae4ff",
    padding: "16px",
    border: "1px solid black",
  },
  cardTitle: {
    color: "#000000",
    fontWeight: 300,
    marginBottom: "16px",
  },
  cardLabels: {
    color: "#000000",
    fontWeight: 600,
    marginRight: "8px",
  },
  cardContent: {
    color: "#000000",
    fontWeight: 300,
    textAlign: "center",
  },
}));
