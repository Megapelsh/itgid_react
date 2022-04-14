import Nav from "../Header/Nav"

function Footer (props) {
    return (
        <>
            <footer>
                <h3>site_name</h3>
                <Nav nav = {props.site.nav}/>
            </footer>
        </>
    )
}

export default Footer