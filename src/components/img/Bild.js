import React, { Component } from 'react'
import img from './Salon.jpg'
import styles from './Bild.module.css'

class Bild extends Component {
    
    render() { 
        return ( 
            <div className={styles.bild}>
                <img src={img} alt="salon"/>
            </div>
         );
    }
}
 
export default Bild;