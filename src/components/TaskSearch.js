import React, { useState } from 'react';
import Editor from './Editor';
import './TaskSearch.css'
import { Button } from './Button';

export default function TaskSearch(props) {

  return (
    <>  
        <div className="left-side">
            <div className="main-text-block">
                <div className="btn-group">
                    <button>Functions</button>
                    <button>If Statements</button>
                    <button>For Loop</button>
                    <button>While Loop</button>
                    <button>Lists</button>
                    <button>Arrays</button>
                    <button>Functions</button>
                    <button>TEST BUTTON</button>
                    <button>TEST BUTTON</button>
                </div>
            </div>
        </div>
    </>
    );
}


