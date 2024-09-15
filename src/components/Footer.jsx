import '../styles/footer.css'

function Footer({isPrivate}) {
    return (
        <footer className="footer">
            <p className="footer-text">{isPrivate ? 'Private Footer' : 'Public Footer'}</p>
        </footer>
    )
}

export default Footer;