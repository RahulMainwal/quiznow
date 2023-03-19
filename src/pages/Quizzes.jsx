import React from "react";
import { Col, Row } from 'antd';
import { NavLink } from "react-router-dom";
import dummyArr from "../api";

export default function Quizzes() {

    return (
        <div style={{ marginTop: "20px", margin: "20px", width: "auto" }}>
            <h2 style={{textAlign: "center"}}>Quizzes</h2>
            <Row style={{justifyContent: "center"}}   gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {
                    dummyArr.map((elem, index) => (
                        <NavLink key={elem.id} to={`/quizzes/${elem.id}`} id="all-quizes-card">
                            
                        <Col style={{
                            border: "1px solid #d2d2d2",
                            padding: "10px 0",
                            margin: "10px",
                            borderRadius: "10px 5px",
                            boxSizing: "border-box",
                            boxShadow: "3px 6px 10px 2px #d2d2d2"
                        }}>
                            <div style={{ width: "auto !important",
                            height: "200px",
                            margin: "auto",
                            display: "block",
                            padding: "15px 0",
                            overflow: "none"}}>
                            <img src={elem.imgBanner} alt="banner" width="auto" style={{
                                width: "auto !important",
                                display: "block",
                                borderRadius: "10px",
                                height: "100%",
                                textAlign: "center",
                                margin: "auto",
                                objectFit: "contain",
                                padding: "0 20px"
                            }} />
                            </div>
                            <h1 style={{textAlign: "center"}}>{elem.title}</h1>
                        </Col>
                        </NavLink>
                    ))
                }
            </Row>
        </div>
    )
}