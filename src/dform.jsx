import React from 'react';

const dform=()=>
{
    const handleSubmit=(event)=>{
    event.preventDefault();
    let username = document.querySelector('#username');
    let fullname = document.querySelector('#fullname');
    let emailid = document.querySelector('#emailid');

    let data={'username':username.value,'fullname':fullname.value,'emailid':emailid.value};

    fetch("http://localhost:5000/service",{
        method:"POST",
        body:JSON.stringify(data),
        headers:
        {
            'Content-Type':'application/json'
        }
    }).then(data=>data.json())
     .then(resp=>{
         console.log(resp);
         username.value="";
         fullname.value="";
         emailid.value=""; 
        });
}
    return (<>
    <div>
        <form onSubmit={handleSubmit}>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",margin:"20px"}}>
            <label for="username">UserName</label>
            <input type="text" name="username" id="username"/>
            <label for="fullname">Full Name</label>
            <input type="text" name="fullname" id="fullname"/>
            <label for="emailid">EmailID</label>
            <input type="text" name="emailid" id="emailid"/>
            <input type="submit" id="submit"/>
            </div>
        </form>
    </div>
    </>
    );

    
}

export default dform;