import gift from "../assests/wrapedgift.png";
import multiplegifts from "../assests/multiplegifts.png";
import iPhone from "../assests/iPhone-13-Pro-Front.png";
import gift_withhand from "../assests/handholdingwrappedgift.png";

function AboutUs() {
return(
    <div className="flex flex-col justify-center items-center">

      <div className="bg-[#FFFF] py-4">
          <div className="container-all">
     
             <h2 className="text-2xl md:text-3xl text-[#262560] text-center font-bold pt-14 pb-5 md:pb-10">What you can do with Giftie</h2>

             <div className="grid items-center gap-x-9 grid-cols-2">
          
                  <img className="w-[21rem] pl-4 md:ml-10 md:pr-5 md:pl-0 lg:p-0" src={multiplegifts} alt="" />
      
                  <div className="mr-2 md:mr-10">
                    <p className="text-[1rem] md:text-3xl text-[#DA4905] font-bold mb-4 md:mb-10">Create a wishlist</p>
                    <p className="text-[.875rem] md:text-2xl font-normal">Create a wishlist, add the items you wish to have, and see how people fulfil your wishes</p>
                  </div> 
             </div>
          </div>
      </div>
         

      <div className="bg-[#FFF5F1] py-4">
          <div className="container-all">
     
            <div className="grid items-center gap-x-9 grid-cols-2">

              <div className="md:ml-10">
                <p className="text-[1rem] md:text-3xl text-[#DA4905] font-bold mb-4 md:mb-10">Gift someone</p>
                <p className="text-[.875rem] md:text-2xl font-normal">Send gift to your friends, family, colleagues, and anyone else through giftie</p>
              </div>
       
              <img className="w-[22rem] pl-5 md:pl-28 lg:pl-0 md:ml-8 lg:ml-28" src={gift} alt="" /> 
            </div>
          </div>  
      </div> 
  
         
      <div className="bg-[#FFFF] py-4">
          <div className="container-all">
     
            <div className="grid items-center gap-x-9 grid-cols-2">

             <img className="w-[22rem] md:ml-10 md:pr-6 lg:pr-0" src={gift_withhand} alt="" />

              <div className="md:mr-10">
                <p className="text-[1rem] md:text-3xl text-[#DA4905] font-bold mb-4 md:mb-10">Receive gifts from people</p>
                <p className="text-[.875rem] md:text-2xl font-normal">You can receive gifts from family friends, colleagues or an anonymous gifter through giftie</p>
              </div>  
            </div>
          </div>  
      </div>  

      <div className="bg-[#FFF5F1]">
          <div className="container-all">
     
            <div className="grid items-center gap-x-9 grid-cols-2">

               <div className="md:ml-10 mt-4 md:mt-0"> 
                  <p className="text-[1rem] md:text-3xl text-[#DA4905] font-bold mb-4 md:mb-10">Sell or buy event tickets</p>
                  <p className="text-[.875rem] md:text-2xl font-normal">Create event tickets and sell on giftie. You can search giftie for event tickets and grab yours</p>
               </div>

               <img className="w-[14rem] pl-10 md:pl-0 md:ml-40 lg:ml-52" src={iPhone} alt="" />  
          
            </div>
          </div>
      </div>   

  </div>
)
}

export default AboutUs;