import React from 'react'
import { useAddAlbumsMutation, useFetchAlbumsQuery } from '../store'
import Button from "@mui/material/Button";
import { CircularProgress, Skeleton } from '@mui/material';
import AlbumListItem from './AlbumListItem';

const AlbumList = ({ user }) => {
  const { data, isError, isFetching } = useFetchAlbumsQuery(user)
  const[ addAlbums, results ] = useAddAlbumsMutation();

  const handleAlbumAdd = () => {
    addAlbums(user)
  }

  let content;
  if (isFetching) {
    content = (
      <Skeleton variant='rectangular' sx={{width: '100%', height: '200px'}} />
    );
  }
  else if(isError){
    content = <div>Hata var</div>
  }
  else {
    content = data.map((album) => {
      return <AlbumListItem key={album.id} album={album}/>
    })
  }


  return (
    <>
      <div>
        {' '}
        <div className='topArrangement'>
          <h1 style={{ fontSize: '20px' }}>{user.name}</h1>
          <Button variant='outlined' onClick={handleAlbumAdd}>
            {results.isLoading ? <CircularProgress/> : <span> Albüm Ekle </span>}
          </Button>
        </div>
      </div>
      <div>
        {content}
      </div>
    </>
    
  )
}

export default AlbumList