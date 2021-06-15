import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Button,
  TextField,
  Typography,
  CircularProgress,
  Link,
} from "@material-ui/core";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";

import Firebase from "../db/firebase";

const useStyles = makeStyles((theme) => ({
  start: {
    marginLeft: theme.spacing(1),
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    marginTop: 5,
  },
  inputDate: {
    marginRight: 5,
    width: 155,
    height: 30,
    border: "1px solid #5e6bf7",
  },
  textNews: {
    marginBottom: 5,
    marginRight: theme.spacing(2.5),
    color: "black",
    "&:hover": {
      color: "#5e6bf7",
    },
  },
  ul: {
    padding: 0,
    listStyle: "none",
  },
  textSearch: {
    marginLeft: 9,
    marginBottom: 9,
    fontSize: 14,
  },

  link: {
    textDecoration: "none",
    color: "blue",
    "&:hover": {
      color: "#5e6bf7",
    },
  },
  type: {
    color: "#0C36E8",
    "&:hover": {
      color: "#5e6bf7",
    },
  },
}));

// function Space(props) {
//   const style = makeStyles((theme) => ({
//     space: {
//       marginLeft: props.left,
//       marginRight: props.right,
//       marginTop: props.top,
//       marginBottom: props.bottom,
//     },
//   }));
//   const classe = style();

//   return <div className={classe.space}></div>;
// }

function getFirebase(collection, document, setState, setFlag) {
  var docDB = db.collection(collection).doc(document);
  docDB
    .get()
    .then(function (doc) {
      if (doc.exists) {
        setFlag(true);
        setState(doc.data());
      } else {
        setState(["11/11/11  Ocorreu um erro, atualize a página, por favor."]);
      }
    })
    .catch(function (error) {
      setState(["11/11/11  Ocorreu um erro, atualize a página, por favor."]);
    });
}

var db = Firebase.firestore();

export default function Search(props) {
  const classes = useStyles();

  var [state, setState] = useState("");
  var [flagData, setFlagData] = useState(true);
  var [date1, setDate1] = useState(new Date());
  var [date2, setDate2] = useState(new Date());
  var [filterData1, setFilterData1] = useState(false);
  var [filterData2, setFilterData2] = useState(false);

  const [data, setData] = useState({});
  const [flagLoad, setFlagLoad] = useState(false);

  useEffect(() => {
    getFirebase(props.collection, props.document, setData, setFlagLoad);
  }, []);

  const stringTreatment = (object) => {
    var listTexts = Object.values(object);
    var dates = [];
    var ty = [];
    var contents = [];
    // console.log(listTexts);
    listTexts.map((item) => {
      dates.push(item.slice(0, 10).trim());

      var listAux = item.split(" ", 2);
      var count = 0;

      ty.push(listAux[1]);
      listAux.map((item) => {
        count += item.length;
      });
      //two spaces
      count += 2;
      contents.push(item.slice(count));
    });

    var objectAux = [];
    var listLinks = Object.keys(object);
    listLinks.map((item, index) => {
      objectAux.push({
        type: ty[index],
        content: contents[index],
        url: item,
        date: dates[index],
      });
    });
    return objectAux;
  };

  var object = stringTreatment(data);
  console.log(object);

  object.sort(function (a, b) {
    var dateA = new Date(a.date),
      dateB = new Date(b.date);
    return dateA - dateB;
  });

  var libraries = object,
    searchString = state.trim().toLowerCase();
  var flagFilter1 = filterData1;
  var flagFilter2 = filterData2;

  if (searchString.length > 0 || (flagFilter1 && flagFilter2)) {
    libraries = libraries.filter(function (i) {
      if (
        (flagFilter1 === false && flagFilter2 === false) ||
        (flagFilter1 === true && flagFilter2 === false) ||
        (flagFilter1 === false && flagFilter2 === true)
      ) {
        return i.content.toLowerCase().match(searchString);
      } else {
        if (new Date(i.date) >= date1 && new Date(i.date) <= date2) {
          return i.content.toLowerCase().match(searchString);
        }
      }
    });
  }

  const sortDate = (e) => {
    setFlagData(!flagData);
  };

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const handleChangeDate1 = (e) => {
    setDate1(new Date(e.target.value));
  };

  const handleChangeDate2 = (e) => {
    setDate2(new Date(e.target.value));
  };

  const filter1 = () => {
    setFilterData1(true);
  };

  const filter2 = () => {
    setFilterData2(true);
  };

  //style={{ border: "1px solid red" }
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={1}
        className={classes.start}
      >
        <Grid item>
          <Typography
            className={classes.textSearch}
            variant="h4"
            color="#1a237e"
          >
            Filtre por data
          </Typography>
          <Grid container direction="row">
            <Grid item>
              <form noValidate>
                <TextField
                  id="date"
                  label="Data Inicial"
                  type="date"
                  onChange={(event) => {
                    handleChangeDate1(event);
                    filter1();
                  }}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </Grid>

            <Grid item>
              <form className={classes.container} noValidate>
                <TextField
                  id="date"
                  label="Data final"
                  type="date"
                  onChange={(event) => {
                    handleChangeDate2(event);
                    filter2();
                  }}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </Grid>

            <Grid item>
              <input
                type="text"
                value={state}
                style={{
                  width: 200,
                  height: 45,
                  border: "1px solid #5e6bf7",
                  marginTop: 5,
                }}
                onChange={handleChange}
                placeholder="Pesquise aqui"
              />
            </Grid>
            <Grid item>
              <Button onClick={sortDate}>
                <UnfoldMoreIcon style={{ width: 30, height: 40 }} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {flagLoad === false ? (
            <div>
              <CircularProgress />
            </div>
          ) : (
            <ul className={classes.ul}>
              {
                // <li>
                //   {" "}
                //   <b>
                //     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.column1}
                //     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;{props.column2}
                //     &nbsp;| &nbsp; &nbsp; &nbsp; &nbsp; {props.column3}
                //   </b>
                // </li>
                // <Space top={8} />
              }
              {flagData === false
                ? libraries.map(function (i) {
                    var listAux = i.date.split("/", 3);
                    var dayAux = listAux[1];
                    var monthAux = listAux[0];
                    var yearAux = listAux[2];
                    var dateAux = dayAux + "/" + monthAux + "/" + yearAux;

                    return (
                      <li className={classes.textNews}>
                        {dateAux}|<i className={classes.type}>{i.type}</i>|
                        <Typography variant="body2">
                          <Link
                            className={classes.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={i.url}
                          >
                            {i.content}
                          </Link>
                        </Typography>
                      </li>
                    );
                  })
                : libraries.reverse().map(function (i) {
                    var listAux = i.date.split("/", 3);
                    var dayAux = listAux[1];
                    var monthAux = listAux[0];
                    var yearAux = listAux[2];
                    var dateAux = dayAux + "/" + monthAux + "/" + yearAux;

                    return (
                      <li className={classes.textNews}>
                        {dateAux} | <i className={classes.type}>{i.type}</i> |
                        <Typography variant="body2">
                          <Link
                            className={classes.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={i.url}
                          >
                            {i.content}
                          </Link>
                        </Typography>
                      </li>
                    );
                  })}
            </ul>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
