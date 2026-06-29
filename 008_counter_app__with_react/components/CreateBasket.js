export default function(props) {
    const {basketName,appleCount} = props;
    return <div className="details">
        <h2><span>{appleCount}</span> Apples</h2>
        <p>{basketName}</p>
    </div>
}