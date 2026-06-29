function Button(props) {
    const {btnUrl} = props;
    return (
        <button><img src={btnUrl} alt="button" /></button>
    )
}
export default Button;