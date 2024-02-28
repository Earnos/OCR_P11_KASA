import PropTypes  from "prop-types"
import { useFetch } from "../utils/hooks/useFetch"
import Banner from "../components/Banner"
import banner from "../assets/bannerPropos.png"
import DropDownMenu from "../components/DropDownMenu"

function Apropos() {
    const { data, isLoading, error } = useFetch("data/apropos.json")
    
    if (isLoading) return <div className="spinner-container" ><div className="spinonediv-1"></div></div>
    if (error) console.log(error)
    
    return (
        <main className="propos-container">
            <section id="propos-banner" >
                <Banner banner={banner} />
            </section>
            <section className="dropdown-apropos-container">
                {
                data.map((item, index) => (
                    <DropDownMenu key={"drop" + index} title={item?.title} >
                        {item.content}
                    </DropDownMenu>
                ))
                }
            </section>
        </main>
        
    )
}

Apropos.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object.isRequired),
    title: PropTypes.string,
    content: PropTypes.string
}


export default Apropos