import { Card, Row, Space, Button, Result } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import dummyArr from "../api";

export default function Quiz() {

const [count, setCount] = useState(null);
const [result, setResult] = useState(false);
const [userResponse, setUserResponse] = useState([]);
const [resultResponse, setResultResponse] = useState([]);

const urlLocation = useLocation().pathname.slice("9");

const quizData = dummyArr.find((elem) => {
    return elem.id === urlLocation;
})

const [countDown, setCountDown] = useState(quizData.minutes*60);
const timerId = useRef();

const startHandler = () => {
        setCount(0)
}

const nextHandler = () => {
    if(count < quizData.quiz.length-1){
    setCount(count+1)
    }else{
     setCount(null)   
    }

}

const previousHandler = () => {
    if(count !== 0){
   setCount(count-1)
    }

}

const resultHandler = () => {
    setCount(null)
    setResult(true)
}

const startAgainHandler = () => {
  setResult(false)
  setCount(0)
  setCountDown(quizData.minutes*60)
  setUserResponse([])
}

const formateTime = (time) => {
  let minutes = Math.floor(time/60);
  let seconds = Math.floor(time - minutes * 60);

  if(minutes < 10) minutes = "0"+minutes;
  if(seconds < 10) seconds = "0"+seconds;

  return minutes + " : " + seconds;
}


const changeHandler = (item) => {
  if(userResponse.length === 0){
    setUserResponse([...userResponse, {questionId: quizData.quiz[count].id, respond: item}])
  }else{
    const checkedId = userResponse.find((elem) => {
      return elem.questionId === quizData.quiz[count].id
    })
    if(checkedId){
      const updatedData = userResponse.map((elem) => {
        return elem.questionId === quizData.quiz[count].id? {questionId: quizData.quiz[count].id, respond: item} : elem
      })
      setUserResponse(updatedData)
    }else{
      setUserResponse([...userResponse, {questionId: quizData.quiz[count].id, respond: item}])
    }
  }
}

useEffect(() => {
  if(count !== null && countDown > 0){
  timerId.current = setInterval(() => {
    setCountDown(prev => prev - 1);
  }, 1000)
  return () => clearInterval(timerId.current)
}
})

useEffect(() => {
  if(countDown === 0){
    clearInterval(timerId.current)
    setResult(true)
  }
}, [countDown])

useEffect(() => {
  const arr = []
  userResponse.forEach(element => {
    quizData.quiz.filter((x) => {
      if(x.answer === element.respond){
    arr.push(x)
      }
    return x
    })
  });
  setResultResponse(arr)
}, [userResponse, quizData.quiz])

    return (
     <div style={{margin: "20px"}}>
        <h2>{quizData.title}</h2>
        <br/>
        {
            result
            ?
            <Result
            status="success"
            title="Successfully Completed Quiz!"
            subTitle={<div><p>Your Score: {resultResponse.length+"/"+quizData.quiz.length}</p><p>Correct: {resultResponse.length}</p><p>Incorrect: {userResponse.length-resultResponse.length}</p><p>Total Attempt: {userResponse.length}</p></div>}
            extra={[
              <NavLink to="/quizzes">
                <Button type="primary" key="console">
                Go Back
              </Button>
              </NavLink>,
              <Button key="buy" onClick={() => {startAgainHandler(); }}>Start Again</Button>,
            ]}
          />
            :
            count!==null
            ?
            <Card type="inner" title={formateTime(countDown) } extra={<b>{count+1}/{quizData.quiz.length}</b>}>
            <Card>
           <h1>Q.{count+1}. {quizData.quiz[count].question}</h1>
         </Card>
         <br/><br/>
         <Row gutter={16}>
          <br/>
         {
             quizData.quiz[count].otpion.map((item, i) => (
                //  <Col key={item} style={{margin: "30px"}}>
          //  <Button type={userResponse.find((x, ind) =>  x.respond === item )&& "primary"} key={item} onClick={() => {changeHandler(item)}} style={{width: "43%", margin: "5px 30px", cursor: "pointer", fontSize: "20px", padding: "20px"}}>
          //    {item}
          //  </Button>
            <Space direction="vertical"  key={item} onClick={() => {changeHandler(item)}} style={{width: "50%", cursor: "pointer", padding: "10px 30px"}}>
            <Button type={userResponse.find((x, ind) =>  x.respond === item )&& "primary"} block>
              {item}
            </Button>
          </Space>
        //  </Col>
             ))
         }
         </Row>
         <br/><br/>
         <Card style={{textAlign: "end"}}>
             <Button danger type="primary">Clear Option</Button>
             &nbsp;&nbsp;&nbsp;
             {
                count !== 0
                ?
                <Button onClick={() => {previousHandler()}}>Previous</Button>
                :
                <Button>No Previous</Button>
             }
             &nbsp;&nbsp;&nbsp;
             {
                count < quizData.quiz.length-1
                ?
                <Button onClick={() => {nextHandler()}} type="primary" >Next</Button>
                :
                <Button onClick={() => {resultHandler()}} type={"primary"}>Submit</Button>
             }
         </Card>
         </Card>
         :
         <Card style={{textAlign: "center"}}>
            <h1>Do you want to start Quiz?</h1>
            <br/>
            <div> <NavLink to="/quizzes"><Button>Exit</Button></NavLink>
             &nbsp;&nbsp;&nbsp;
             <Button onClick={() => {startHandler()}}>Yes</Button></div>
         </Card>
        }
       
     </div>
    )
}