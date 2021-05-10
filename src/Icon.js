import React from 'react';
import { BiTrophy} from "react-icons/bi";
import {GiStairsGoal} from "react-icons/gi";
import {GiPlaneWing} from "react-icons/gi";
function Icon(){
    return(
        <div className="wrapper">
            <div className="title">
            Great, let's get Empowered
            </div>
            <div className="para">
                <p>Discover the different ways you can take your business to the next level.
                </p>
            </div>
            <div className="col">
            <GiStairsGoal className="style"/>
                        <p>Coaching is personal. No matter what your expertise is,this is the place to share it.</p>
                 </div>
                 <div className="col">
                    
                  <BiTrophy  className="style"/>
                    <p>Achieve better results. From introduction to impact, all of Drreamz is at your fingertips.</p>
             </div>
             <div className="col">
                    
                   <GiPlaneWing  className="style"/>
                    <p>A new opportunity. Wherever and whenever you need, you'll always have someone to turn to</p>
             </div>
             <div>
                 <button onPress="">
                     Continue
                 </button>
             </div>
        </div>
    );
}
export default Icon;