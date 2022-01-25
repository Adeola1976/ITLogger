import React,{useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = () => {
    const [message,setMessage] = useState('');
    const [attention,setAttention] = useState(false);
    const [tech,setTech] = useState('');
    const onSubmit = () => {
       if(message===''||tech==='') M.toast({
           html:"pls enter a message or a tech"
       })

       else {
           console.log(message,tech,attention);

           //clear field values
           setMessage('');
           setAttention(false);
           setTech('');
       }
    }
  return (
   <div id='add-log-modal' className='modal' style={styleModal}>
         <div className="modal-content">
             <h4>Enter System Log</h4>
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

  const styleModal = {
      width:'75%',
      height:'75%'
  }

export default AddLogModal;
