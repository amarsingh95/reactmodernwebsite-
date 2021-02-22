import React from 'react';

const dform=()=>
{
    const handleSubmit=(event)=>{
        event.preventDefault();
    let usrname=document.querySelector("#username");
    
}
    return (<>
    <div>
        <form onSubmit={handleSubmit}>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",margin:"20px"}}>
            <label for="username">UserName</label>
            <input type="text" id="username"/>
            <label for="fullname">Full Name</label>
            <input type="text" id="fullname"/>
            <label for="emailid">EmailID</label>
            <input type="text" id="emailid"/>
            <input type="submit" id="submit"/>
            </div>
        </form>
    </div>
    </>
    );

    
}

export default dform;