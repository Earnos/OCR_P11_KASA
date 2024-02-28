import { useState } from 'react'
import PropTypes from 'prop-types'
import bottomArrow from '../assets/bottomArrow.svg'
import upArrow from '../assets/upArrow.svg'
      
    
function DropDownMenu(props) {
    const [menu, setMenu] = useState(false)
    const toggleMenu = () => { setMenu(!menu) } 

    return (
      
            <div className='dropdown-container dropdown-component-div'>
                <button key={props.index} className="drop-btn">
                    <span>{props.title}</span>
                    <span onClick={toggleMenu}><img src={menu === true ? bottomArrow : upArrow} alt="flèche de description" /></span>
                </button>
                {menu === true ? <div className='dropdown-text'><span>{props.children}</span></div> : false}
            </div>
     
    )
}

DropDownMenu.propTypes = {
    title: PropTypes.string,
    index: PropTypes.arrayOf(PropTypes.string, PropTypes.number)
}


export default DropDownMenu