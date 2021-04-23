export const findPodcasts = search => {
  return fetch(`https://listen-api.listennotes.com/api/v2/search?q=${search}&type=podcast&only_in=title`,
    {headers: {"X-ListenAPI-Key": "000ba63ee06a4f409f1d44b8d5e39660"}}
  
  )

  .then(res => res.json())
  .then(( { results }) => results.map(result => ({
    title: result.title_original,
    thumbnail: result.thumbnail,
    url: result.listennotes_url
  })

  ))
}
