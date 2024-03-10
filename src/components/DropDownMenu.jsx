import { useState } from 'react'
import PropTypes from 'prop-types'
import upArrow from '../assets/upArrow.svg'
      
    
function DropDownMenu(props) {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    return (
        <div className='dropdown-container dropdown-component-div'>
            <button key={props.index} className="drop-btn" onClick={toggleMenu}>
                <span>{props.title}</span>
                <span style={{
                    transition: 'transform 0.5s ease', 
                    transform: `rotate(${menu ? '180' : '0'}deg)` 
                }}>
                    <img src={upArrow} alt="flèche de description" />
                </span>
            </button>
            <div className={`dropdown-text ${menu ? 'open' : ''}`}>
                <span>{props.children}</span>
            </div>
        </div>
    );
}

DropDownMenu.propTypes = {
    title: PropTypes.string,
    index: PropTypes.arrayOf(PropTypes.string, PropTypes.number)
}


export default DropDownMenu