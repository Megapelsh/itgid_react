import { Link } from "react-router-dom";

function Category (props) {
    return (
        <>
            <h1>
                Category
            </h1>
            <Link to="/cat">Назад</Link>
            <ul>
                {props.nav.map(item => <li key = {item.title}><Link to={item.link}>{item.title}</Link></li>)}
            </ul>
        </>
    );
}

export default Category;