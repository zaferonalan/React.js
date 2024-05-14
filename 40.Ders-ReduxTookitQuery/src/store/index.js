import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersApi } from "./api/usersApi";

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducerPath,
    },
    middleware:(getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(usersApi.middleware)
    },
})

setupListeners(store.dispatch)

export {
    useFetchUsersQuery,
    useAddUsersMutation,
    useRemoveUsersMutation
} from './api/usersApi'