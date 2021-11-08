import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { Anime } from '../models/Anime'
import { TYPE_MOVIE_ADD } from '../store/types/movie'

const ModalAdd = ({addAnime}) => {
  const [movie,setMovie] = useState(new Anime())
 const modal=useRef()
  const handleChange=(e)=>{
    setMovie({...movie,[e.target.name]:e.target.value})
  }
  const handleClick=()=>{
    if (movie.title==="" || movie.description==="" || movie.image==="") alert("invalid value")
    else
    {addAnime(movie)
    setMovie(new Anime())
    modal.current.click()
    }
  }
    return (
        <>
            <div className="modal fade" id="add" tabIndex={-1} role="dialog" aria-labelledby="add" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" 
          ref={modal}
          className="close" data-dismiss="modal" aria-hidden="true"><span className="glyphicon glyphicon-remove" aria-hidden="true" /></button>
          <h4 className="modal-title custom_align" id="Heading">Add Your Detail</h4>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <input className="form-control " 
            type="text" 
            placeholder="title" 
            onChange={handleChange}
            name="title"
            value={movie.title}/>
          </div>
          <div className="form-group">
            <input className="form-control " 
            type="text"
            placeholder="thumbail" 
            onChange={handleChange}
            name="image"
            value={movie.image}/>
          </div>
          <div className="form-group">
            <textarea rows={2} 
            className="form-control"
             placeholder="Description"
            
              onChange={handleChange}
              name="description"
              value={movie.description}/>
          </div>
        </div>
        <div className="modal-footer ">
          <button type="button" 
          className="btn btn-success btn-lg" 
          style={{width: '100%'}}
          onClick={handleClick}
          >
            <span className="glyphicon glyphicon-ok-sign" />&nbsp;Add
            </button>
        </div>
      </div>
      {/* /.modal-content */} 
    </div>
    {/* /.modal-dialog */} 
  </div>
        </>
    )
}
const ModalAddMovieStore=connect(null,(dispatch)=>({addAnime:anime=>dispatch({
  type:TYPE_MOVIE_ADD,
  payload:anime
})}))
export default ModalAddMovieStore(ModalAdd)