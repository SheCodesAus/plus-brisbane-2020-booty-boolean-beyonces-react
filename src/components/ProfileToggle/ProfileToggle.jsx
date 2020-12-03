import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./ProfileToggle.css";
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router-dom";

// function ProfileToggle() {
    
//     const token = window.localStorage.getItem("token")
//     const userID = window.localStorage.getItem("userID")

//     // const userLog = () => {
//     //   if (token) {
//     //     return (
//     //         <div className="user-welcome-wrapper">
//     //             <h2>Hi, {username}!</h2>
//     //             <p>It's great to see you.</p>
//     //             <img src="https://icon-library.com/images/b1585ed98b.png" className="down-arrow"/>
//     //         </div>
//     //     )
//     //   }
//     //   return (
//     //       <div className="user-welcome-wrapper">
//     //         <h2>Hi there!</h2>
//     //         <p>Looks like you're not logged in yet.</p>
//     //         <Link to="/login">Login</Link>
//     //         <img src="https://icon-library.com/images/b1585ed98b.png" className="down-arrow" />
//     //   </div>
//     //   )
//     // }



//     return (
//         <div>
//             <div className="button-wrapper">
//                 <Link to="/profile"><button className="toggle-button" id="profile-button">Profile</button></Link>
//                 <Link to="/fav"><button className="toggle-button" id="fav-button">Favourites</button></Link>
//             </div>
            
//         </div>
//     )
    
//    }

// export default ProfileToggle;

function ProfileToggle(props) {

  const [toggleState, setToggleState] = useState("on");
  const history = useHistory();
  const { thisPage } = useParams();

  console.log(toggleState)
  
  function toggle() {   
    setToggleState(toggleState === "off" ? "on" : "off");
    console.log(toggleState)
  }

  const switchPage = () => {
    if (toggleState == "off") {
        return ("/fav")
    }
    return ("/profile")
  };
   
  const swap = switchPage()

//   <div className={`switch ${toggleState}`} onClick={toggle}>  
  return (

      <div>

        <div className="button-wrapper">
            <Link to="/profile"><button disabled={toggleState == "on"} className="toggle-button" onClick={toggle} >Profile</button></Link>
            <Link to="/fav"><button disabled={toggleState == "off"} className="toggle-button" onClick={toggle} >Favourites</button></Link>
        </div>
        
      </div>
  )

}

export default ProfileToggle;