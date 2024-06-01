import React from 'react'
import { useAddPhotoMutation, useFetchPhotoQuery } from '../store';
import { Button, CircularProgress, Skeleton } from '@mui/material';
import PhotoListItem from './PhotoListItem';

const FotoList = ({ album }) => {
  const { data, isError, isFetching } = useFetchPhotoQuery(album)
  const[ addPhoto, results ] = useAddPhotoMutation();

  const handlePhotoAdd = () => {
    addPhoto(album)
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
    content = data.map((photo) => {
      return <PhotoListItem key={photo.id} photo={photo}/>
    })
  }
  return (
    <>
      <div>
        {' '}
        <div className='topArrangement'>
          <h1 style={{ fontSize: '20px' }}>{album.title} Fotoları</h1>
          <Button variant='outlined' onClick={handlePhotoAdd}>
            {results.isLoading ? <CircularProgress/> : <span> Poto Ekle </span>}
          </Button>
        </div>
      </div>
      <div>
        {content}
      </div>
    </>
  )
}

export default FotoList