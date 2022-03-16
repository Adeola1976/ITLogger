import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {deleteTech} from '../../actions/TechAction';
import M from 'materialize-css/dist/js/materialize.min.js';



const TechItem = ({tech:{firstName,lastName,id},deleteTech}) => {
  const  deleteHandler = () => {
         deleteTech(id);
         M.toast({
            html:`${firstName} ${lastName} tech is deleted`
        })
 
   }
  return <div>
         <li className="collection-item">
            <div>
                 {firstName}  {lastName}
                 <a href="#!" className="secondary-content" onClick={deleteHandler}>
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
           
         </li>
  </div>;
};


TechItem.propTypes = {
   deleteTech: PropTypes.func.isRequired,
}
export  default connect(null,{deleteTech})(TechItem)
