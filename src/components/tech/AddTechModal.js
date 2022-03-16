import React,{useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addTech} from '../../actions/TechAction';

const AddTechModal = ({addTech}) => {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const onSubmit = () => {
       if(firstName===''||lastName==='') M.toast({
           html:"pls enter the firstname or lastname of a tech"
       })

       else {
            const addtech = {
            firstName,
            lastName
           }
           addTech(addtech);
           M.toast({
            html:`${firstName} ${lastName} being added as a tech`
           })
 

           //clear field values
           setFirstName('');
           setLastName('');
       }
    }
  return (
      
   <div id='add-tech-modal' className='modal'>
         <div className="modal-content">
             <h4>Add Technician</h4>
             <div className="row">
                 <div className="input-field">
                    <input type='text' name='firstname' value={firstName} onChange={e=>setFirstName(e.target.value)} />
                 </div>
                 <label htmlFor='firstname' className="active">
                     Firstname
                 </label>
             </div>
             <div className="row">
             <div className="input-field">
                    <input type='text' name='lastname' value={lastName} onChange={e=>setLastName(e.target.value)} />
                 </div>
                 <label htmlFor='lastname' className="active">
                     Lastname
                 </label>
             </div>
         </div>
         <div className="modal-footer">
             <a href="#!" onClick={onSubmit} className="modal-close blue waves-effect waves-light btn">Enter</a>
         </div>
  </div>
  )
};


AddTechModal.propTypes = {
    addTech: PropTypes.func.isRequired
}
export  default connect(null,{addTech})(AddTechModal)
