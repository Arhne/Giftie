import airbnb from "../assests/Airbnb Logo.svg";
import hubspot from "../assests/Hubspot Logo.svg";
import google from "../assests/Google Logo.svg";
import microsoft from "../assests/Microsoft Logo.svg";
import walmart from "../assests/Walmart Logo.svg";
import fedex from "../assests/FedEx Logo.svg";

function Sponsors() {
return(
    <div className="container-all">
   <div className="sponsors-list my-20">
          <ul className="grid grid-cols-3 gap-4 md:flex md:items-center md:justify-center md:gap-8" role="list">
            <li className="mx-auto"><img src={airbnb} alt=""/></li>
            <li className="mx-auto"><img src={hubspot} alt=""/></li>
            <li className="mx-auto"><img src={google} alt=""/></li>
            <li className="mx-auto"><img src={microsoft} alt=""/></li>
            <li className="mx-auto"><img src={walmart} alt=""/></li>
            <li className="mx-auto"><img src={fedex} alt=""/></li>
          </ul>
        </div>

    </div>
);
}
export default Sponsors;