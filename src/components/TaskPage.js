import React, { useState } from 'react';
import Editor from './Editor';
import './TaskPage.css'

import { Button } from './Button';

export default function TaskPage(props) {
    const {
        taskTitle,
        tastText,
        taskHintText,
        tastEditorTitle
    } = props;

  const [python, setPython] = useState("")

  function unhide() {
    var x = document.getElementById("hint-text");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } 

  return (
    <>
        <div className="left-side">
            <div className="pane">
                <div className="main-text-block">
                    <h1 className="task-title">
                        {taskTitle}
                    </h1>
                    <p className="tast-text">
                        {tastText}                     
                    </p>
                    <p id="hint-text" className="hint-text">
                        {taskHintText}
                    </p>
                    <Button buttonStyle='btn--hint' onClick={unhide}>HINT</Button>
                    <Button buttonStyle='btn--solution' onClick={unhide}>SOLUTION</Button>

                </div>
            </div>
        </div>
        <div className="right-side">
            <div className="pane">
                <Editor 
                language="python" 
                displayName={tastEditorTitle} 
                textvalue={""}
                resultvalue={""}
                value={python} 
                onChange={setPython} 
                />
            </div>
        </div>
    </>
        );
}


