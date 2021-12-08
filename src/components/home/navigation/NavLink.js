import React from "react";
import { Link } from "react-router-dom";

function NavLink({ to, className, active, title }) {
  const [classnames, setClassnames] = React.useState(className);
  function addActiveClass() {
    setClassnames((prevState) => {
      return prevState + " active-link";
    });
  }

  return (
    <Link to={to} className={classnames} onClick={addActiveClass}>
      {title}
    </Link>
  );
}

export default NavLink;
