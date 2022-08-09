import React from 'react'
import styles from './styles.module.css'

function Productcard(props){
    const{productlist}=props
return(
    <div className={styles.productCard}>
    <img src={productlist.thumbnail} alt="prpductImage" className={styles.productIMG}/>
    <p><b>{productlist.title}</b></p>
    <p><i>{productlist.description}</i></p>
    <p>{productlist.price}</p>
    <p><b>{productlist.rating}</b></p>
    </div>
)
}

export default Productcard