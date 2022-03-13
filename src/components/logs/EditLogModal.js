import React,{useEffect,useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {updateLog} from '../../actions/LogAction';


const EditLogModal = ({current,updateLog}) => {

    const [message,setMessage] = useState('');
    const [attention,setAttention] = useState(false);
    const [tech,setTech] = useState('');

    useEffect (() => {
       if (current) {
           setMessage(current.message);
           setAttention(current.attention);
           setTech(current.tech);
       }      
    },[current])
    const onSubmit = () => {
       if(message===''||tech==='') M.toast({
           html:"pls enter a message or a tech"
       })

       else {
           const updatelog = {
               message,
               attention,
               tech,
               id:current.id,
               date:new Date(),
           }
           updateLog(updatelog);
           M.toast({html:`log updated by ${tech}`})
       }
    }
  return (  
   <div id='edit-log-modal' className='modal' style={styleModal}>
         <div className="modal-content">
             <h4>Edit System Log</h4>
             <div className="row">
                 <div className="input-field">
                    <input type='text' name='message' value={message} onChange={e=>setMessage(e.target.value)} />
                 </div>
                 <label htmlFor='message' className="active">
                     Log Message
                 </label>
             </div>
             <div className="row">
                 <div className="input-field">
                    <select  name='tech' value={tech} onChange={e=>setTech(e.target.value)} className='browser-default'>
                         <option value='' disabled>Select A Technican</option>
                         <option value="John Doe">John Doe</option>
                         <option value="Blessing Opar">Blessing Opar</option>
                    </select>
                 </div>      
             </div>

             <div className="row">
                 <div className="input-field">   
                    <p>     
                      <label>       
                        <input type='checkbox' className='filled-in'  checked={attention} name='attention' value={attention} onChange={e=>setAttention(!attention)} /> 
                        <span>Need Attention</span>
                    </label>
                    </p>  
                 </div>
             </div>
         </div>
         <div className="modal-footer">
             <a href="#!" onClick={onSubmit} className="modal-close blue waves-effect waves-light btn">Enter</a>
         </div>
  </div>
  )
};


EditLogModal.propTypes = {
    current: PropTypes.object,
    updateLog: PropTypes.func.isRequired
 }
  
 
 
 const mapStateToProps = state => ({
      current:state.log.current
 });

  const styleModal = {
      width:'75%',
      height:'75%'
  }

export default connect(mapStateToProps,{updateLog})(EditLogModal);
