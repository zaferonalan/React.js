import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const usersApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000'
    }),

    endpoints(builder){
        return {
            // ! Datayı Çekme işlemi

            fetchUsers: builder.query({
                query:() => {
                    return{
                        url:'/users',
                        method: 'GET'
                    }
                }
            }),

            // ! Data'da değişiklik yapıcağım zaman mutation kullanılıyor.
            // ! Ekleme Aksiyonu

            addUsers: builder.mutation({
                query: () => {
                    return{
                        url: '/users',
                        method: 'POST',
                        body:{
                            name: 'Can'
                        }
                    }
                }
            }),

            // ! Silme aksiyonu

            removeUsers: builder.mutation({
                query:(user) => {
                    return{
                        url: `/users/${user.id}`,
                        method: 'DELETE',
                    }
                }
            }),

        }
    }
})

export const {useFetchUsersQuery, useAddUsersMutation, useRemoveUsersMutation} = usersApi
export {usersApi};