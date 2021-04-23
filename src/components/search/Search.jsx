import React from 'react'
import PropTypes from 'prop-types'
import styles from './Search.css'

const Search = ({ search, onChange }) => {
  return (
    <input
      className={styles.Search}
      type="text"
      placeholder="Search For Your Favorite Podcast!"
      value={search}
      onChange={onChange}
    />
  )
};

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Search
