import React from "react";
import home from "./Home.module.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Header } from "../../components/Header/Header";


const Home = () => {
  return (
    <div className={home.Home}>
      {<Navbar />}
      <div className={home.homeWrapper}>
        <Header />
      </div>
    </div>
  );
};

export default Home;
