import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/python/python'
import { Controlled as ControlledEditor } from 
'react-codemirror2'

import { FaArrowCircleRight } from 'react-icons/fa';

export default function Editor(props) {
    const {
        language,
        displayName,
        textvalue,
        value,
        onChange,
    } = props;

     function handleChange(editor, data, value) {
        onChange(value)
    };

    return (
        <div className="editor-container">
            <div className="editor-title">
                {displayName}
                <div>
                    <button className="run-button">
                        <FaArrowCircleRight/>
                    </button>
                </div>
            </div>
            <ControlledEditor 
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    value: "🥪 = [🍞,🥓,🧀]\n🥪 += 🍅\n\nprint(🥪)",
                    mode: language,
                    theme: 'material',
                    lineNumbers: true,
                    indentUnit: 20,
                }}
            />
        </div>
    )
}
