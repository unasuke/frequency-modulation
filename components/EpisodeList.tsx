// import EpisodeListItem from 'EpisodeListItem'

function EpisodeList(episodes: any) {
  console.log(episodes)
  const listItems = episodes.episodes.map((episode) => 
    <li>
      <article style={{marginBottom: '10px', padding: '10px', border: '1px solid black' }}>
        <div>{episode.date}</div>
        <div>#{episode.id}</div>
        <h1>{episode.title}</h1>
        <ul>{
          episode.guests.map((guest, index) =>(
          <li key={index}>{guest.name}</li>
          ))
          }</ul>
        <a href='#'>Read shownote</a>
      </article>
    </li>
  )
  return <ul style={{ listStyleType: 'none', padding: '0' }}>{listItems}</ul>
}

export default EpisodeList