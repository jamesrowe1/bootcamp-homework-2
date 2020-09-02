import React from "react";
import "./Home.css";
import jsSymbol from "../../assets/js-symbol.png"
import jQuerySymbol from "../../assets/jquery-symbol.jpg"
const Home = () => {
    return (
    <div>
        <img src={jsSymbol} alt="JS symbol" class="languageLogo" />
        <img src={jQuerySymbol} alt="JS symbol" class="languageLogo" />
    </div>
    )
}

export default Home