import React from 'react'
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                login:"Don't know",
                name:"unknown"
            }
        }
    }
//    async componentDidMount(){

//       //this.Interval=  setInterval(()=>{console.log("hello")},1000)
//     }
//     componentDidUpdate(){
//         console.log("did updated")
//     }
//     componentWillUnmount(){
//         clearInterval(this.Interval)
//     }
    render(){
        const {login,name}=this.state.userInfo;
        return(
            <div className="user-card">
            <h2>Login:anjan</h2>
            <h4>name:arukala</h4>
            <p>email:anjanarukala@gmail.com</p>
        </div>)
        
    }
}
export default UserClass;