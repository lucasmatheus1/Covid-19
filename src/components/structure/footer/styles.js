import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
    fontSize: 13.5,
  },

  info: {
    padding: theme.spacing(2, 3),
    backgroundColor: "#1090d8",
  },

  text: {
    color: "white",
    textDecoration: "none",
  },

  title: {
    fontWeight: "bold",
    color: "yellow",
  },

  logos: {
    padding: "20px",
  },

  gridContainer: {
    display: "grid",
    alignContent: "center",
  },

  icons: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  }, 

}));
