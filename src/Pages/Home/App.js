import React, { Component } from "react";

import "./App.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import LeftPanel from "../../Components/LeftPanel/LeftPanel";
import RightPanel from "../../Components/RightPanel/RightPanel";
//import Container from "../../Components/Container/Container";//
import User from "../../Components/User/User";

class App extends Component {
  state= {
    users:[
      {userId :"123" , userName : "jay" , userEmail:"jay@gmail.com", userAge: "33",
      userMobile: "+(322) 464 3542", userDescription: "jay is a sr., web developer"},

      {userId:"777",userName: "Paul" ,userEmail:"jy@gmail.com" ,userAge:"33",
      userMobile: "+(322) 464 3542",userDescription: "jay is a sr., web developer"},
      { userId: "652", userName: "juloy", userEmail: "paul_jn123@gmail.com", userAge: "23", userMobile: "+(322) 543 6432", userDescription: "paul is a freelancer" },

     {userId:"333",userName: "Paul" ,userEmail:"ja@gmail.com" ,userAge: "33",
     userMobile: "+(322) 464 3542",userDescription: "jay is a sr., web developer"}
    ],
    showUsers: false
  }
  changeNames = ( id, name , email, age, mobile, description) => {
  // alert("yes, user clicked on changeName");
  this.setState({
    users: [
      { userId: 1432, userName: "rayon", userEmail: "jay@gmail.com", userAge: 33, userMobile: "+(322) 464 3542", userDescription: "jay is a sr., web developer" }, 
      
      { userId: id, userName: name, userEmail: email, userAge: age, userMobile: mobile, userDescription: description },  
      
      { userId: 652, userName: "juloy", userEmail: "paul_jn123@gmail.com", userAge: 23, userMobile: "+(322) 543 6432", userDescription: "paul is a freelancer" }
    ]
    })
  }

  changeNameHandler=(event) => {
    this.setState({
      users: [
        { userId: 1432, userName: "jay", userEmail: "jay@gmail.com", userAge: 33, userMobile: "+(322) 464 3542", userDescription: "jay is a sr., web developer" }, 
        
        { userId: 753, userName: event.target.value, userEmail: "john@gmail.com", userAge: 22, userMobile: "+(752) 235 7532", userDescription: "john is a developer" }, 
        
        { userId: 652, userName: "paul", userEmail: "paul_jn123@gmail.com", userAge: 23, userMobile: "+(322) 543 6432", userDescription: "paul is a freelancer" }
      ]
    })
  
  }

  toggleUserHandler=() =>{
    const doesShow = this.state.showUsers;
    this.setState({
      showUsers:  !doesShow
    })
  }

  deleteUserHandler =(userIndex) =>{
    const users=this.state.users;
     
    users.splice(userIndex, 1);
    this.setState({
      users: users
    });

  }

  render() {
    let users = null;
     if(this.state.showUsers===true) {
      users=(<div className="row">
       {this.state.users.map((user, index) => {
          return(<User userId={user.userId} userName={user.userName}
            userEmail={user.userEmail} userAge={user.userAge}
           userMobile={user.userMobile} userDescription={user.userDescription} userNameChange={() =>this.changeNames(377,"samuel","samuel@yahoo.com",
              24, "+(355) 356 7632", "samuel is executive" )} userChangeName={this.changeNameHandler} deleteUserRecord={() => this.deleteUserHandler(index)} />  )
        })}
      </div>);
     }else{
              users=( <div className="row">
               <div className="col-sm-12">
                 <div className="card">
                   <div className="card-body">
                     <p className="text-danger">No users Found</p>
                   </div>
                 </div>
               </div>
              </div>);
     }
    return (
      <div className="container wrapper">
        {/*Header*/}
        <Header/>
        <br/>
        {/*MainContainer*/}
        <div className="row">
          {/*LeftPanel*/}
          <LeftPanel/>
          {/*Container*/}
        {/*<Container */}
        <div className="col-sm-6 ">
          <div className="centertxt">
            <div className="row">
            <div className="col-sm-12">
            <h1>User Components</h1>
            <button type="button" className="btn btn-success mb-3 mr-3" onClick={this.toggleUserHandler}>show/ Hide Users</button>
            <button type="button" className="btn btn-primary mb-3" onClick={this.changeNames.bind(this,  973, 'david', 'david@gmail.com', 25, '+(235) 642 3683', 'david is student')}> change name </button>
              </div>
            </div>
            {users}
          </div>
          </div>
        
          {/*RightPanel*/}
          <RightPanel/>
        </div><br/>
        {/*Footer*/}
       <Footer/>
      </div>
    );
  }
}

export default App;
