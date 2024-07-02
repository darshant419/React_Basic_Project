
// eslint-disable-next-line react/prop-types
function Tabbutton({ children, onSelect, isSelected }) {


    return (
        <li>
            <button className={isSelected ? "active" : "undefined"} onClick={onSelect}>{children}</button>
        </li>
    );
}




export default Tabbutton;