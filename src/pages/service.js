// import { useState, useEffect } from 'react';
// import { FaPlus, FaMinus } from 'react-icons/fa';
// import Link from 'next/link';

// const ServicePage = () => {
//     const [services, setServices] = useState([]);
//     const [selectedServices, setSelectedServices] = useState([]);
    
//     useEffect(() => {
//         fetchServices();
//     }, []);

//     const fetchServices = async () => {
//         try {
//             const response = await fetch(`${process.env.API_URL}api/services`);
//             const data = await response.json();
//             setServices(data);
//         } catch (error) {
//             console.error('Error fetching services:', error);
//         }
//     };

//     const handleAddService = (serviceId) => {
//         setSelectedServices([...selectedServices, serviceId]);
//     };

//     const handleRemoveService = (serviceId) => {
//         setSelectedServices(selectedServices.filter(id => id !== serviceId));
//     };

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-3xl font-bold mb-4">Select Services</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                 {services.map(service => (
//                     <div key={service._id} className="border p-4 rounded-lg">
//                         {/* <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
//                         <p className="mb-2">{service.description}</p>
//                         <p className="text-gray-700">Category: {service.category}</p>
//                         <p className="text-green-600 font-semibold mb-2">${service.price}</p>
//                         <div className="flex items-center justify-between">
//                             {selectedServices.includes(service._id) ? (
//                                 <button 
//                                     onClick={() => handleRemoveService(service._id)}
//                                     className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center"
//                                 >
//                                     <FaMinus className="h-4 w-4 mr-1" />
//                                     Remove
//                                 </button>
//                             ) : (
//                                 <button 
//                                     onClick={() => handleAddService(service._id)}
//                                     className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center"
//                                 >
//                                     <FaPlus className="h-4 w-4 mr-1" />
//                                     Add
//                                 </button>
//                             )}
//                         </div> */}

// <h2 className="text-xl font-semibold mb-2">{service.category}</h2>
// <p className="mb-2">{service.description}</p>
//                         <Link href={`/services/${service._id}`} className="text-blue-600 hover:underline">
//                             View Details
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ServicePage;

import { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const ServicePage = () => {
    const [serviceData, setServiceData] = useState(null);
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        // Fetch service data based on service ID from the API
        const fetchServiceData = async () => {
            try {
                const response = await fetch(`${process.env.API_URL}api/services/${service._id}`);
                const data = await response.json();
                setServiceData(data);
            } catch (error) {
                console.error('Error fetching service data:', error);
            }
        };

        if (service) {
            fetchServiceData();
        }
    }, [service]);

    const handleAddService = () => {
        // Handle adding the service to the selected services
        setSelected(true);
    };

    const handleRemoveService = () => {
        // Handle removing the service from the selected services
        setSelected(false);
    };

    return (
        <div className="container mx-auto p-4">
            {serviceData ? (
                <>
                    <h1 className="text-3xl font-bold mb-4">{serviceData.name}</h1>
                    <p className="mb-2">{serviceData.description}</p>
                
                    <p className="text-green-600 font-semibold mb-2">${serviceData.price}</p>
                    <div className="flex items-center">
                        {selected ? (
                            <button 
                                onClick={handleRemoveService}
                                className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center mr-2"
                            >
                                <FaMinus className="h-4 w-4 mr-1" />
                                Remove
                            </button>
                        ) : (
                            <button 
                                onClick={handleAddService}
                                className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center mr-2"
                            >
                                <FaPlus className="h-4 w-4 mr-1" />
                                Add
                            </button>
                        )}
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ServicePage;