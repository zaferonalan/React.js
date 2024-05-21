import React from 'react'
import ExpandablePanel from './ExpandablePanel'
import AlbumList from './AlbumList'
import { GoTrash } from "react-icons/go";
import { useRemoveUsersMutation } from "../store/index";
import CircularProgress from '@mui/material/CircularProgress';

const UserItemList = ({user}) => {
  const [ removeUsers, results ] = useRemoveUsersMutation();

  const handleClick = () => {
    debugger;
    removeUsers(user)
  }

  const header = (
    <>
      <button onClick={handleClick}  style={{marginRight: '30px', border: 'none', cursor: 'pointer'}}>
        {results.isLoading ? (
          <CircularProgress style={{width: '20px', height: '20px'}}/>
        ): (<GoTrash/>)}
        
      </button>
      {user.name}
    </>
  )

  return (
    <div>
      <ExpandablePanel header={header}>
        <AlbumList user={ user } />
      </ExpandablePanel>
    </div>
    
  )
}

export default UserItemList