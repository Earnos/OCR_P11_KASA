import PropTypes from "prop-types"

function Tags({tags}) { 
        return (
        <div className="tags">
            { tags.map((tag, index) =>(
            <span  key={index} className="logement-info1-tags" >{tag}</span>
            ))}
        </div>
    )     
}

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string)
}

export default Tags