import React, { useState } from 'react';
import styles from './Output.module.css';



function ItemList ({item}) {
    return (
    <li>{item}</li>
    ) 
}
export default function Output({resolverProblem, errors=[]}) {

    console.log(errors)
  const listItems = resolverProblem.map((itemValue,i) => {
        return <ItemList key={i} item={itemValue} />
  })

  const errorItems = errors.map((itemValue,i) => {
    return <ItemList key={i} item={itemValue} />
  })
  
  return (
    <div className={styles.output}>
      <ul>{listItems}</ul>

      <div className={styles.errors}>
        <ul>{errorItems}</ul>
      </div>
    </div>    
  )
}
