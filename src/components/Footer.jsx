import footerLogo from "../assets/footerLogo.svg"

function Footer() {
    return (
        <footer className="footer" >
            <img src={footerLogo} alt='Logo entreprise Kasa du bas de page' />
            <p className="footer-rights" >© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}


export default Footer