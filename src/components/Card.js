import React from 'react';
import "./Card.css"


export default function Card (props) {
  
  const {
    title,
    text,
    link,
    completed
  } = props;

  if (completed==="false") {
    var color = "white"
  } else { var color = "green"}

  return (
      <div className="card-container" style={{backgroundColor: color}}>
        <h1 className="card-title">{title}</h1>
        <div className="card-text">
          <p>{text}</p>
        </div>
      </div>
        
  );
};

