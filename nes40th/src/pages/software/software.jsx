import GamesData from "../../data/gamesdata.json";
import { Link } from "react-router-dom";
import SoftwareCarousel from "../../components/softwareCarousel";


function Software() {

    const games1985 = GamesData.filter(item => item.releaseYear === "1985");
    const games1986 = GamesData.filter(item => item.releaseYear === "1986");
    const games1987 = GamesData.filter(item => item.releaseYear === "1987");
    const games1988 = GamesData.filter(item => item.releaseYear === "1988");
    const games1989 = GamesData.filter(item => item.releaseYear === "1989");
    const games1990 = GamesData.filter(item => item.releaseYear === "1990");
    const games9194 = GamesData.filter(item => ["1991", "1992", "1993", "1994"].includes(item.releaseYear));


    return (
        <div className="software-pageblock bg-gradient-to-t from-black via-purple-900 to-black">
            <div className="boxarts-carousel relative mb-3">
                <SoftwareCarousel />
                <h2 className="text-white mobile:text-2xl xl:text-5xl font-black uppercase absolute inset-0 mobile:top-10 xl:top-20 text-center">All the classics</h2>
            </div>
            <div className="games-gallery">
                <h3 className="text-white text-3xl mobile:mx-3 xl:mx-20 mb-3 py-2">1985</h3>
                <div className="1985-games mobile:flex mobile:flex-col mobile:justify-center mobile:items-center 
                                           tablet:grid tablet:grid-cols-2 tablet:w-11/12 tablet:mx-auto gap-2
                                           xl: grid xl:grid-cols-3 xl:w-11/12 xl:mx-auto relative mb-4">
                    {games1985.map((game) => (
                        <Link className="w-11/12" key={game.id} to={`/game/${game.id}`}>
                            <div className="game-card  bg-darkdark/50 rounded-md flex flex-wrap mobile:justify-between xl:justify-around p-3">
                                <div className="game-card-image mb-2 w-1/3">
                                    <img src={game.boxart} className="mobile:max-w-[90px] xl:max-w-[100px]"/>
                                </div>
                                <div className="game-card-info w-2/3">
                                    <p className="w-9/12 mobile:text-xl tablet:text-2xl xl:text-3xl text-white font-black uppercase italic mb-2">{game.title}</p>
                                    <p className="w-7/12 text-white text-sm py-1">{game.publisher}</p>
                                    <p className="w-7/12 text-white text-sm py-1">{game.developer}</p>
                                    <p className="w-7/12 text-white text-sm py-1 mb-2">{game.genre}</p>
                                    
                                </div>
                                <div className="readmore w-4/12 bg-gray-50 text-xxs uppercase p-1 rounded-sm"><span className="text-darkdark">Read More</span></div>
                            </div>
                        </Link>
                    ))}
                    <div className="1985-mascot mb-4 py-2 absolute -bottom-10 mobile:right-2"><img src="/mario.webp" alt="mario sprite" className="mobile:w-16"/></div>
                </div>
                
                <h3 className="text-white text-3xl mobile:mx-3 xl:mx-20 mb-3 py-2">1986</h3>
                <div className="1986-games mobile:flex mobile:flex-col mobile:justify-center mobile:items-center 
                                           tablet:grid tablet:grid-cols-2 tablet:w-11/12 tablet:mx-auto gap-2
                                           xl: grid xl:grid-cols-3 xl:w-11/12 xl:mx-auto relative mb-4">
                    {games1986.map((game) => (
                        
                            <div className="game-card w-11/12 bg-darkdark/50 rounded-md flex flex-wrap mobile:justify-between xl:justify-around p-3">
                                <div className="game-card-image mb-2 w-1/3">
                                    <img src={game.boxart} className="mobile:max-w-[90px] xl:max-w-[100px]"/>
                                </div>
                                <div className="game-card-info w-2/3">
                                    <p className="w-11/12 mobile:text-xl xl:text-2xl text-white font-black uppercase italic mb-2">{game.title}</p>
                                    <p className="text-white text-sm py-1">{game.publisher}</p>
                                    <p className="text-white text-sm py-1">{game.developer}</p>
                                    <p className="text-white text-sm py-1">{game.genre}</p>
                                </div>
                                
                            </div>
                        
                    ))}
                    <div className="1986-mascot mb-8 py-2 absolute -bottom-10 mobile:right-2 md:right-80 xl:right-4"><img src="/donkey.webp" alt="donkey kong sprite" className="mobile:w-24"/></div>
                </div>
                <h3 className="text-white text-3xl mobile:mx-3 xl:mx-20 mb-3 py-2">1987</h3>
                <div className="1987-games mobile:flex mobile:flex-col mobile:justify-center mobile:items-center 
                                           tablet:grid tablet:grid-cols-2 tablet:w-11/12 tablet:mx-auto gap-2
                                           xl: grid xl:grid-cols-3 xl:w-11/12 xl:mx-auto relative mb-4">
                    {games1987.map((game) => (
                        
                            <div className="game-card w-11/12 bg-darkdark/50 rounded-md flex flex-wrap mobile:justify-between xl:justify-around p-3">
                                <div className="game-card-image mb-2 w-1/3">
                                    <img src={game.boxart} className="mobile:max-w-[90px] xl:max-w-[100px]"/>
                                </div>
                                <div className="game-card-info w-2/3">
                                    <p className="w-11/12 mobile:text-xl xl:text-2xl text-white font-black uppercase italic mb-2">{game.title}</p>
                                    <p className="text-white text-sm py-1">{game.publisher}</p>
                                    <p className="text-white text-sm py-1">{game.developer}</p>
                                    <p className="text-white text-sm py-1">{game.genre}</p>
                                </div>
                                
                            </div>
                        
                    ))}
                    <div className="1987-mascot mb-8 py-4 absolute mobile:-bottom-10 mobile:right-2"><img src="/link.webp" alt="link sprite" className="mobile:w-14"/></div>
                </div>
                <h3 className="text-white text-3xl mobile:mx-3 xl:mx-20 mb-3 py-2">1988</h3>
                <div className="1988-games mobile:flex mobile:flex-col mobile:justify-center mobile:items-center 
                                           tablet:grid tablet:grid-cols-2 tablet:w-11/12 tablet:mx-auto gap-2
                                           xl: grid xl:grid-cols-3 xl:w-11/12 xl:mx-auto relative mb-4">
                    {games1988.map((game) => (
                        
                            <div className="game-card w-11/12 bg-darkdark/50 rounded-md flex flex-wrap mobile:justify-between xl:justify-around p-3">
                                <div className="game-card-image mb-2 w-1/3">
                                    <img src={game.boxart} className="mobile:max-w-[90px] xl:max-w-[100px]"/>
                                </div>
                                <div className="game-card-info w-2/3">
                                    <p className="w-11/12 mobile:text-xl xl:text-2xl text-white font-black uppercase italic mb-2">{game.title}</p>
                                    <p className="text-white text-sm py-1">{game.publisher}</p>
                                    <p className="text-white text-sm py-1">{game.developer}</p>
                                    <p className="text-white text-sm py-1">{game.genre}</p>
                                </div>
                                
                            </div>
                        
                    ))}
                    <div className="1988-mascot mb-8 py-4 absolute -bottom-10 right-2"><img src="/castlevania.webp" alt="simon sprite" className="mobile:w-20"/></div>
                </div>
                <h3 className="text-white text-3xl mobile:mx-3 xl:mx-20 mb-3 py-2">1989</h3>
                <div className="1989-games mobile:flex mobile:flex-col mobile:justify-center mobile:items-center 
                                           tablet:grid tablet:grid-cols-2 tablet:w-11/12 tablet:mx-auto gap-2
                                           xl: grid xl:grid-cols-3 xl:w-11/12 xl:mx-auto relative mb-4">
                    {games1989.map((game) => (
                        
                            <div className="game-card w-11/12 bg-darkdark/50 rounded-md flex flex-wrap mobile:justify-between xl:justify-around p-3">
                                <div className="game-card-image mb-2 w-1/3">
                                    <img src={game.boxart} className="mobile:max-w-[90px] xl:max-w-[100px]"/>
                                </div>
                                <div className="game-card-info w-2/3">
                                    <p className="w-11/12 mobile:text-xl xl:text-2xl text-white font-black uppercase italic mb-2">{game.title}</p>
                                    <p className="text-white text-sm py-1">{game.publisher}</p>
                                    <p className="text-white text-sm py-1">{game.developer}</p>
                                    <p className="text-white text-sm py-1">{game.genre}</p>
                                </div>
                                
                            </div>
                        
                    ))}
                    <div className="1989-mascot mb-8 py-4 absolute -bottom-10 right-2"><img src="/megaman.webp" alt="megaman sprite" className="mobile:w-20"/></div>
                </div>
                <h3 className="text-white text-3xl mobile:mx-3 xl:mx-20 mb-3 py-2">1990</h3>
                <div className="1990-games mobile:flex mobile:flex-col mobile:justify-center mobile:items-center 
                                           tablet:grid tablet:grid-cols-2 tablet:w-11/12 tablet:mx-auto gap-2
                                           xl: grid xl:grid-cols-3 xl:w-11/12 xl:mx-auto relative mb-4">
                    {games1990.map((game) => (
                        
                            <div className="game-card w-11/12 bg-darkdark/50 rounded-md flex flex-wrap mobile:justify-between xl:justify-around p-3">
                                <div className="game-card-image mb-2 w-1/3">
                                    <img src={game.boxart} className="mobile:max-w-[90px] xl:max-w-[100px]"/>
                                </div>
                                <div className="game-card-info w-2/3">
                                    <p className="w-11/12 mobile:text-xl xl:text-2xl text-white font-black uppercase italic mb-2">{game.title}</p>
                                    <p className="text-white text-sm py-1">{game.publisher}</p>
                                    <p className="text-white text-sm py-1">{game.developer}</p>
                                    <p className="text-white text-sm py-1">{game.genre}</p>
                                </div>
                                
                            </div>
                        
                    ))}
                    <div className="1990-mascot mb-8 py-4 absolute -bottom-10 right-2"><img src="/mario3.png" alt="mario sprite" className="mobile:w-20"/></div>
                </div>
                <h3 className="text-white text-3xl mobile:mx-3 xl:mx-20 mb-3 py-2">1991 - 1994</h3>
                <div className="9194-games mobile:flex mobile:flex-col mobile:justify-center mobile:items-center 
                                           tablet:grid tablet:grid-cols-2 tablet:w-11/12 tablet:mx-auto gap-2
                                           xl: grid xl:grid-cols-3 xl:w-11/12 xl:mx-auto relative mb-4">
                    {games9194.map((game) => (
                        
                            <div className="game-card w-11/12 bg-darkdark/50 rounded-md flex flex-wrap mobile:justify-between xl:justify-around p-3">
                                <div className="game-card-image mb-2 w-1/3">
                                    <img src={game.boxart} className="mobile:max-w-[90px] xl:max-w-[100px]"/>
                                </div>
                                <div className="game-card-info w-2/3">
                                    <p className="w-11/12 mobile:text-xl xl:text-2xl text-white font-black uppercase italic mb-2">{game.title}</p>
                                    <p className="text-white text-sm py-1">{game.publisher}</p>
                                    <p className="text-white text-sm py-1">{game.developer}</p>
                                    <p className="text-white text-sm py-1">{game.genre}</p>
                                </div>
                                
                            </div>
                        
                    ))}
                    <div className="9194-mascot mb-8 py-4 absolute -bottom-10 right-2"><img src="/kirby.webp" alt="kirby sprite" className="mobile:w-20"/></div>
                    
                </div>
            </div>
            
        </div>
    )

}

export default Software