

const Img = ({ url = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" }) => {
    return (
        <div>
            {[...Array(6)].map((_, index) => (
                <img key={index} src={url} height={100} width={100} alt={`Image ${index + 1}`} />
            ))}
        </div>
    );
}

export default Img;