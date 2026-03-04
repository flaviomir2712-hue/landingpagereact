import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx"
import Footer from "./Footer.jsx"

//create your first component
const Home = () => {

//codigo javascript

	return (
       <>
        
        <Navbar/>
        <div className="container p-2">
            <Jumbotron/>
        <div className="d-flex gap-3">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
        <Footer/>
        </div>
        
       </>
	);
};

export default Home;