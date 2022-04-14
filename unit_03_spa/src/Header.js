import { Link } from "react-router-dom";

function Header (props) {
    console.log(props.nav)
    return (
        <>
            <ul>
                {props.nav.map(item => <li key = {item.title}><Link to={item.link}>{item.title}</Link></li>)}
            </ul>
        </>
    );
}

export default Header;