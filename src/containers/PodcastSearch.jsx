import React, { Component } from 'react';
import PodcastList from '../components/PodcastList/PodcastList';
import Search from '../components/search/Search';
import { findPodcasts } from '../services/podcastAPI';

export default class PodcastSearch extends Component {

  state = {
    search: '',
    podcasts: []
  }

  fetchPodcasts = () => {
    findPodcasts(this.state.search)
      .then(podcasts => this.setState({ podcasts }))
  }

  handleSearch = ({ target }) => {
    this.setState({ search: target.value }, () => {
        this.fetchPodcasts();
    })
  }

  render() {
    const { search, podcasts } = this.state;

    return(
      <>
        <Search search = {search} onChange={this.handleSearch}/>
        <PodcastList podcasts={podcasts} />
      </>
    )
  }
}
