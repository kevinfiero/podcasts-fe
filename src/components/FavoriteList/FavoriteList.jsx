import React from 'react'
import PropTypes from 'prop-types'
import Favorite from '../Favorite/Favorite'
import styles from './FavoriteList.css';



const FavoriteList = ({ favorites, onClick }) => {

  const favoriteElements = favorites.map((favorite) => 
    <li key={favorite.url} className={styles.FavoriteList}>
      <Favorite {...favorite} onClick={onClick} />
    </li>
  )

  return (
    <div>
      <ul className={styles.FavoriteList}>
        {favoriteElements}
      </ul>
    </div>
  )
}

FavoriteList.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }))
}

export default FavoriteList
