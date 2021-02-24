import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

function SignedInLinks({ signOut }) {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create-project">New Project</NavLink>
      </li>
      <li>
        <a href="/signin" onClick={signOut}>
          Log Out
        </a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          AA
        </NavLink>
      </li>
    </ul>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
