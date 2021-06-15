import React from "react";
import DenseAppBar from "../../components/structure/appbar/AppBar";
import Profiles from "../../components/structure/profiles";
import { Footer } from "../../components/structure/footer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f3f4f5",
    marginTop: "55px",
    overflowX: "hidden",
    overflowY: "hidden",
    minHeight: "93vh",
  },

}));

// const redirectToBigCard = (ref) => {
//   if (ref.current === null) {
//     // treatment solution
//     window.scrollTo(0, 0);
//   } else {
//     window.scrollTo(0, ref.current.offsetTop);
//   }
// };

export function AboutUsPage(props) {
  window.scrollTo(0, 0);
  const classes = useStyles();

  // //references
  // const start = useRef(null);

  // const quemsomos = useRef(null);

  // // receive value of link of state
  // var { foo } = props.location.state || "start";

  // // treatment solution
  // if (foo === "start" || foo === undefined || foo === null) {
  //   redirectToBigCard(start);
  // }

  // useEffect(() => {
  //   if (foo === "1") {
  //     redirectToBigCard(quemsomos);
  //   }
  // }, []);

  return (
    <div className={classes.root}>
      <DenseAppBar />
      <Profiles />
      <Footer />
    </div>
  );
}
