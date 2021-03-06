import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { moviesSelectorId } from '../store/selectors/movie'

import { TYPE_MOVIE_DEL } from '../store/types/movie'

const ModalDelete = ({deleteMovie}) => {
  const modal=useRef()
 
  const handleClick=()=>{
    deleteMovie()
    modal.current.click()
  }

  return (
        <>
      <div className="modal fade" id="delete" tabIndex={-1} role="dialog" aria-labelledby="edit" aria-hidden="true">
      <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" ref={modal} className="close" data-dismiss="modal" aria-hidden="true"><span className="glyphicon glyphicon-remove" aria-hidden="true" /></button>
          <h4 className="modal-title custom_align" id="Heading">Delete this entry</h4>
        </div>
        <div className="modal-body">
        <div className="alert alert-danger"><span className="glyphicon glyphicon-warning-sign" /> Are you sure you want to delete this Record?</div>
        </div>
        <div className="modal-footer ">
          <button type="button" onClick={handleClick}   className="btn btn-success"><span className="glyphicon glyphicon-ok-sign" />&nbsp;Yes</button>
          <button type="button"  className="btn btn-default" data-dismiss="modal"><span className="glyphicon glyphicon-remove" />&nbsp;No</button>
        </div>
      </div>
      {/* /.modal-content */} 
    </div>
    {/* /.modal-dialog */} 
  </div>
        </>
    )
}

const ModalDeleteMovieStore= connect(null,
  (dispatch)=>({
  deleteMovie:_=>dispatch({type:TYPE_MOVIE_DEL,
                        payload:{}
                      })
}))

export default ModalDeleteMovieStore(ModalDelete)