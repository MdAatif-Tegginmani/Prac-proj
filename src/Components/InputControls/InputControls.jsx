import React from 'react'

import styles from './InputControls.module.css'

export default function InputControls(props) {
  return (
    <div className={styles.container}>
    {
        props.label && <label>{props.label}</label>
    }
        <input type="text"{...props} />


    
    
    </div>
  )
}
