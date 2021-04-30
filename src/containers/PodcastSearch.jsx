import React, { Component } from 'react';
import PodcastList from '../components/PodcastList/PodcastList';
import Search from '../components/search/Search';
import { findPodcasts } from '../services/podcastAPI';

export default class PodcastSearch extends Component {

  state = {
    search: '',
    podcasts: [],
    favorites: []
  }

  fetchPodcasts = () => {
    if(this.state.search.length > 1){
    findPodcasts(this.state.search)
      .then(podcasts => this.setState({ podcasts }))
    }
    else{
      this.setState({podcasts: []})
    }
  }

  handleFavorite = (url, title, thumbnail) => {
    this.setState({ favorites: [...this.state.favorites, {url: url, title: title, thumbnail: thumbnail}] })
  }

  handleSearch = ({ target }) => {
    this.setState({ search: target.value }, () => {
        this.fetchPodcasts();
    })
  }

  render() {
    const { search, podcasts, favorites } = this.state;

    return(
      <>
        <Search search = {search} onChange={this.handleSearch}/>
        <PodcastList podcasts={podcasts} favorites={favorites} onClick={this.handleFavorite}/>
      </>
    )
  }
}
