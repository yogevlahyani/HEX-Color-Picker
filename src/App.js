import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {makeStyles} from "@material-ui/core";
import PageComponent from "./components/PageComponent";

const useStyles = makeStyles({
  app: {
    flexGrow: 1,
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Header />
      <PageComponent />
      <Footer />
    </div>
  );
};

export default App;
