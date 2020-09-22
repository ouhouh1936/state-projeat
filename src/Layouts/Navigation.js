import React from "react";
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/jyr">정예림 화면</NavLink>
          </li>
          <li>
            <NavLink to="/bhj">방효진 화면</NavLink>
          </li>
          <li>
            <NavLink to="/kkm">김경민 화면</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
