import { Link } from "react-router-dom";
import News from "../../components/news.jsx";
import GamesSlider from "../../components/gamesSlider.jsx";
import NesVector from '../../assets/nes-vector.webp';
import NesLogo from '../../assets/nes-logo.svg';
import NesConsole from '../../assets/nes-console.png';
import PlayingPower from '../../assets/playingpower.svg';
import SpriteMario from '../../assets/mario.webp';
import SpriteLuigi from '../../assets/luigi.webp';
import SpriteKirby from '../../assets/kirby.webp';
import SpriteNinja from '../../assets/ng.webp';
import SpriteMakaimura from '../../assets/makaimura.webp';
import SpriteMegaman from '../../assets/megaman.webp';
import SpritePit from '../../assets/kidicarus.webp';
import SpriteLink from '../../assets/link.webp';
import SpriteDK from '../../assets/donkey.webp';
import SpriteSamus from '../../assets/samus.webp';
import SpriteBike from '../../assets/excitebike.webp';
import SpriteGradius from '../../assets/gradius.webp';
import SpriteContra from '../../assets/contra.png';
import SpritePacMan from '../../assets/pacman.webp';
import SpriteBlackMage from '../../assets/blackmage.webp';
import SpriteBomberman from '../../assets/bomberman.webp';
import SpriteDuckHuntDog from '../../assets/duckhuntdog.png';


function Home() {
    return (
        <div className="homepageblock bg-gradient-to-t from-black via-purple-900 to-black py-10">
            <div className="md:bg-screenshots bg-center">
                <div className="sprites-gallery md:bg-[url(/screenshots.png')] relative mb-20">
                    <img src={NesVector} alt="NES console illustration" className="mobile:w-32 md:w-40 xl:w-56 m-auto mb-5"/>
                    <div className="py-5">
                        <img src={NesLogo} alt="logo Nintendo Entertainment System" className="mobile:w-40 md:w-56 xl:w-80 m-auto mb-5"/>
                    </div>
                
                    <h3 className="mobile:w-2/3 xl:w-1/2 text-center text-white mobile:text-xl md:text-3xl m-auto mb-5">40th Anniversary</h3>
                    <img src={PlayingPower} alt="Now you're playing with power" className="mobile:w-11/12 xl:w-1/3 m-auto md:py-3"/>
                    <img src={SpriteMario} alt="Mario" className="mobile:w-16 xl:w-20 absolute left-4 top-20"/>
                    <img src={SpriteLuigi} alt="Luigi" className="mobile:w-8 xl:w-12 absolute right-4 mobile:bottom-8 md:bottom-12 xl:bottom-6"/>
                    <img src={SpriteKirby} alt="Kirby" className="mobile:w-12 xl:w-16 absolute top-1 left-2"/>
                    <img src={SpriteNinja} alt="Ninja" className="mobile:w-6 xl:w-10 absolute bottom-20 left-0"/>
                    <img src={SpriteMakaimura} alt="Red Arreemer" className="mobile:w-12 xl:w-14 absolute top-3 right-6"/>
                    <img src={SpriteMegaman} alt="Megaman" className="mobile:w-14 xl:w-16 absolute top-20 right-10"/>
                    <img src={SpritePit} alt="Pit" className="mobile:w-8 xl:w-12 absolute top-8 mobile:left-20 xl:left-40"/>
                    <img src={SpriteLink} alt="Link" className="mobile:w-16 xl:w-20 absolute top-40 right-10"/>
                    <img src={SpriteDK} alt="Donkey Kong" className="mobile:w-20 absolute -bottom-12 left-3"/>
                    <img src={SpriteSamus} alt="Samus" className="mobile:w-10 xl:w-14 absolute top-40 mobile:left-12 md:left-20 xl:left-40 py-6"/>
                    <img src={SpriteBike} alt="Excite Bike" className="mobile:w-10 xl:w-12 absolute top-60 left-10 py-4"/>
                    <img src={SpriteGradius} alt="Gradius" className="mobile:w-16 absolute mobile:bottom-40 xl:bottom-60 right-4"/>
                    <img src={SpriteContra} alt="Contra" className="mobile:w-10 xl:w-12 absolute mobile:bottom-20 mobile:right-12 xl:bottom-40 xl:right-20"/>
                    <img src={SpritePacMan} alt="Pac-Man ghost" className="mobile:w-10 xl:w-14 absolute mobile:hidden md:block md:top-20 md:right-40"/>
                    <img src={SpriteBlackMage} alt="Black Mage" className="mobile:w-10 xl:w-14 absolute mobile:hidden md:block md:top-80 md:left-20"/>
                    <img src={SpriteBomberman} alt="Bomberman" className="mobile:w-8 xl:w-10 absolute mobile:hidden md:block md:top-80 md:right-40 md:py-4"/>
                    <img src={SpriteDuckHuntDog} alt="Duck Hunt dog" className="mobile:w-10 xl:w-12 absolute mobile:hidden md:block md:top-60 md:right-10 py-4"/>
                </div>
            </div>
            <div className="home-articles">
                <News />
            </div>
            <div className="home-games-slider pb-2">
                <GamesSlider />
                <Link to="/software">
                    <div className="readmore border-2 border-white m-auto py-2 mt-2 rounded-md w-36">
                        <p className="seemore text-white text-xxs text-center">SOFTWARE LIST</p>
                    </div>
                </Link> 
            </div>
            <div className="home-hardware-section w-full bg-stars py-3">
                <div className="flex justify-between mb-2">
                    <div>
                        <h1 className="text-white font-bold mx-3 mb-3 md:text-2xl">HARDWARE INFO</h1>
                        <img src={NesLogo} className="mx-3 mobile:w-32 md:w-64" alt="Logo Nintendo Entertainment System"/>
                    </div>
                    <div>
                        <img src={NesConsole} className="mobile:w-44 md:w-80" alt="Console NES"/>
                    </div>
                </div>
                <Link to="/hardware">
                    <div className="readmore border-2 border-white m-auto py-2 rounded-md w-28">
                        <p className="seemore text-white text-center text-xxs">SEE MORE</p>
                    </div>
                </Link>    
            </div>
        </div>
    )
}

export default Home