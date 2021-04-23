import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node'
import user from '@testing-library/user-event';
import PodcastSearch from './PodcastSearch';

const server = setupServer(
  rest.get('https://listen-api.listennotes.com/api/v2', (req, res, ctx) => {
    return res(ctx.json({ podcasts: 
      [
        {
        title: "Comedy Bang Bang: The Podcast",
        thumbnail: "https://cdn-images-1.listennotes.com/podcasts/comedy-bang-bang-the-podcast-earwolf-and-3PWDcO-9hty-1mILDBlbHr9.300x300.jpg",
        url: "https://www.listennotes.com/c/440fe2f622fe406c8755165be85958df/"
        },
        {
          title: "Comedy Bang Bang",
          thumbnail:"https://cdn-images-1.listennotes.com/podcasts/comedy-bang-bang-discussion-hub-Rh1lcwre9D0-hpmHZXzB_c1.300x300.jpg",
          url:"https://www.listennotes.com/c/a80d8202936f442fb23fb7e9f0b33767/"
        }
      ]
    }))
  }

));

describe('', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  it('search for podcasts when a search term is typed', () => {
    render(<PodcastSearch />)

    const searchInput = screen.getByPlaceholderText('Search For Your Favorite Podcast!')

    user.type(searchInput, 'Comedy Bang Bang');

    return waitFor(() => {
      expect(screen.getByTestId('podcasts')).not.toBeEmptyDOMElement();
    })
  
  })


});
