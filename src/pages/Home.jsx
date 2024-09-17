import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import '../styles/home.css'

function Home () {

    const { currentUser } = useContext(AuthContext);

    const handleButtonClick = () => {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }

    const gifs = ["https://media.giphy.com/media/pUVOeIagS1rrqsYQJe/giphy.gif?cid=790b7611z2hw4vp2pl2rtjz8dlg0yvvog1mlw230yay9vbt5&ep=v1_gifs_search&rid=giphy.gif&ct=g", "https://media.giphy.com/media/scZPhLqaVOM1qG4lT9/giphy.gif?cid=790b7611z2hw4vp2pl2rtjz8dlg0yvvog1mlw230yay9vbt5&ep=v1_gifs_search&rid=giphy.gif&ct=g", "https://media.giphy.com/media/CuuSHzuc0O166MRfjt/giphy.gif?cid=790b7611z2hw4vp2pl2rtjz8dlg0yvvog1mlw230yay9vbt5&ep=v1_gifs_search&rid=giphy.gif&ct=g", "https://media.giphy.com/media/OVtqvymKkkcTu/giphy.gif?cid=ecf05e47s4xf58gy05kll0csxl5en22o3thvg1lsobpr31qc&ep=v1_gifs_search&rid=giphy.gif&ct=g", "https://media.giphy.com/media/elrFAUtV7ZOH7TSPhF/giphy.gif?cid=ecf05e477tt61axxjuwm9kg5jd1hkb65o6p1a4hz5v9p6ane&ep=v1_gifs_search&rid=giphy.gif&ct=g", "https://media.giphy.com/media/xTiN0CNHgoRf1Ha7CM/giphy.gif?cid=82a1493bupgbwkc0sh6727tav0f8iu6ogqyp3od7nq8p58z9&ep=v1_gifs_trending&rid=giphy.gif&ct=g", "https://media.giphy.com/media/UO5elnTqo4vSg/giphy.gif?cid=82a1493bu9aka4d96kwfeyqt7jy0nljj1lxdapyfs94up50b&ep=v1_gifs_trending&rid=giphy.gif&ct=g"]

    const randomGif = gifs[Math.floor(Math.random() * gifs.length)]

    return (
        <div className="home-container">
            <div className="welcome-container">
                <h1>¡Hola, {currentUser}!</h1>
                <p> Bienvenido a la aplicación.</p>
            </div>
            <div className="rick-container">
                <img src={randomGif} alt="Random GIF" />
                <button className="dont-touch-button" onClick={handleButtonClick}>NO TOCAR</button>
            </div>
        </div>
    )
}

export default Home;