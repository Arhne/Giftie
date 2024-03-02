import footerlogo from "../assests/footerGiftieLogo.png";
import path from "../assests/Path.svg";
import youtube from "../assests/Path1.svg";
import x from "../assests/X.svg";
import IG from "../assests/IG.svg";


function Footer() {
    return (
        <div className="bg-[#181747]">
        <div className="container-all">

        <div className="pt-20 pb-4 text-[.7rem] md:text-[1rem] font-['Manrope,_sans-serif'] | footer-wrap">

          <img className="w-[6rem] footer-logo" src={footerlogo} alt=""/>
            
          <div className="text-[#D9DBE1] footer-copyright">
            <p>Copyright © 2024 Giftie. <br/><span>All Rights Reserved</span></p>
          </div>

          <ul className="flex gap-6 md:gap-2 *:bg-[#2F2E59] *:rounded-[100%]  *:w-[30px] *:h-[30px] | footer-social">
              <li className="flex justify-center items-center"><a href=""><img src={IG} alt="instagram"/></a></li>
              <li className="flex justify-center items-center"><a href=""><img src={path} alt=""/></a></li>
              <li className="flex justify-center items-center"><a href=""><img src={x} alt="twitter"/></a></li>
              <li className="flex justify-center items-center"><a href=""><img src={youtube} alt="youtube"/></a></li>
         </ul>
         

          <div className="flex gap-16 | footer-list">
            
              <ul className="flow">
                <li>
                  <h5 className="text-white md:text-xl font-medium">Company</h5>
                 </li>
                <li><a className="text-[#D9DBE1]" href="">About us</a></li>
                <li><a className="text-[#D9DBE1]" href="">How it works</a></li>
                <li><a className="text-[#D9DBE1]" href="">Contact us</a></li>
                <li><a className="text-[#D9DBE1]" href="">Testimonials</a></li>
              </ul>

              <ul className="flow">
                <li>
                  <h5 className="text-white md:text-xl font-medium">Support</h5>
                </li>
                <li><a className="text-[#D9DBE1]" href="">Health center</a></li>
                <li><a className="text-[#D9DBE1]" href="">Terms of service</a></li>
                <li><a className="text-[#D9DBE1]" href="">Legal</a></li>
                <li><a className="text-[#D9DBE1]" href="">Privacy Policy</a></li>
                <li><a className="text-[#D9DBE1]" href="">Status</a></li>
              </ul>
          </div>

          <div className="flow footer-form">
            <h5 className="text-white md:text-xl font-medium"> Stay up to date</h5>
            
           <input className="bg-[#46456C] rounded-[8px] px-1 md:px-4 py-1 outline-none text-[#D9DBE1] w-full" type="email" placeholder="Your email address" />
          </div>    

        </div>
      </div>
    </div>
  );
}
export default Footer;