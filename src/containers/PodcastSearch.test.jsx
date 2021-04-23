import React from 'react';
import { screen, render, waitFor } from '@testing-library/react'
import user from '@testing-library/user-event'
describe(() => {

  it('search for podcasts when a search term is typed', () => {
    render(<PodcastSearch />)

    const searchInput = screen.getByPlaceholderText('Search For Your Favorite Podcast!')
    // fireEvent.input(searchInput, {
    //   target: {
    //     value: 'Comedy Bang Bang'
    //   }
    // })

    user.type(searchInput, 'Comedy Bang Bang');

    return waitFor(() => {
      expect(screen.getByTestId('podcasts').not.toBeEmptyDOMElement());
    })
  
  })


});
