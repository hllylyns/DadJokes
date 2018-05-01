//renders header for both pages
import React from 'react';

export default function Header(props){
    return(
        <div className="header" >
            <h1>Dad Jokes</h1>
            <img src={props.myHeader} alt="harry legs and socks in sandals"/>
        </div>
    )
}