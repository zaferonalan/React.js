import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersApi } from "./api/usersApi";
import { albumsApi } from "./api/albumsApi";
import { photosApi } from "./api/fotosApi";

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer
    },
    middleware:(getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(usersApi.middleware).concat(albumsApi.middleware).concat(photosApi.middleware)
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

export {
    useFetchPhotoQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation
}from './api/fotosApi'