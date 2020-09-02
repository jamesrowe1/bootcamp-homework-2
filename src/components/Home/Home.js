import React from "react";
import "./Home.css";
import jsSymbol from "../../assets/js-symbol.png"
import jQuerySymbol from "../../assets/jquery-symbol.jpg"
import reactSymbol from "../../assets/react-symbol.png"
import cssSymbol from "../../assets/css-symbol.png"
import htmlSymbol from "../../assets/html-symbol.png"
import mongoDBSymbol from "../../assets/mongodb-symbol.png"
const Home = () => {
    return (
    <div>
        <div className="row">
            <div className="col-md-2">
                <img src={jsSymbol} alt="JS symbol" className="languageLogo img-fluid" />
            </div>
            <div className="col-md-2">
                <img src={jQuerySymbol} alt="JS symbol" className="languageLogo img-fluid" />
            </div>
            <div className="col-md-2">
                <img src={reactSymbol} alt="JS symbol" className="languageLogo img-fluid" />
            </div>
            <div className="col-md-2">
                <img src={cssSymbol} alt="JS symbol" className="languageLogo img-fluid" />
            </div>
            <div className="col-md-2">
                <img src={htmlSymbol} alt="JS symbol" className="languageLogo img-fluid" />
            </div>
            <div className="col-md-2">
                <img src={mongoDBSymbol} alt="JS symbol" className="languageLogo img-fluid" />
            </div>
        </div>
    </div>
    )
}

export default Home