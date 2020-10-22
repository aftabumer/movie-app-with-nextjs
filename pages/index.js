import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import Crousel from "../components/carousel";
import MovieList from "../components/movieList";
import Footer from "../components/footer";
// import "../styles/homePage.css";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
        crossorigin="anonymous"
      />
      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossorigin="anonymous"
      ></script>
    </Head>

    <Navbar />
    <div className="home-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <SideMenu />
          </div>

          <div className="col-lg-9">
            <Crousel />
            <div className="row">
              <MovieList />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
