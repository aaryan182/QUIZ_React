import React from 'react';
import Quiz from './components/Quiz';
import './App.css'

const App = () => {

  const quizQuestions = [
    {
      question: "What does the acronym 'DBMS' stand for?",
      options: ["Database Management System", "Data Business Management System", "Digital Backend Management System", "Dynamic Binary Management System"],
      answer: "Database Management System",
    },
    {
      question: "Which type of key uniquely identifies each row in a database table?",
      options: ["Primary Key", "Foreign Key", "Composite Key", "Super Key"],
      answer: "Primary Key",
    },
    {
      question: "What is the process of combining tables to eliminate redundant data and ensure data integrity called?",
      options: ["Normalization", "Indexing", "Joining", "Aggregation"],
      answer: "Normalization",
    }, 
    {
      question: "Which language is used to manipulate and query relational databases?",
      options: ["Java", "C++", "SQL", "Python"],
      answer: "SQL",
    },
    {
      question: "Which type of join returns only the common records between two tables?",
      options: ["Inner Join", "Left Join", "Right Join", "Full Outer Join"],
      answer: "Inner Join",
    },
    {
      question: "What is the purpose of an 'index' in a database?",
      options: ["To store large binary data", "To define table relationships", "To speed up data retrieval", "To define data types"],
      answer: "To speed up data retrieval",
    },
    {
      question: "Which normal form ensures that there are no partial dependencies of non-key attributes on the primary key?",
      options: ["First Normal Form (1NF)", "Second Normal Form (2NF)", "Third Normal Form (3NF)", "Fourth Normal Form (4NF)"],
      answer: "Second Normal Form (2NF)",
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
