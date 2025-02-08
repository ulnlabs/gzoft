import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function DiscountPopup({ discount, setDiscount }) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (discount) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        setDiscount(false); 
      }, 5000);
    }
  }, [discount, setDiscount]);
  const content={
    Discount:"50"
  }

  return (
    <div className="">
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, x: 0, scale: 0.8 }}
          animate={{ opacity: 1, x: -130, scale: 1 }}
          exit={{ opacity: 0, x: -50, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed bottom-10 -right-70 transform  -translate-x-1/2 bg-[url('/discount/d1.jpg')]  text-white px-6 py-4  h-[15rem] w-[20rem] rounded-lg shadow-lg flex flex-col items-center bg-cover"
        >
          <h2 className="text-3xl  "> BIG DISCOUNT</h2>
          <p className="mt-2 text-5xl  p-2 overflow-visible "><h1 className="hover:scale-120  transition-transform duration-300 font-bold" >{content.Discount}<span className="text-red-700/70 ">%</span></h1></p> 
          <p className="text-[10px] text-center py-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, eius.
          </p>
          <button 
            onClick={() => { setShowPopup(false); setDiscount(false); }} 
            className=" absolute top-0 right-3 cursor-pointer ">
            ✖ 
          </button>
          <div className="absolute bottom-2 right-[25%] left-[25%] bg-pink-500 rounded-xl overflow-hidden">
            <button className=" p-3 text-xl hover:scale-120 cursor-pointer transition-transform duration-300  ">
                Claim Offer
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
