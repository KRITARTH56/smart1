import React from 'react';
import { TiTick } from "react-icons/ti";
function Free(){
    return(
        <>
        <div className="wrapper">
            <div className="title">
                Try Drreamz For Free
                </div>
                <div className="style">
                    <div className="icon">
                     <TiTick className="save"/>
                    <p>Unlock the full Drreamz experience</p>
                    </div>
                    <div className="icon">
                    <TiTick className="save"/>
                      <p> Manage your entire business in one place</p></div>
                      <div className="icon">
                      <TiTick className="save"/><p> Grow your community and collaboration</p></div>
                      <div className="icon">
                      <TiTick className="save"/> <p>Develop & launch new programs
                     </p></div>
                </div>
                <div>
                    <button onPress="">Annual (Best Value) $315 First 14 days free</button>
                    <button className="button" onPress="">Monthly $29 First 7 days free</button>
                </div>
                <div>
                    <p className="kt">After free trial, annual subscription automatically renews each year and monthly
                     subscription automatically renews each month. If you subscribe before your free
                      trial ends, the rest of your free trial period will be forfeited as soon as your
                    purchase is confirmed. Eligible for new users only.
                          Terms & Conditions</p>
                <button onPress="" className="button2">
             Try free and subscribe
               </button>
                </div>
                </div>
            
                </>
    );
}
export default Free;