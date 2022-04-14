function Nav (props) {
    return (
        <>
            <nav>
                <ul className="main-navigation">
                    {props.nav.map(item => <li key = {item.text}><a href={item.link}>{item.text}</a></li>)}
                </ul>
            </nav>
        </>
    )
}

export default Nav