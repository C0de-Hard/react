function Button({btnUrl,onClick}) {
    return (
        <button><img src={btnUrl} alt="button" onClick={onClick}/></button>
    )
}
export default Button;