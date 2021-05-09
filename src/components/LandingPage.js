import React, { useState } from 'react';
import Editor from './Editor';
import { Button } from './Button';

export default function LandingPage() {

  const [python, setPython] = useState("🥪 = [🍞,🥓,🧀]\n🥪 += 🍅\n\nprint(🥪)")

  return (
    <>
        <div className="left-side">
            <div className="pane">
                <div className="main-text-block">
                    <h1 className="main-text">Learn Coding</h1>
                    <h3 className="secondary-text">The fun way</h3>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        >
                        SIGN UP
                    </Button>
                </div>
            </div>
        </div>
        <div className="right-side">
            <div className="pane">
                <Editor 
                language="python" 
                displayName="Let's make a 🥪" 
                textvalue={"🥪 = [🍞,🥓,🧀]\n\n# Forgot tomatoes... \n🥪 += 🍅\n\nprint(🥪)"}
                resultvalue={"🍞,🥓,🧀,🍅"}
                value={python} 
                onChange={setPython} 
                />
            </div>
        </div>
    </>
        );
}


