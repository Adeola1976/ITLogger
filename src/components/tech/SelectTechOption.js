import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getTechs} from '../../actions/TechAction';

const SelectTechOption = ({tech:{techs,loading},getTechs}) => {

    useEffect (() => {
         getTechs();
        //eslint-disable-next-line
    }, []);

    return (
         
            !loading && 
            techs!==null && 
            techs.map(tech => (
            <option   key={tech.id} value={tech.id}>
                {tech.firstName}  {tech.lastName}
            </option>                       
            ))           
        
    )
}

SelectTechOption.propTypes = {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    tech:state.tech
});
export  default connect(mapStateToProps,{getTechs})(SelectTechOption)