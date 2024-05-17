import { useFetchUsersQuery,useAddUsersMutation } from "../store"
import { Skeleton } from "@mui/material";
import UserItemList from "./UserItemList";
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const UserList = () => {
  const { isError, data, isFetching } = useFetchUsersQuery();
  const [addUser, result] = useAddUsersMutation()

  const handleUserAdd = () => {
    addUser()
  }

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
      <div className="topArrangement">
        <h1 style={{fontSize:"20px"}} >Kişiler</h1>
        <Button variant="outlined" onClick={handleUserAdd} >
          {result.isLoading ? (
            <CircularProgress/>
          ): <span>Kişi Ekle+</span>}
          
        </Button>
      </div>  
      {content}
    </div>
  )
}

export default UserList