import React, { useState } from 'react';
import Output from '../Output/Output'

import styles from './Input.module.css';

export default function Input() {



  const [resolverProblem, setResolverProblem] = useState([]);
  const [errors, setErrors] = useState([]);

  const calculate = (data) => {
     
    //split in lines
    let lines = data.split(/\r?\n/);
   
    //get first line for know how much lines continue
    let numerOfLines = parseInt(lines[0]);
   
    //remove first line
    let pureLines = [...lines];
    pureLines.shift();

    //reverse words each line and apply in template
    let pureLinesReversedAndTemplated = [];
    pureLines.map((pureLine, i) => {
      //if not empty line
      if(pureLine) {
        let lineReversed = pureLine.split(" ").reverse().join(" ");
        let lineTemplated = `Case #${i+1}: ${lineReversed}`
        pureLinesReversedAndTemplated.push(lineTemplated);
      }
   
    })

    //validates
    let errors = [];
    //validate if numberoflines is a int
    if(!Number.isInteger(numerOfLines)) {
      
      errors.push("Sorry, the first line should be a number");
    
    } else {

      //validate if equal nomberoflines and counted lines
      if(pureLines.length != numerOfLines) {
        errors.push("Sorry, the first line not match with line length");
      }

    }     
    setErrors(errors);
    setResolverProblem(pureLinesReversedAndTemplated);
  }



  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <textarea onChange={() => calculate(event.target.value)} />
      </div> 
      <Output  resolverProblem={resolverProblem} errors={errors} />   
    </div>
  )
}
