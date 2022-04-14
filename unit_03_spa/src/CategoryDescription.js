import { useParams, Link } from "react-router-dom";

function CategoryDescription () {
    let params = useParams()
    console.log(params.catName)
    return (
        <>
            <h1>
                Category: {params.catName}
            </h1>
            <Link to="/cat">Назад</Link>
        </>
    );
}

export default CategoryDescription;