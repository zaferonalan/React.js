import React from 'react'

const AlbumListItem = ({ album }) => {
    console.log(album)
  return (
    <div>{album.title}</div>
  )
}

export default AlbumListItem