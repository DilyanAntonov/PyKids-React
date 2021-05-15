import React, { useState } from 'react';
import './TaskSearch.css'
import { Button } from './Button';
import  Card  from './Card'

export default function TaskSearch(props) {

    const items = [
        {
            title: "🍔",
            text:"Make a hamburger",
            link:"/",
            completed:"true"
        },
        {
            title:"🥐",
            text:"Make a hamburger",
            link:"/",
            completed:"false"
        },
        {
            title:"🚲",
            text:"Make a hamburger",
            link:"/",
            completed:"false"
        },
        {
            title:"🧊",
            text:"Make a hamburger",
            link:"/",
            completed:"true"
        },
        {
            title:"✏️",
            text:"Make a hamburger",
            link:"/",
            completed:"true"
        },
        {
            title:"🔨",
            text:"Make a hamburger",
            link:"/",
            completed:"false"
        },
        {
            title:"🧊",
            text:"Make a hamburger",
            link:"/",
            completed:"true"
        },  
        {
            title:"🍔",
            text:"Make a hamburger",
            link:"/",
            completed:"false"
        },
        {
            title:"✏️",
            text:"Make a hamburger",
            link:"/",
            completed:"true"
        }
    ];

    items.forEach(function(entry){
        console.log(entry.title);
    });

  return (
    <>  
        <div className="side-buttons-group">
            <Button
                className='btns'
                buttonStyle='btn--menu'
                buttonSize='btn--large'
                >
                VARIABLES
            </Button>
            <Button
                className='btns'
                buttonStyle='btn--menu'
                buttonSize='btn--large'
                >
                LISTS
            </Button>
            <Button
                className='btns'
                buttonStyle='btn--menu'
                buttonSize='btn--large'
                >
                STRINGS
            </Button>
            <Button
                className='btns'
                buttonStyle='btn--menu'
                buttonSize='btn--large'
                >
                LOOPS
            </Button>
            <Button
                className='btns'
                buttonStyle='btn--menu'
                buttonSize='btn--large'
                >
                SIGN UP
            </Button>
            <Button
                className='btns'
                buttonStyle='btn--menu'
                buttonSize='btn--large'
                >
                SIGN UP
            </Button>
        </div>
        <div className="items-group">
            <Card
                title="🍔"
                text="Make a hamburger"
                link="/"
                completed="false"
            />
            {items.map((item, i) => 
                        <Card 
                            title = {item.title}
                            text = {item.text}
                            link = {item.link}
                            completed = {item.completed}
                        />)}
        </div>
    </>
    );
}


