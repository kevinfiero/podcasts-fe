import React from 'react'
import PropTypes from 'prop-types'
import styles from './Podcast.css'

function Podcast({ title, thumbnail, url, favorites, onClick}) {

  let clicked = false

  if(favorites !== null){
    let arr = favorites.map(function (obj) {
      return obj.url
    })
    if(arr.includes(url)){
      clicked = true
    }
  }



  return (
    <div className={styles.Podcast}>
      <a href={url} target="_blank">
        <h3>{title}</h3>
        <img src={thumbnail} alt={title}/>
      </a>
      <button 
        type="button" 
        onClick = {() => onClick(url, title, thumbnail)} 
        className = {clicked ? styles.clicked : styles.unclicked}
      >Favorite</button>
    </div>
  )
}

Podcast.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Podcast

