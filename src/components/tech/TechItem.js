import React from 'react';

const TechItem = ({tech}) => {
  return <div>
         <li className="collection-item">
            <div>
                 {tech.firstName}  {tech.lastName}
                 <a href="#!" className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
           
         </li>
  </div>;
};
export default TechItem;
