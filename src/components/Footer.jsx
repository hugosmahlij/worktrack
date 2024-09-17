import '../styles/footer.css'

function Footer ({ isPrivate }) {
    return (
        <footer className="footer">
            {isPrivate ? (
                <>
                    <div className='footer-center'>
                        <p className='footer-text'>Private Footer</p>
                    </div>
                    <p className='footer-text'>Hugo Smahlij - 2024</p>
                    <a href='https://github.com/hugosmahlij'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='github-link'>
                        <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
                            alt="GitHub Icon"
                            className="github-icon" />
                    </a>
                </>
            ) : (
                <p className='footer-text'>Public Footer</p>
            )}
        </footer>
    )
}

export default Footer;