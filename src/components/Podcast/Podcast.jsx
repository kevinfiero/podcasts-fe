import React from 'react'
import PropTypes from 'prop-types'
import styles from './Podcast.css'

function Podcast({ title, thumbnail, url}) {
  return (
    <div className={styles.Podcast}>
      <a href={url} target="_blank">
        <h3>{title}</h3>
        <img src={thumbnail} alt={title}/>
      </a>
    </div>
  )
}

Podcast.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired

}

export default Podcast

