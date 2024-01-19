import './ItemListContainerStyle.css';
const { dividerClasses } = require("@mui/material")

const ItemListContainer = ({greeting}) =>  {
    return (
     <div>
        <h1 className = "ItemListStyle" > {greeting} </h1>
     </div>
    )
}

export default ItemListContainer