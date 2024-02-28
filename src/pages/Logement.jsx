import { useParams } from "react-router-dom"
import Caroussel from "../components/Caroussel"
import PropTypes  from "prop-types"
import { useFetch } from "../utils/hooks/useFetch"
import Rating from "../components/Rating"
import Tags from "../components/Tags"
import DropDownMenu from "../components/DropDownMenu"
import Error from "../components/Error"

function Logement() {
    const { id } = useParams()
    const { data, isLoading, error } = useFetch("../../data/data.json")
    
    if (isLoading) return <div className="spinner-container" ><div className="spinonediv-1"></div></div>
    
    if (error) console.log(error)
    
    const logement = data.find(element => element.id === id)

    if (!logement) {
        return <Error />
    }

    return (
        <main className="logement-main" >
            <section className="logement-container">
                <Caroussel
                pictures={logement.pictures}
                />
            </section>
            <section className="logement-infos-container">
                <article className="logement-info1" >
                    <h1 className="logement-info1-title" >{logement.title}</h1>
                    <address className="logement-info1-location" >{logement.location}</address>
                    
                    <Tags tags={logement.tags} />
                    
                </article>
                <article className="logement-info2">
                    <section className="logement-info2-profil">
                        <p className="logement-info2-name" >{logement.host.name}</p>
                        <img src={logement.host.picture} alt="profil" className="logement-info2-profil-image"/>
                    </section>
                    <section className="logement-info2-stars">
                        <Rating rating={logement.rating} />
                    </section>
                </article>
            </section>
            <section className="drop-container-btn" >
                <DropDownMenu title='Description' >{logement.description}</DropDownMenu>
                <DropDownMenu title='Equipements'>
                    <ul className="dropdown-text-liste" >
                        {logement.equipments.map((item, index) => (<li key={index} >{item}</li>))}
                    </ul>
                </DropDownMenu>
            </section>
        </main>    
    )
}


Logement.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string.isRequired),
    id: PropTypes.arrayOf(PropTypes.string.isRequired, PropTypes.number.isRequired),
    equipments: PropTypes.arrayOf(PropTypes.string.isRequired),
}

export default Logement