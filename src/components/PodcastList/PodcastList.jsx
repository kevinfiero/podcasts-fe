import React from 'react'
import PropTypes from 'prop-types'
import Podcast from '../Podcast/podcast';
import styles from './PodcastList.css';

const PodcastList = ({ podcasts, favorites, onClick }) => {

  const podcastElements = podcasts.map((podcast) => (
    <li key={podcast.url} className={styles.PodcastList}>
      <Podcast {...podcast} favorites={favorites} onClick={onClick} />
    </li>
  ));

  return(
    <div>
      <ul data-testid="podcasts" className={styles.PodcastList}>
        {podcastElements}
      </ul>
    </div>

  )

}

PodcastList.propTypes = {
  podcasts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })),
  onClick: PropTypes.func.isRequired

}

export default PodcastList
