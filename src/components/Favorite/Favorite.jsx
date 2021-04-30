import React from 'react'
import PropTypes from 'prop-types'
import styles from './Favorite.css';


const Favorite = ({ title, thumbnail, url, onClick}) => {
  return (
    <div className={styles.Favorite}>
      <a href={url} target="_blank">
        <h3>{title}</h3>
        <img src={thumbnail} alt={title} />
      </a>
      <button 
        type="button" 
        onClick = {() => onClick(url)} 
        className = {styles.unclicked}
      >Remove</button>
    </div>
  )
}

Favorite.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default Favorite
