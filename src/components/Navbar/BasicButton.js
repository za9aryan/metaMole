import * as React from 'react';
import './style.css'
// const style = {
//     height: "65px",
//     width: "130px",
//     borderRadius: "5px",
//     background: "#70707000",
//     color: "white",
//     fontSize: "20px"
// }



export default function BasicButton(props) {
return <button onClick={() => props.handleClick(props.path)} class="button-61" role="button">{props.name}</button>
}