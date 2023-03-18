import React from "react";
import homeImg from "../images/home.png";
// import backImg from "../images/hh.png";
import { Button } from 'antd';
import "../App.css";
import { NavLink } from "react-router-dom";

export default function MiddleHome() {
    return (
        <>
            {/* <div className="space-align-container" style={{ textAlign: "center" }}>
                <div className="space-align-block">
                    <Space align="center">
                        <div>
                            <h1>Live Quiz here</h1>
                            <Button type="primary" block>
                                Primary
                            </Button>
                        </div>
                        <div>
                            <img src={homeImg} alt="img" width="600px" />
                        </div>
                    </Space>
                </div>
            </div> */}



            <div className="container" id="homeContainer" >
                <div className="item">
                    <div id="frontText">
                        <h1>Live Quizzes Here!</h1>
                        <br/>
                        <h3>Enjoy it according to your fun!</h3>
                        <br/>
                        <p>This website is for testing purpose, don't take it serious!</p>
                        <br/>
                    
                        <NavLink to="/quizzes">
                            <Button type="primary" block>Get Started</Button>
                            </NavLink>
                    </div>
                </div>
                <div className="item">
                    <img id="homeBackImg" src={homeImg} alt="img"  />
                </div>
            </div>


        </>
    )
}