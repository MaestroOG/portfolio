import { socialImgs } from "../constants"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-container">
                <div className="flex flex-col justify-center md:items-start items-center">
                    <a href="/">Visit My Blog</a>
                </div>
                <div className="socials">
                    {socialImgs.map(img => (
                        <a key={img.name} href={img.href} className="icon" target="_blank">
                            <img src={img.imgPath} alt="" />
                        </a>
                    ))}
                </div>

                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">&copy; {new Date().getFullYear()} Muneeb Ur Rehman. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer