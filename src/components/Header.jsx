import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {

const urlLocation = useLocation();

    return (
        <div style={{position: "sticky", width: "100%", margin: "0", padding: "10px 0",backdropFilter: "blur(50px)", height: "auto", boxSizing: "border-box", boxShadow: "2px 2px 2px 2px #d2d2d2", zIndex: "1"}}>
                 <div style={{ display: "flex", justifyContent: "space-around"  }}>
                    <div style={{ marginTop: "0" }}><h2><NavLink to="/" style={urlLocation.pathname === "/" ? {color: "#4682B4", textDecoration: "none", paddingBottom: "2px"} : {color: "#4682B4", textDecoration: "none"}}><img style={{width: "30px", marginBottom: "-5px"}} src="https://quiznow.vercel.app/logo.png" alt="logo" />Quiznow</NavLink></h2></div>
                    <div style={{ marginTop: "6px" }}>
                        <ul style={{ listStyle: "none", display: "flex" }}>
                            <li style={{ marginLeft: "20px" }}><NavLink to="/quizzes" style={urlLocation.pathname === "/quizzes" ? {color: "#4682B4", textDecoration: "none", borderBottom: "1px solid #4682B4", paddingBottom: "5px"} : {color: "black", textDecoration: "none"}}>Quizzes</NavLink></li>
                            {/* <li style={{ marginLeft: "20px" }}><NavLink to="/saved-quizzes" style={urlLocation.pathname === "/saved-quizzes" ? {color: "#4682B4", textDecoration: "none", borderBottom: "1px solid #4682B4", paddingBottom: "5px"} : {color: "black", textDecoration: "none"}}>Saved Quizzes</NavLink></li> */}
                        </ul>
                    </div>
                </div>
            </div>
    )
}