'use client'
import { useState } from 'react';
import samplePDF from './syllabuses/CSCI_243_Spring_2025_Davis.pdf';
//import * as syllabuses from './syllabuses';
function Syllabus(props: { link: string | undefined; }){
    const [count,setCount] = useState(0);
    function incButtonClick(){
        setCount(count+1)
    }
    return (
        <div>
            <article>
                <h1>Hello World</h1>
                <button onClick={incButtonClick}>Increment</button>
                <p>{count}</p>
                <a href={samplePDF} download>PDF</a>
            </article>
        </div>
    );
}

export default Syllabus;