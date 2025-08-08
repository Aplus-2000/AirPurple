import { useEffect, useState } from 'react';
import { getCityAirQuality } from '../services/airQualityService';
import AQCard from '../components/AQCard';
import Loader from '../components/Loader';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchAccraData = async () => {
    try {
      const res = await getCityAirQuality('Ghana', 'Eastern', 'Koforidua');
      console.log(res?.data);
      setData(res.data.data);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // const fetchUserLocationData = () => {
  //   navigator.geolocation.getCurrentPosition(
  //     async (position) => {
  //       const { latitude, longitude } = position.coords;
  //       try {
  //         const res = await getNearestCityAirQuality(latitude, longitude);
  //         const cityData = res.data.data;

  //         if (cityData.city.toLowerCase() === 'accra') {
  //           setData(cityData);
  //         } else {
  //           setError('This app only supports air quality data for Accra.');
  //         }
  //       } catch (err) {
  //         console.error(err);
  //         setError('Failed to fetch data from location.');
  //       } finally {
  //         setLoading(false);
  //       }
  //     },
  //     (geoErr) => {
  //       console.warn('Geolocation error:', geoErr);
  //       setError('Location access denied. Loading data for Accra instead...');
  //       fetchAccraData(); // fallback
  //     }
  //   );
  // };

  useEffect(() => {
    if (navigator.geolocation) {
      // fetchUserLocationData();
    } else {
      setError('Geolocation not supported. Loading Accra data...');
      fetchAccraData();
    }
  }, []);

  if (loading) return <Loader />;

  if (error && !data) {
    return <p className="text-red-600 text-center mt-6">{error}</p>;
  }

  if (!data?.current) {
    return <p className="text-red-500 text-center mt-10">No air quality data available.</p>;
  }

  return (
    <div className="p-4">
      {error && <p className="text-yellow-500 text-center mb-4">{error}</p>}
      <AQCard
        location={data.city}
        pollution={data.current.pollution}
        weather={data.current.weather}
      />
    </div>
  );
};

export default Dashboard;
