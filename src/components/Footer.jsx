function Footer({isPrivate}) {
    return (
        <footer>
            <p>{isPrivate ? 'Private Footer' : 'Public Footer'}</p>
        </footer>
    )
}

export default Footer;