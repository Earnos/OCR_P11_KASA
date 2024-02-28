import PropTypes from 'prop-types'
import { useState } from 'react'
import leftArrow from '../assets/leftArrow.svg'
import rightArrow from '../assets/rightArrow.svg'



function Caroussel({pictures}) {
    const [index, setIndex] = useState(0)
    const length = pictures.length

    function next() {
    const newIndex = index + 1
        setIndex(newIndex >= length ? 0 : newIndex)
    }

    function previous() {
        const newIndex = index - 1
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    } 
    if (pictures.length === 1) {
        return (
            <div className="logement-caroussel" >
                <img src={pictures[index]} alt="logement caroussel" className="logement-pictures" />
            </div> 
        )
    } 
        return (
            <div className="logement-caroussel" >
                <img src={pictures[index]} alt="logement caroussel" className="logement-pictures" />
                <button onClick={previous}  className="caroussel-btn caroussel-btn1" type="button"><img src={leftArrow} alt="" /></button>
                <button  onClick={next}   className="caroussel-btn caroussel-btn2" type="button"><img src={rightArrow} alt="" /></button>
                <span className='length-counter' ><p className='img-length-display' >{index + 1}/{pictures.length}</p></span>
            </div>
        )
}




Caroussel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string,
}

export default Caroussel