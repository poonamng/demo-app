import React from "react";

const Card =(props)=>{
return(
    <div style={{backgroundColor:"lightpink", margin:50} }>
    <h1>Hy {props.name}</h1>
<h2> Email:- {props.email}</h2>    
<h3>Address:-{props.other.address}</h3>
</div>
)
}
export default Card;
