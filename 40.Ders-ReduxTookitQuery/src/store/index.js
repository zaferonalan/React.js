import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersApi } from "./api/usersApi";
import { albumsApi } from "./api/albumsApi";

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [albumsApi.reducerPath]: albumsApi.reducer
    },
    middleware:(getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(usersApi.middleware).concat(albumsApi.middleware)
    },
})

setupListeners(store.dispatch)

export {
    useFetchUsersQuery,
    useAddUsersMutation,
    useRemoveUsersMutation
} from './api/usersApi'



export {
    useFetchAlbumsQuery,
    useAddAlbumsMutation,
    useRemoveAlbumsMutation
}from './api/albumsApi'