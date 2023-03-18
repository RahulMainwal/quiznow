import { Button, Card } from 'antd';
import React, { useEffect, useState } from 'react';

export default function Permission(){

const [show, setShow] = useState(false);

    const denied = () => {
        setShow(false)
    }

    const allowed = () => {
        setShow(false)
        window.localStorage.setItem("permission", JSON.stringify(true))
    }

    useEffect(() => {
        if(JSON.parse(window.localStorage.getItem("permission")) === null || JSON.parse(window.localStorage.getItem("permission")) === false){
            setTimeout(() => {
                setShow(true)
            }, 1000)
        }
    
    }, [])

 return (
    <div style={{ width: "100%", zIndex: "1", position: "fixed",backdropFilter: "blur(3px)", height: "100vh", display: show === false?"none": "block"}}>
      <Card bordered={true} style={{ width: "100%", bottom: "0", top: "90vh"}}>
      <div style={{display: "flex", justifyContent: "space-around"}}>
        <div>Do you want to give permission to save your data of quizzes?</div>
        <div><Button onClick={() => {denied()}}>No</Button> &nbsp;&nbsp; <Button onClick={() => {allowed()}}>Yes</Button></div>
      </div>
    </Card>
  </div>
 )
};