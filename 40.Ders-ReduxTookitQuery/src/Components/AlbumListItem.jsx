import ExpandablePanel from './ExpandablePanel'
import FotoList from './FotoList'
import { CircularProgress } from '@mui/material'
import { GoTrash } from 'react-icons/go'
import { useRemoveAlbumsMutation } from '../store'

const AlbumListItem = ({ album }) => {
    const[removeAlbum, results] = useRemoveAlbumsMutation()

    const handleClick = () => {
        removeAlbum(album);
    }

    const header = (
        <>
            <button onClick={handleClick}  style={{marginRight: '30px', border: 'none', cursor: 'pointer'}}>
            {results.isLoading ? (
                <CircularProgress style={{width: '20px', height: '20px'}}/>
            ): (<GoTrash/>)}
            
            </button>
            {album.title}
        </>
        )

  return (
    <div>
        <ExpandablePanel header={header}>
            <FotoList album={album}/>
        </ExpandablePanel>
    </div>
  )
}

export default AlbumListItem