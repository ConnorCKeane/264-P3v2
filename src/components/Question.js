import React from "react"
import PropTypes from 'prop-types';



const Question = ({text}) => {

    return(
      <div style={{color:'blue', fontStyle:'bold'}}>This is some text that was passed to the Question Component {text}</div>
        
    )

}

Question.propTypes = {
  text: PropTypes.string.isRequired
}

export default Question