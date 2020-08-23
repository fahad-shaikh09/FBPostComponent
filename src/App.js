import React from 'react';
import './App.css';
import FbPost from "./components/FbPost"

function App() {
  let today = new Date();
  let createdAt = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  let createdBy = "Fahad Shaikh";
  let desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";
  let feeling = "is feeling excited \u2728"

  return (
    <div className="App">
      <FbPost createdBy={createdBy} createdAt={createdAt} desc={desc} feeling={feeling} />
    </div>
  );
}

export default App;
