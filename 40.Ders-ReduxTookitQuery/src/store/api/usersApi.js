import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const pause = (duration) => {
    return new Promise((reseolve) => {
        setTimeout(reseolve, duration)
    })
}


const usersApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
        fetchFn:  async(...args) => {
            await pause(1000)
            return fetch(...args)
        }
    }),

    endpoints(builder){
        return {
            // ! Datayı Çekme işlemi

            fetchUsers: builder.query({
                providesTags:['User'],
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
                // ! Ekleme işlemi yaptığımda datayı providerTags'ta ki isimle yakalayıp yapılan değişiklik için datayı tekrar çekip yansıtma işelmini yapıyor.
                invalidatesTags:() => {
                    return[{type:'User'}]
                },
                query: () => {
                    return{
                        url: '/users',
                        method: 'POST',
                        body:{
                            name: faker.name.fullName()
                        }
                    }
                }
            }),

            // ! Silme aksiyonu

            removeUsers: builder.mutation({
                invalidatesTags:() => {
                    return[{type:'User'}]
                },
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