import React from 'react';
import './App.css';
import FbPost from "./components/FbPost"

function App() {
  let today = new Date();
  let createdAt = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  let createdBy = "Fahad Shaikh";
  let desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";


  return (
    <div className="App">
      <FbPost createdBy={createdBy} createdAt={createdAt} desc={desc} />
    </div>
  );
}

export default App;
