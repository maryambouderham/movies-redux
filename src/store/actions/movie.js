import { TYPE_MOVIE_ADD, TYPE_MOVIE_DEL, TYPE_MOVIE_FILTER, TYPE_MOVIE_UPDATE, TYPE_UPDATE_SELECTEDID } from "../types/movie"

export const deleteMovieAction = (movieId) => ({
    type: TYPE_MOVIE_DEL,
    payload: { movieId }
})
export const updateMovieAction = (movieId) => ({
    type: TYPE_MOVIE_UPDATE,
    payload: { movieId }
})


export const onAddMovieAction = (title,description,image,animeTypes,actors,nbViews,rating,startingDate) => ({
    type: TYPE_MOVIE_ADD,
    payload: { title,description,image,animeTypes,actors,nbViews,rating,startingDate }
})

export const updateFilterAction =(filterValue)=>({
    type:TYPE_MOVIE_FILTER,
    payload:{filterValue}
})

export const updateSelectedIdAction =(selectedId)=>({
    type:TYPE_UPDATE_SELECTEDID,
    payload:{selectedId}
})