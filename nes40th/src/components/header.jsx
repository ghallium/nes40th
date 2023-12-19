import NintendoLogo from "../assets/nintendo-logo.svg.png"

function Header() {
    return (
        <div className="header w-full mobile:bg-nintendored tablet:bg-white">
            <div className="mobile:w-22 bg-nintendored h-full">
                <img src={NintendoLogo}/>
            </div>
            
        </div>
        
    )
}

export default Header