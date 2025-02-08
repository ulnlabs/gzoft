import { RxCross2 } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
import { RxCheckCircled } from "react-icons/rx";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ToastNotification({ toast, message, messagetype, settoast }) {
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        if (toast) {
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
                settoast(false);
            }, 3000);
        }
    }, [toast, settoast]);

    return (
        <div className="">
            {showToast && (
                <motion.div
                    initial={{ opacity: 0, y: -50, scale: 0.8 }}
                    animate={{ opacity: 1, y: 100, scale: 1 }}
                    exit={{ opacity: 0, y: -50, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="border w-[70vw] md:w-[35vw] border-l-8 border-primary fixed top-10 right-10 bg-white text-black p-4 rounded-lg shadow-lg flex items-center "
                >
                    <div className="">
                        <RxCheckCircled size={35} className="text-green-500 mr-3" />
                    </div>
                    <div className="">
                        {messagetype}
                        <span className="block">
                            {message}
                        </span>
                    </div>
                    <div className="">

                    <button onClick={() => { setShowToast(false); settoast(false); }} className=""><RxCross2 size={17} className="cursor-pointer absolute top-4 right-4" /></button>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
