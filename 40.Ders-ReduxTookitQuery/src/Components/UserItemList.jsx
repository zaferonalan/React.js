import React from 'react'
import ExpandablePanel from './ExpandablePanel'
import AlbumList from './AlbumList'
import { GoTrash } from "react-icons/go";

const UserItemList = ({user}) => {
  const header = (
    <>
      <button style={{marginRight: '30px', border: 'none'}}>
        <GoTrash/>
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