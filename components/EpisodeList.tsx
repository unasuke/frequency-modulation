// import EpisodeListItem from 'EpisodeListItem'

function EpisodeList(episodes: any) {
  console.log(episodes)
  const listItems = episodes.episodes.map((episode) => 
    <li><p>{episode.id}, {episode.guests[0].name}</p></li>
  )
  return <ul>{listItems}</ul>
}

export default EpisodeList