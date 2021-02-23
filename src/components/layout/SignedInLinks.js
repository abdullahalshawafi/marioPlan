import { NavLink } from "react-router-dom";

function SignedInLinks() {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create-project">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          AA
        </NavLink>
      </li>
    </ul>
  );
}

export default SignedInLinks;
