import React from "react";
import logo from '../asset/img/sign_logo.png'
import GoDownTable from './goDownTable'
const SignInPage =() =>{
    return(
        <div className="largeSceen">
            <div className="mediamAScreen">
                <div className="imageComponent" style={{width:"18%",height:"20%",margin:"auto"}}>

                    <img src ={logo} style={{width:"60%",height:"10%"}}></img>

                </div>
                <div className="formclass" style={{width:"50%",border:"2px solid black",margin:"auto"}}>
                    <GoDownTable/>
                </div>
            </div>
        </div>
    )

}

export default SignInPage