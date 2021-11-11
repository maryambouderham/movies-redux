import React, { useState } from "react";
import { connect } from "react-redux";
import ModalDelete from "../modals/ModalDelete";
import { Anime } from "../models/Anime";
import { moviesSelector } from "../store/selectors/movie";
import { TYPE_MOVIE_ADD } from "../store/types/movie";

import DatatableItem from "./DatatableItem";

const Datatable = ({ movies = [] }) => {
  
  
  return (
    <div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <h4>
                Movie List
                <button
                  className="btn btn-success btn-xs"
                  style={{ float: "right" }}
                  data-title="Add"
                  data-toggle="modal"
                  data-target="#add"
                  >
                  <span className="glyphicon glyphicon-plus" />
                  ADD MOVIE
                </button>
              </h4>
              <div className="table-responsive">
                <table
                  id="mytable"
                  className="table table-bordred table-striped"
                >
                  <thead>
                    <tr>
                      <th>
                        <input type="checkbox" id="checkall" />
                      </th>
                      <th>Thumbnail</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {movies.movies.map((t) => (
                      <DatatableItem
                        key={t.id}
                        id={t.id}
                        title={t.title}
                        description={t.description}
                        image={t.image}
                        
                      />
                      
                    ))}
                  </tbody>
                </table>
                <div className="clearfix" />
                <ul className="pagination pull-right">
                  <li className="disabled">
                    <a href="#">
                      <span className="glyphicon glyphicon-chevron-left" />
                    </a>
                  </li>
                  <li className="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="glyphicon glyphicon-chevron-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Modal ADD */}
      </div>
    </div>
  );
};
// const MovieAddStore =connect(null,(dispatch) => ({
//     onAddMovie: movie =>
//     dispatch(onAddMovieAction(movie))
// }))

const DatatableStore = connect((state) => ({
  movies: moviesSelector(state),
 
}));
export default DatatableStore(Datatable);
