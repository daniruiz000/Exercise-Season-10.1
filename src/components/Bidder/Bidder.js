import './Bidder.css';

const Bidder = ({name, handleClick})=>{
    return(
        <button onClick = {handleClick} className = 'bidder__button'>{name} quiere pujar 5 €</button>
    )
}

export default Bidder;