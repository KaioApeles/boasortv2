import React, {Component} from 'react'
import './sorteio.css'
class sorteio extends Component{
  constructor(props){
    super(props)
  }
  
  
  render(){
    return (
      <div className='sort-form'>
        <h2><i className='fa fa-gift' aria-hidden="true"></i> BoaSort!</h2>
        <hr></hr>
      </div>
    )
  }
}

export default sorteio