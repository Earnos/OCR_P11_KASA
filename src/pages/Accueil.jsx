import React from "react"
import { useFetch } from "../utils/hooks/useFetch"
import Card from "../components/Card"
import Banner from '../components/Banner'
import PropTypes from "prop-types"
import banner from '../assets/banner.png'

function Accueil() {
    const { data, isLoading, error } = useFetch("data/data.json")

        if (isLoading) return <div className="spinner-container" ><div className="spinonediv-1"></div></div>

        if (error) console.log(error)

        return (
            <main className="main-accueil" >
                <section className="banner-accueil-mobile" >
                    <Banner banner={banner} text="Chez vous, partout et ailleurs" />
                </section>
                <section className="accueil-container">
                {data.map(items => (
                    <Card
                    key={items?.id}
                    id={items?.id}
                    cover={items?.cover}
                    title={items?.title}
                    />
                ))}
               </section>
            </main>
    )
}

Accueil.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string,
}

export default Accueil

