import "./topBar.css" 
import {SearchSharp, Person, Chat,NotificationsSharp } from "@mui/icons-material"

export default function Topbar() {
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <span className="logo">LinkBook</span>
      </div>
      <div className="topBarCenter">
        <div className="searchBar">
          <SearchSharp/>
          <input placeholder="Search" className="searchInput" />

        </div>
      </div>
      <div className="topBarRight">

        <div className="topBarLinks">
          <span className="topBarLink">Home Page</span>
          <span className="topBarLink">Timeline</span>
        </div>
        <div className="topBarIcons">
          <div className="topBarIconItem">
            <Person/>
            <span className="topBarIconCounter">2</span>
          </div>
          <div className="topBarIconItem">
            <Chat/>
            <span className="topBarIconCounter">1</span>
          </div>
          <div className="topBarIconItem">
            <NotificationsSharp/>
            <span className="topBarIconCounter">3</span>
          </div>
        </div>
      </div>
        {/* <img src="/assets/profilePictures/matheus-ferrero.jpg" alt="" className= "topBarImg"/> */}

    </div>
  )
}
