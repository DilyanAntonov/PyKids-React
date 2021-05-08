import React, { useState } from 'react';
import Editor from './Editor';
import './TaskPage.css'

import { Button } from './Button';

export default function TaskPage() {

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
                        Task Name
                    </h1>
                    <p className="tast-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero id enim convallis faucibus eu in tellus. In ut tempor orci. Praesent vitae urna tristique lorem suscipit cursus non at augue. Nam non viverra diam, in convallis elit. Nulla dolor libero, mattis eu urna quis, efficitur imperdiet odio. Nunc ornare finibus massa non malesuada. Duis feugiat tortor varius, congue quam sit amet, vestibulum quam. Sed condimentum libero vitae facilisis commodo. Sed egestas eget diam vel egestas.                     
                    </p>
                    <Button buttonStyle='btn--hint' onClick={unhide}>HINT</Button>
                    <p id="hint-text" className="hint-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero id enim convallis faucibus eu in tellus. In ut tempor orci. Praesent vitae urna tristique lorem suscipit cursus non at augue.
                    </p>
                </div>
            </div>
        </div>
        <div className="right-side">
            <div className="pane">
                <Editor 
                language="python" 
                displayName="SOME NAME" 
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


