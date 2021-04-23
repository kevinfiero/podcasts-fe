import React from 'react'
import PropTypes from 'prop-types'
import Podcast from '../Podcast/podcast';
import styles from './PodcastList.css';

const PodcastList = ({ podcasts }) => {

  const podcastElements = podcasts.map((podcast) => (
    <li key={podcast.url} className={styles.PodcastList}>
      <Podcast {...podcast} />
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
  }))

}

export default PodcastList
