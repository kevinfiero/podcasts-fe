import React, { Component } from 'react'
import FavoriteList from '../components/FavoriteList/FavoriteList'

export default class PodcastFavorites extends Component {

  state = {
    favorites: []
  }

  componentDidMount() {
    this.setState({ favorites: JSON.parse(localStorage.getItem('favorites')) }) 
  }

  handleRemove = (url) => {

    this.setState({ favorites: [...this.state.favorites].filter(item => item.url !== url) }, () => 
      {localStorage.setItem('favorites', JSON.stringify(this.state.favorites))}
  )
  }
  
  render() {

    const { favorites } = this.state;

    return (
      <div>
        <FavoriteList favorites={favorites} onClick={this.handleRemove} />
      </div>
    )
  }
}
