import BluePic from "../assests/Blue Rectangle.png";
import heroPic from "../assests/hero-Rectangle.png";
import YellowPic from "../assests/yellow-rectangle.png";

function Hero() {
  return (
    <div className = "bg-[#FFF5F1]">
      <div className = "container-all mx-auto mt-[70px] pt-14 pb-14 grid md:grid-cols-[.85fr_1fr] md:gap-x-16">

        <div className = "*:mb-[25px] text-center md:text-left">
         <h1 className = "font-bold text-4xl md:text-6xl md:mt-20">Smile with Giftie</h1>
         <p>
          Create wish lists for anything you want. You can also make others
          smile by fufilling their wishes or send them gifts.
         </p>
         <button className = "py-[8px] px-[25px] w-40 rounded-md bg-[#FD6D29] text-white" type="button">Get Started</button>
        </div>

        
        <div className="layout-grid pt-20 md:pt-0">
         <div className="one img-wrap"><img src={BluePic} alt="hero-img"/></div>
         <div className="two img-wrap"><img src={heroPic} alt="hero-img"/></div>
        
         <div className="three img-wrap"><img src={YellowPic} alt="hero-img"/></div>
        </div>

      </div>
    
    </div>
  );
}
export default Hero;
