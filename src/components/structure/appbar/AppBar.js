import React, { useLayoutEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

//mobile
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";

const nameButtons = [
  "Home",
  "Painel PB",
  "Reabertura",
  "Sobre",
  "Clipping",
  "Quem somos",
  "Contato",
];

function detectMobile() {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return "mobile";
  } else if (navigator.userAgent.match(/iPhone/i)) {
    return "iphone";
  } else {
    return "web";
  }
}

export function useWindowSize() {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      var widthScreen = window.innerWidth / 18;
      var heightScreen = window.innerHeight / 18;

      if (detectMobile() === "mobile") {
        if (window.innerWidth < 343) {
          setSize([0, 0]);
        } else {
          setSize([150, 20]);
        }
      } else if (detectMobile() === "iphone") {
        setSize([100, 10]);
      } else {
        if (window.innerWidth < 343) {
          setSize([0, 0]);
        } else if (window.innerWidth < 480) {
          setSize([widthScreen, heightScreen * 0.35]);
        } else if (window.innerWidth < 720) {
          setSize([widthScreen, heightScreen * 0.5]);
        } else if (window.innerWidth < 768) {
          setSize([widthScreen, heightScreen * 0.55]);
        } else if (window.innerWidth < 900) {
          setSize([widthScreen, heightScreen * 0.6]);
        } else if (window.innerWidth < 1024) {
          setSize([widthScreen, heightScreen * 0.7]);
        } else {
          setSize([widthScreen, heightScreen * 0.91]);
        }
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

function Flag(props) {
  var mobile = detectMobile();

  if (mobile === "mobile" || mobile === "iphone") {
    return <MenuMobile clickPB={props.clickPBR} />;
  } else {
    return <ButtonsAppbar clickPB={props.clickPBR} />;
  }
}

const ITEM_HEIGHT = 48;

function MenuMobile(props) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  /* const goTo = (option) => {
    console.log(option);
    if (option === "Painel PB") {
      return props.clickPB;
    }
  }; */

  return (
    <div className={classes.buttons}>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon style={{ color: "white" }} />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          <Link className={classes.links} to="/">
            <Button>{nameButtons[0]}</Button>
          </Link>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          <Link className={classes.links} to="/painelpb">
            <Button>{nameButtons[1]}</Button>
          </Link>
        </MenuItem>

        <MenuItem
          s
          onClick={() => {
            handleClose();
          }}
        >
          <Link className={classes.links} to={"/reabertura"}>
            <Button>{nameButtons[2]}</Button>
          </Link>
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          <Link className={classes.links} to={"/sobre"}>
            <Button>{nameButtons[3]}</Button>
          </Link>
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          <Link className={classes.links} to={"/clipping"}>
            <Button>{nameButtons[4]}</Button>
          </Link>
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          <Link className={classes.links} to={"/quemsomos"}>
            <Button>{nameButtons[5]}</Button>
          </Link>
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          <Link className={classes.links} to={"/contato"}>
            <Button>{nameButtons[6]}</Button>
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

function ButtonsAppbar(props) {
  const classes = useStyles();

  // onClick={props.clickPB}
  return (
    <div className={classes.buttons}>
      <Link className={classes.links} to="/">
        <Button className={classes.button}>{nameButtons[0]}</Button>
      </Link>
      <Link className={classes.links} to="/painelpb">
        <Button className={classes.button}>{nameButtons[1]}</Button>
      </Link>
      <Link className={classes.links} to={"/reabertura"}>
        <Button className={classes.button}>{nameButtons[2]}</Button>
      </Link>
      <Link className={classes.links} to={"/sobre"}>
        <Button className={classes.button}>{nameButtons[3]}</Button>
      </Link>
      <Link className={classes.links} to={"/clipping"}>
        <Button className={classes.button}>{nameButtons[4]}</Button>
      </Link>
      <Link className={classes.links} to={"/quemsomos"}>
        <Button className={classes.button}>{nameButtons[5]}</Button>
      </Link>
      <Link className={classes.links} to={"/contato"}>
        <Button className={classes.button}>{nameButtons[6]}</Button>
      </Link>
    </div>
  );
}

export default function DenseAppBar(props) {
  const classes = useStyles();
  const [width, height] = useWindowSize();
  return (
    <React.Fragment className={classes.wrapper}>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar variant="dense">
          <Typography variant="h6">
            <Link to="/">
              <img
                alt="logo"
                widht={width}
                height={height}
                src="https://i.imgur.com/CyDUBPS.png"
                style={{ marginTop: 5 }}
              ></img>
            </Link>
          </Typography>
          <Flag clickPBR={props.clickParaiba} />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "100%",
  },
  appbar: {
    backgroundColor: "#343894",
    borderBottom: "2px solid black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  buttons: {
    marginLeft: "auto",
  },
  button: {
    fontSize: 13,
    color: "white",
    border: "none",
    "&:hover": {
      border: "1px solid white",
      backgroundColor: "white",
      color: "black",
    },
    borderRadius: 8,
    marginLeft: 6,
  },
  links: {
    textDecoration: "none",
  },
}));
