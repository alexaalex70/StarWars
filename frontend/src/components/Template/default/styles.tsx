import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  defaultPageContainer: {
    padding: "24px",
  },
  defaultGridView: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(280px, 1fr))",
    gridGap: "20px",
    alignItems: "stretch",
  },
}));
