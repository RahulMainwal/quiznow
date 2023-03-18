import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Quiz from './pages/Quiz';
import Quizzes from './pages/Quizzes';
// import SavedQuizzes from './pages/SavedQuizzes';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' exact element={<HomePage />} />
      <Route path='/quizzes' exact element={<Quizzes />} />
      {/* <Route path='/saved-quizzes' exact element={<SavedQuizzes />} /> */}
      <Route path='/quizzes/:id' exact element={<Quiz />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
