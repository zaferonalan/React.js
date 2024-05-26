import React from 'react'
import { useFetchAlbumsQuery } from '../store'

const AlbumList = ({user}) => {
  const { data, isError, isFetching } = useFetchAlbumsQuery(user)
  return (
    <div>{user.name} Albümü</div>
  )
}

export default AlbumList