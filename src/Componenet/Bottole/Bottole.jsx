import'./Bottole.css'
const Bottole = ({pani, cardAdd}) => {
    const{img, name, price} = pani
    return (
        <div className="bottole">
            <h2>Name: {name}</h2>
            <img src={img} alt="" srcset="" />
            <p>Price: €{price}</p>
            <button onClick={() => cardAdd(pani)}>Purchase</button>
        </div>
    );
};

export default Bottole;