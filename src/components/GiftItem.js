

function GiftItem(props) {
    return (
        <div className="bg-[#FFE5D8] mx-auto rounded-[4%] w-[10rem] md:w-[12rem] h-auto p-2 shadow-md">
            
            <img className="w-[2rem] mb-5" src={props.image} alt="" />
         <div className="flex justify-center items-center mb-12">
            <figure>
              <div className="bg-[#5451B8] rounded-[50%] w-[50px] mb-6 h-[50px] flex justify-center items-center mx-auto">
                <img src= {props.figure} alt="" />
              </div>
              <figcaption className="text-[#181747] font-bold">{props.desc}</figcaption>
            </figure>
         </div>

        </div>
    );
}

export default GiftItem;

