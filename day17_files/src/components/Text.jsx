const Contain = (props) => {
    return(
        <div className="main">
                <div className="title">{props.title}</div><br />
                <div className="subtitle">you have consumed {props.subtitle} cals today</div>
        </div>
    );
}

export default Contain;