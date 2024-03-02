import downarrow from "../assests/downarrow.svg";
import uparrow from "../assests/uparrow.svg";
import { useState } from "react";

function FAQs() {

   const [isExpanded, setExpanded] = useState(false);
   const [isExpanded1, setExpanded1] = useState(false);
   const [isExpanded2, setExpanded2] = useState(false);
   const [isExpanded3, setExpanded3] = useState(false);
   const [isExpanded4, setExpanded4] = useState(false);
   const [isExpanded5, setExpanded5] = useState(false);
   const [isExpanded6, setExpanded6] = useState(false);

   function expand() {
      setExpanded(!isExpanded);
   }
   function expand1() {
      setExpanded1(!isExpanded1);
   }
   function expand2() {
      setExpanded2(!isExpanded2);
   }
   function expand3() {
      setExpanded3(!isExpanded3);
   }
   function expand4() {
      setExpanded4(!isExpanded4);
   }
   function expand5() {
      setExpanded5(!isExpanded5);
   }
   function expand6 () {
      setExpanded6(!isExpanded6);
   }

    return(
        <div className="bg-[#FFF5F1]">
            <div className="container-all">
                <div className="text-[#1C232D] grid gap-8 md:grid-cols-[1.4fr_1.5fr] py-20">
                 <div className="text-center md:text-left mb-16 md:mb-0">
                    <h4 className="text-4xl md:text-5xl font-bold mb-10">Frequently Asked Questions</h4>
                    <p className="text-lg font-semibold mb-3">Can't find an answer?</p>
                    <button className="font-semibold py-[5px] text-sm px-[25px] w-32 rounded-md bg-[#FD6D29] text-white" type="button">Contact us</button>
                 </div>


                 <div className="text-xl font-bold | flow">
                   <div>
                   <div className="FAQs">
                      <h4>Can I withdraw cash from Giftie?</h4>
                      <button className="justify-end" onClick={expand} type="button">
                      { isExpanded ? <img src={uparrow} alt=""/> : <img src={downarrow} alt=""/>}
                      </button>
                    </div>
                  { isExpanded ? <p className="text-sm md:text-base font-medium text-[#4E4D4D]">
                  Orders are usually shipped within 1-2 business days after placing the order.</p> : null}
                   </div>
                   
                   <div>
                    <div className="FAQs"> 
                      <h4>Is it possible to gift more than one person?</h4>
                      <button className="justify-end" onClick={expand1} type="button">
                      { isExpanded1 ? <img src={uparrow} alt=""/> : <img src={downarrow} alt=""/>}
                      </button>
                    </div>
                    { isExpanded1 ? <p className="text-sm md:text-base font-medium text-[#4E4D4D]">
                     Consectetur adipisicing elit. Et aspernatur soluta, minus eos ullam 
                     iure aliquid accusantium repellat quam labore laboriosam eaque consectetur cum ad quo, adipisci 
                     harum tempore vero.</p> : null}
                    </div>

                    <div>
                    <div className="FAQs">
                      <h4>How do I withdraw from Giftie?</h4>
                      <button className="justify-end" onClick={expand2} type="button">
                      { isExpanded2 ? <img src={uparrow} alt=""/> : <img src={downarrow} alt=""/>}
                      </button>
                    </div>
                    { isExpanded2 ? <p className="text-sm md:text-base font-medium text-[#4E4D4D]">Psum dolo
                    r sit amet consectetur adipisicing elit. Et aspernatur soluta, minus eos 
                    ullam iure aliquid accusantium repellat quam labore laboriosam eaque consectetur 
                    cum ad quo, adipisci harum tempore vero.</p> : null}
                    </div>

                    <div>
                    <div className="FAQs">
                       <h4>How to send an airtime gift?</h4>
                       <button className="justify-end" onClick={expand3} type="button">
                       { isExpanded3 ? <img src={uparrow} alt=""/> : <img src={downarrow} alt=""/>}
                       </button>
                    </div>
                    { isExpanded3 ? <p className="text-sm md:text-base font-medium text-[#4E4D4D]">
                     Et aspernatur soluta, minus eos ullam iure aliquid accusantium repellat quam labore 
                     laboriosam eaque consectetur cum ad quo, adipisci harum tempore vero.</p> : null}
                    </div>

                    <div>
                    <div className="FAQs">
                       <h4>How to send an item from Amazon?</h4>
                       <button className="justify-end" onClick={expand4} type="button">
                       { isExpanded4 ? <img src={uparrow} alt=""/> : <img src={downarrow} alt=""/>}
                       </button>
                    </div>
                    { isExpanded4 ? <p className="text-sm md:text-base font-medium text-[#4E4D4D]">
                    Adipisicing eli aspernatur soluta, minus eos ullam iure aliquid accusantium repellat quam 
                    labore laboriosam eaque consectetur cum ad quo, adipisci harum tempore vero.</p> : null}
                    </div>
                    
                    <div>
                    <div className="FAQs">
                       <h4>How to send an item from Amazon?</h4>
                       <button className="justify-end" onClick={expand5} type="button">
                       { isExpanded5 ? <img src={uparrow} alt=""/> : <img src={downarrow} alt=""/>}
                       </button>
                    </div>
                    { isExpanded5 ? <p className="text-sm md:text-base font-medium text-[#4E4D4D]">
                    Oluta, minus eos ullam iure aliquid accusantium repellat quam labore laboriosam eaque 
                    consectetur cum ad quo, adipisci harum tempore vero.</p>: null}
                    </div>

                    <div>
                    <div className="FAQs">
                       <h4>How to send an item from Amazon?</h4>
                       <button className="justify-end" onClick={expand6} type="button">
                       { isExpanded6 ? <img src={uparrow} alt=""/> : <img src={downarrow} alt=""/>}
                       </button>
                    </div>
                    { isExpanded6 ? <p className= "text-sm md:text-base font-medium text-[#4E4D4D]"> Minus eos ullam iure aliquid accusantium repellat quam labore laboriosam eaque consectetur 
                    cum ad quo, adipisci harum tempore vero.</p> : null}
                    </div>

                  </div>
                </div>
            </div> 
        </div>
    );
    }
    export default FAQs;