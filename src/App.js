import React from 'react';
import Quiz from './components/Quiz';
import './App.css'

const App = () => {

  const quizQuestions = [
    {
      question: "Which Indian state is famous for its backwaters, houseboats, and Kathakali dance?",
      options: ["Kerela", "Goa", "Rajasthan", "Maharashtra"],
      answer: "Kerela",
    },
    {
      question: "What is the capital city of India?",
      options: ["Mumbai", "New Delhi", "Kolkata", "Bangalore"],
      answer: "New Delhi",
    },
    {
      question: "Which river is known as the 'Ganges' in India?",
      options: ["Yamuna", "Brahmaputra", "Godavari", "Ganga"],
      answer: "Ganga",
    },
    {
      question: "Which Indian cricketer is often referred to as the'God of Cricket'?",
      options: ["Sachin Tendulkar", "Virat Kholi", "MS Dhoni", "Rahul Dravid"],
      answer: "Sachin Tendulkar",
    },
    {
      question: "Which mountain range separates India from the rest of Asia?",
      options: ["The Himalayas", "The Andes", "The Alpes", "The Rockies"],
      answer: "The Himalayas",
    },
    {
      question: "Which Indian city is famous for its IT industry and is often referred to as the 'Silicon Valley of India'?",
      options: ["Mumbai", "Hyderabad", "Bengaluru", "Chennai"],
      answer: "Bengaluru",
    },
    {
      question: "Who led the non-violent resistance against British colonial rule in India and is often called the 'Father of the Nation'?",
      options: ["Subhash Chandra Bose", "Mahatama Gandhi", "Bhagat Singh", "Jawaharlal Nehru"],
      answer: "Mahatama Gandhi",
    },
    
  ];


  return (
    <div className='container'>
      <h1 className='title'>Quiz App</h1>
      <Quiz questions={quizQuestions} />
    </div>
  );
};

export default App;
