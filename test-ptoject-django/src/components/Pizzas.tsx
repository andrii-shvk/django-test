import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Pizza } from "../types";
import { apiDjangroUrl } from "../helpers";

const Pizzas = () => {
    const [pizzas, setPizzas] = useState<Pizza[]>([]);
    const [selectedPizza, setSelectedPizza] = useState<Pizza | null>(null);

    useEffect(() => {
        const pizzasListUrl = `${apiDjangroUrl}/pizzas/`;
        axios
            .get<Pizza[]>(pizzasListUrl)
            .then((response) => setPizzas(response.data));
    }, []);

    const handleAppleClick = (pizza: Pizza) => {
        setSelectedPizza(pizza);
    };

    const handleAppleClose = () => {
        setSelectedPizza(null);
    };
    return (
        <div className="mt-[100px]">
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {pizzas.map((pizza, index) => (
                    <motion.div
                        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleAppleClick(pizza)}
                    >
                        <motion.img
                            src={pizza.photo_url}
                            alt={`${pizza.name} apple`}
                            className="w-full h-48 object-cover"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.5,
                            }}
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                {pizza.name}
                            </h3>
                            <p className="text-gray-600">
                                Size: {pizza.size}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {selectedPizza && (
                <motion.div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleAppleClose}
                >
                    <motion.div
                        className="bg-white rounded-lg shadow-md overflow-hidden max-w-md mx-auto"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src={selectedPizza.photo_url}
                            alt={`${selectedPizza.name} apple`}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                                {selectedPizza.name}
                            </h3>
                            <p className="text-gray-600">
                                Size: {selectedPizza.size}
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default Pizzas;
