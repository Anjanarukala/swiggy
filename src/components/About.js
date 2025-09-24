import React from 'react'
import UserClass from './UserClass'
class About extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
     return (
    <div>
        <h2>About Users</h2>
        <UserClass />
    </div>
  )
  }
}
 


export default About