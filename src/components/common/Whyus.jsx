import { motion } from "framer-motion";

 


const Whyus = () => {

      
    return (
        <div className="w-full max-w-7xl mx-auto gap-3 p-6   grid grid-cols-12  text-white">
            <div className="col-span-12 text-center">
                <h2 className="text-4xl font-bold">
                    <span className="text-pink-400/90">Our</span> Specialities
                </h2>
                <p className="mt-2 text-gray-300 max-w-2xl mx-auto">
                    Our top-notch digital marketing agency delivers impressive results, dazzling clients with remarkable statistics.
                </p>
            </div>

            <motion.div  data-aos="fade-right"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative md:col-span-8  col-span-12   h-[400px] bg-cover bg-center  p-6 rounded-2xl bg-[url('images/person.jpg')] bg-opacity-30 backdrop-blur-lg"
            ><div className="absolute bottom-0">

                    <h3 className="text-5xl font-bold">150%</h3>
                    <p className="text-xl">Average Traffic Increase</p>
                    <p className="mt-2 text-gray-300">
                        Clients choose to stay with us due to the exceptional results we deliver and the strong relationships we build.
                    </p>
                </div>
            </motion.div>
        

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 md:col-span-4 h-[400px] col-span-12 relative rounded-2xl bg-gray-900 bg-opacity-50 backdrop-blur-lg"
            >
                <div className=" ">
                <h3 className="text-5xl font-bold">$74M</h3>
                <p className="text-xl">Revenue Generated</p>
                <p className="mt-2 text-gray-300 absolute bottom-4">
                    We have generated $74M revenue for our clients worldwide.
                </p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative md:col-span-7 col-span-12  h-[400px] bg-[url('/images/person2.jpg')] bg-cover bg-center  p-6 rounded-2xl bg-opacity-30 backdrop-blur-lg"
            >
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="md:col-span-5 h-[400px] col-span-12 relative   p-7  rounded-2xl bg-pink-300/90 text-black "
            >
                <div className=" flex flex-col items-end justify-end">

                <p className="text-xl text-end">Enhanced Brand Visibility</p>
                <h3 className="text-5xl font-bold">80%</h3>
                </div>
                <div className=" absolute bottom-0 pb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consequuntur earum beatae porro nulla ut dolores? Fugiat rerum officiis nam!
                </div>
            </motion.div>
       
        </div>
    );
};

export default Whyus;
