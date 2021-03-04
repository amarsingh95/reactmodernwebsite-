import React,{useState} from 'react';
import InputElement from './inputelement';

const Dynamic=()=>{

    let nameObj={username:"",fullname:"",email:""};
    const [user,setUser]=useState([nameObj]);
  
    function addMoreitem(e)
    {
    e.preventDefault();
    setUser([...user,nameObj]);
    }

    function getformData(e,i)
    {
        const updatedUser=user.map((user,index)=>
        (
            i==index?Object.assign(user,{[e.target.name]:e.target.value}):user
        ));
        setUser(updatedUser);   
        console.log(updatedUser);
    }

    function handleSubmit(e)
    {
        let data={username:"Amar"};
        e.preventDefault();
        fetch("http://localhost:5000/dynamicdata",{
        method:"POST",
        body:JSON.stringify(user),
        headers:{
            'Content-Type':'application/json'
        }
        }).then(data=>data.json())
        .then(resp=>console.log(resp));   

    }

    function handleDelete(e,i)
    {
       let filterUser=[...user];
       filterUser.splice(i,1);
       setUser(filterUser); 
       console.log(user);
    }

return (<>
<div>
    <form onSubmit={e=>handleSubmit(e)}>
    {user.map((user,i)=>(
        
        <div key={i}>
        <input type="text" name="fullname" onChange={e=>getformData(e,i)} value={user.fullname}  placeholder="FULLNAME" key={`fullname${i}`} />
        <input type="text" name="username" onChange={e=>getformData(e,i)} value={user.username}  placeholder="USERNAME" key={`username${i}`} />
        <input type="text" name="email" onChange={e=>getformData(e,i)} value={user.email}  placeholder="EMAIL" key={`email${i}`} />
        <button onClick={e=>handleDelete(e,i)}>Delete</button>
        </div>
        
    ))}
    <input className="btn" type="submit" value="Submit"/>
    <button className="btn" onClick={(e)=>{addMoreitem(e)}}>Add More</button>
    </form>
</div>
</>);
}

export default Dynamic;