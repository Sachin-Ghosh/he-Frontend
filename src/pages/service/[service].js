import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const ServicePage = () => {
    const router = useRouter();
    const { service } = router.query;
    const [serviceData, setServiceData] = useState(null);

    useEffect(() => {
        const fetchServiceData = async () => {
            try {
                const response = await fetch(`${process.env.API_URL}api/services/${service}`);
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

    return (
        <div className="container mx-auto p-4">
            {serviceData ? (
                <>
                    <h1 className="text-3xl font-bold mb-4">{serviceData.name}</h1>
                    <p className="mb-2">{serviceData.description}</p>
                    
                    <p className="text-green-600 font-semibold mb-2">${serviceData.price}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ServicePage;
