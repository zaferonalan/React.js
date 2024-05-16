import { useFetchUsersQuery } from "../store"
import { Skeleton } from "@mui/material";
import UserItemList from "./UserItemList";
import Button from '@mui/material/Button';

const UserList = () => {
  const { isError, data, isFetching } = useFetchUsersQuery();

  let content
  if (isFetching) {
    content = (
      <Skeleton variant="rectangular" sx={{width:'100%', height:'600px' }} />
    )
  }
  else if(isError){
    content = <div>Hata Var!</div>
  }
  else{
    content = data.map((user) => {
      return <UserItemList key={user.id} user={user}/>
    })
  }

  return (
    <div>
      <div>
        <h1>Kişiler</h1>
        <Button variant="outlined">Kişi Ekle+</Button>
      </div>  
      {content}
    </div>
  )
}

export default UserList