

const TextComponent = (props) => {
    console.log(props);
    return (
        <h4 style={{ color: props.textColor }}>{props.text}</h4>
    );
};

export default TextComponent;