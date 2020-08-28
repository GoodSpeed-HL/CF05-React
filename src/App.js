import React from 'react';
import Counter from "./components/Counter";
import Counter1 from "./components/CounterWithProps";
import Score from "./components/Score";
import './App.css';
import Table from "./components/List";


function App() {
  return (
    <div className="jumbotron d-flex align-items-center min-vh-100">
      <Table/>

    </div>
  );
}

export default App;