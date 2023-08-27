import { Link } from "react-router-dom";
import "./CustomLink.css";

function CustomLink({ children, className, to }) {
  console.log(className);

  return (
    <Link to={to} className={`link ${className || ""}`}>
      {children}
    </Link>
  );
}

export default CustomLink;
