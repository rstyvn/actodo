
function Header(props){

    return(
        <div>
            <h1 className="text-3xl font-medium">Hello {props.name}</h1>
            <p>I will help you manage your activity :)</p>
        </div>
    )
}
export default Header