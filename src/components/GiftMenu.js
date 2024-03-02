import GiftLists from "../varieties";
import celebration from "../assests/celebration-filled.svg"
import GiftItem from "./GiftItem";


function GiftMenu() {
    return(   
        <div className="container-all">
        <h3 className="text-center py-12 text-[#262560] font-bold text-[2rem]">
         <img className="inline" src={celebration} alt=""/>Gifts on Giftie<img className="inline" src={celebration} alt=""/>
        </h3>
        <div className="grid grid-cols-2 gap-4 md:flex md:gap-8 md:justify-center md:items-center mb-20">
        {GiftLists.map((eachItem) => {
           return ( 
            <GiftItem
              key = {eachItem.id}
              image = {eachItem.image}
              figure = {eachItem.symbol}
              desc = {eachItem.caption}
            />
           );
        })}
        </div>
        </div>
    );}

export default GiftMenu;