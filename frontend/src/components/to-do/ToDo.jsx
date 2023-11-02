import styles from "./style.module.scss";
import React, { useState } from 'react';

export default function ToDo(props){
    const [isChecked, setIsChecked] = useState(props.checked);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
      if (props.onChange) {
        props.onChange();
      }
    };
    return(
        <div className={styles.container}>

            <label className={styles.input}>
                <input type="checkbox" onChange={handleCheckboxChange} checked={isChecked}/> 
                {props.text}
            </label>

        </div>
    )
}