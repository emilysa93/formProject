import React , {useState} from 'react';

function LoginForm({Login , error}) {

    const [ details, setDetails] = useState({name:"", userName:"" , password:""});
    const submitHandler = e =>{
        e.preventDefault();

        Login(details);
    }
    return (
        <form onSubmit={submitHandler}>
   <div className="form-inner">
       <h2>Login (administrator)</h2>
    
       <div className="form-group">
           <label htmlFor="name">Name:</label>
           <input type="text" name="name" id="name"  onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
       </div>
        <div className="form-group">
           <label htmlFor="userName">userName:</label>
           <input type="text" name="userName" id="userName" onChange={e => setDetails({...details, userName: e.target.value})} value={details.userName}/>
       </div>
        <div className="form-group">
           <label htmlFor="password">Password:</label>
           <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
       </div>
        {(error != "") ? (<div className="error">{error}</div>): ""}

       <input type="submit" className="btn" value="LOGIN"/>
   </div>
        </form>
    )
}

export default LoginForm;