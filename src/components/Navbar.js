import GiftieLogo from "../assests/GiftieLogo.png"

function Navbar() {
    return (
    <div className = "bg-[#FFF5F1] fixed top-0 w-full">
     <div className = "flex justify-between items-center py-4 container-all mx-auto">
       <a href="/"><img className = "w-[9rem]" src={GiftieLogo} alt="giftie logo"/></a>
       
       <div className="md:hidden">hamburger icon</div>

       <div className="hidden md:flex gap-x-4 items-center *:pb-1 hover:*:border-b-[#FD6D29]
       hover:*:font-medium hover:*:border-b-4">
       <a className="active active:font-bold active:border-b-[#FD6D29]" href="/">Home</a>
       <a href="/Wishlists">Wishlists</a>
       <a href="/Events">Events</a>
       <a href="/Gift-Ideas">Gift Ideas</a>
       <a href="/Contact">Contact Us</a>
       </div>

       <button className="hidden md:block py-[4px] px-[25px] rounded-md
       border border-solid border-[#FD6D29] text-[#FD6D29]" 
       type="button">
       Log In
       </button>
      
     </div>
     </div>
    );
}

export default Navbar;