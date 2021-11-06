import React , {useState} from 'react';
import LoginForm from './componant/loginForm'


function App() {
  const adminUser ={
    userName: "admin",
    password: "admin111"

  }

  const [user , setUser] = useState({name: "", userName:""});
  const [error , setError] = useState("");


  const Login = details =>{
    if(details.userName === adminUser.userName && details.password === adminUser.password){
      console.log("Logged in")
      setUser({
        name: details.name,
        userName:details.userName
        
      })
    }else{
      
      setError("user name or password is incorrect")
    }

  }
  const Loguot = () =>{
    setUser({
      name:"",
      userName:""
    })

  }
  return (
    <div className="App">
      {(user.userName !="") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Loguot} className="button"> Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
