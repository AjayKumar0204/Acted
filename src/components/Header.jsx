function Header(props)
{
    return(
        <div>
            <h1 className="text-3xl font-medium">Hello {props.name}</h1>
            <p>i help you manage your activites :)</p>
        </div>
    )
}

export default Header