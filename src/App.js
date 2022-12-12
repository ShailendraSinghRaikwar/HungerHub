import React from "react";
import  ReactDOM  from "react-dom/client";

import ReactLogo from "./assets/ReactLogo.png";
import user_icon from "./assets/user_icon.png";



// Header element using React.createElement
const heading = React.createElement("div", {id:"title"}, [
React.createElement("h1", {id:"title"}, "Namaste React Bootcamp"),
React.createElement("h2", {}, "Zero to Hero"),
React.createElement("h3",{},"In 3 Months")
]);

// Creating the React element using JSX
const noOfMonths = 3; 
const headingJSX = (
  <div id="title">
    <h1>Namaste React Bootcamp</h1>
    <h2>Zero to Hero</h2>
    <h3>in {noOfMonths} Months</h3>
  </div>
)

// Heading using functional component
const TitleComponent = () => <h1>Namaste React Bootcamp </h1> 
const HeadingComponent = () => {
  return(
    <div id="title" className="title-class" tabIndex="1">
      <TitleComponent/>
      <h2>Zero to Hero</h2>
      <h3>In {noOfMonths} Months</h3>
    </div>
  )
};

const Navbar = () => {
  return(
    <div className="navbar">
      <div className="logo">
        <img src={ReactLogo} alt="Logo"/>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search Here" className="search-bar" autoFocus />
      </div>
      <img src={user_icon} alt="User" id="user"/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<div>
  <Navbar/>
  <HeadingComponent/>
</div>);
