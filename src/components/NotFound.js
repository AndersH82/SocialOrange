import React from 'react'
import NoResults from "../assets/search.png";
import styles from "../styles/NotFound.module.css";
import Asset from './Asset';


const NotFound = () => {
  return (
    <div className={styles.Notfound}>
 <Asset src={NoResults} message="Sorry, the page you're looking for doesn't exist" />
</div>
  )
}

export default NotFound