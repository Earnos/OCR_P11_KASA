import starFill from "../assets/star.svg"
import emptyStar from "../assets/emptyStar.svg"
import PropTypes from "prop-types"


function Rating({rating}) {
    const stars = [1, 2, 3, 4, 5]
 
    return (
        <>
            {stars.map((star, index) => {
                if (index < rating) {
                    return (
                        <img  key={index} src={starFill} alt="note étoile" />
                    )
                }
                return  <img  key={index} src={emptyStar} alt="note étoile" />
            })}
        </>
        )  
} 

Rating.propTypes = {
    rating: PropTypes.string
}

export default Rating