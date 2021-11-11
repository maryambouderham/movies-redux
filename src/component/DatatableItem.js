import React from 'react'
import { connect } from 'react-redux';
import { updateSelectedIdAction } from '../store/actions/movie';

const DatatableItem = (props) => {

    const handleClick=()=>{
    props.updateSelectedId(props.id)
   }

   return (

        <>
             <tr>
                <td><input type="checkbox" className="checkthis" /></td>
                <td><div>
                    <img src={props.image} width={60} alt /></div></td>
                <td><div><span> {props.title}</span></div></td>
                <td><div><span />{props.description}</div></td>
                <td><p data-placement="top" data-toggle="tooltip" title="Edit">
                    <button className="btn btn-warning btn-xs" onClick={handleClick} data-title="Edit" data-toggle="modal" data-target="#edit">
                      <span className="glyphicon glyphicon-pencil" />
                    </button></p></td>
                <td><p data-placement="top" data-toggle="tooltip" title="Delete" >
                    <button className="btn btn-danger btn-xs" onClick={handleClick} data-title="Delete" data-toggle="modal" data-target="#delete"><span className="glyphicon glyphicon-trash" />
                    </button></p></td>
            </tr>
            
        </>
    )
}

const DatatableItemStore = connect(null,(dispatch)=>({
    updateSelectedId:value=>dispatch(updateSelectedIdAction(value))
 }));


export default DatatableItemStore(DatatableItem)