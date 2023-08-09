import '@fortawesome/fontawesome-svg-core/styles.css';
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="p-2 rounded-t-[0.5rem] bg-gray-400">
      <FontAwesomeIcon icon={faCircle} style={{ color: "#ff6057", paddingLeft: "8px" }} />
      <FontAwesomeIcon icon={faCircle} style={{ color: "#ffbd2e", paddingLeft: "8px" }} />
      <FontAwesomeIcon icon={faCircle} style={{ color: "#27c93f", paddingLeft: "8px" }} />
    </div>
  )
}

export default Header;
