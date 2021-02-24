import React,{useState,useEffect} from 'react';
import InputElement from './inputelement';

const Dynamic=()=>{

    let nameObj={username:"",fullname:"",email:""};
    const [user,setUser]=useState([nameObj]);
    useEffect(()=>{
        //console.log(user);
    })

    function addMoreitem()
    {
    setUser([...user,nameObj]);
    }

    function getformData(e,i)
    {
        const updatedUser=user.map((user,index)=>
        (
            i==index?Object.assign(user,{[e.target.name]:e.target.value}):user
        ));
        setUser(updatedUser);   
        
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
        <>
        <input type="text" name="fullname" onChange={e=>getformData(e,i)} value={user.fullname} key={`fullname${i}`} placeholder="FULLNAME" />
        <input type="text" name="username" onChange={e=>getformData(e,i)} value={user.username} key={`username${i}`} placeholder="USERNAME" />
        <input type="text" name="email" onChange={e=>getformData(e,i)} value={user.email} key={`email${i}`} placeholder="EMAIL" />
        <button onClick={e=>handleDelete(e,i)}>Delete</button>
        <br/>
        </>
    ))}
    <input className="btn" type="submit" value="Submit"/>
    <button className="btn" onClick={addMoreitem}>Add More</button>
    </form>
</div>
</>);
}

export default Dynamic;