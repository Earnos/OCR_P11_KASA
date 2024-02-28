import { Link } from "react-router-dom"
import PropTypes from 'prop-types'


function Card({cover, title, id}) {
    return (
        <Link to= {{pathname: `/logement/${id}`}} className="card-link">
            <article className="card" >
                <img src={cover} alt="Logement" className="card-img"/>
                <span className="card-title"><p>{title}</p></span>
            </article>
        </Link>
    )
}

Card.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }


export default Card