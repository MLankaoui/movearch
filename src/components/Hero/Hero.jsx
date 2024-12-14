import { useTypewriter, Cursor } from 'react-simple-typewriter'
import './Hero.css'
import Header from '../Header/Header';


const Hero = () => {

    const [text] = useTypewriter({
        words: ['Discover Your Next Favorite Movie', 'Search', 'Explore', 'Watch'],
        loop: true,
    });
    return (
        <>
            <Header />
            <div className="hero-container">
                <div className="hero-text">
                    <h1>Movearch</h1>
                    <p> {text} <Cursor/> </p>
                    
                </div>

                <div className="hero-button">
                    <button className="get-started">
                        Get Started
                    </button>
                </div>
            </div>
        </>
    )
}

export default Hero
