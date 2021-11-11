import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { Anime } from '../models/Anime'
import { TYPE_MOVIE_UPDATE } from '../store/types/movie'

const ModalEdit = ({updateMovie}) => {
  const [movie,setMovie] = useState(new Anime())
  const modal=useRef()
  const handleChange=(e)=>{
    setMovie({...movie,[e.target.name]:e.target.value})
  }
    const handleClick=()=>{
      updateMovie(movie)
      modal.current.click()
    }
    return (
        <>
          <div className="modal fade" id="edit" tabIndex={-1} role="dialog" aria-labelledby="edit" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" ref={modal} className="close" data-dismiss="modal" aria-hidden="true"><span className="glyphicon glyphicon-remove" aria-hidden="true" /></button>
          <h4 className="modal-title custom_align" id="Heading">Edit Your Detail</h4>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <input className="form-control "
             type="text"
              placeholder="title"
              name="title"
              onChange={handleChange}
              value={movie.title} />
          </div>
          <div className="form-group">
            <input className="form-control " 
            type="text" 
            placeholder="description"
            name="description"
            onChange={handleChange}
            value={movie.description} />
          </div>
          <div className="form-group">
          <input className="form-control " 
            type="text" 
            placeholder="image"
            name="image"
            onChange={handleChange}
            value={movie.image}
             />
          </div>
        </div>
        <div className="modal-footer ">
          <button type="button"  onClick={handleClick}  className="btn btn-warning btn-lg" style={{width: '100%'}}><span className="glyphicon glyphicon-ok-sign" />&nbsp;Update</button>
        </div>
      </div>
      {/* /.modal-content */} 
    </div>
    {/* /.modal-dialog */} 
  </div>  
        </>
    )
}
const ModalEditMovieStore= connect(null,
  (dispatch)=>({
  updateMovie:movie=>dispatch({type:TYPE_MOVIE_UPDATE,
                        payload:movie
                      })
}))
export default ModalEditMovieStore(ModalEdit)