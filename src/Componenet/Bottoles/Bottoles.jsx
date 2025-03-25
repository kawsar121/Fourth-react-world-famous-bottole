import { useEffect } from "react";
import { useState } from "react";
import Bottole from "../Bottole/Bottole";
import './Bottoles.css'
import './lol.css'
const Bottoles = () => {
    const[bottle, setBottole] = useState([]);
    const [cart, setCart] = useState([])
    console.log(bottle)
    useEffect(()=>{
        fetch('bottole.json')
        .then(res=> res.json())
        .then(data=> setBottole(data))
    },[])
    const bottoleCart = (lol) =>{
        const NewCart = [...cart, lol]
        setCart(NewCart)
    }
    return (
        <div>
            <h3>The Famous Bottles Shop</h3>
            
            <div className="box">
            <div className="Bottoles-con">
                {
                    bottle.map(mum => <Bottole  pani={mum} cardAdd={bottoleCart}></Bottole>)
                }
            </div>
            <div>
                <p>Cart :{cart.length}</p>
            {
                cart.map(kok=> <li>{kok.name}</li>)
            }
            <div style={{display:'grid', gap:'5px'}}>
            {
                cart.map(kok=> <img width={'50px'} src={kok.img}></img>)
            }
            </div>
            </div>
            </div>
        </div>
    );
};

export default Bottoles;