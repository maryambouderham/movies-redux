const movieSelectorWithFilter=state=>{
    if(state.filterQuery==="")
    return state.movies
    else 
    return state.movies.filter(t=>t.title.includes(state.filterQuery))
}


export const moviesSelector =(state)=>({
    movies:movieSelectorWithFilter(state)
})