import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';

export default function LoginedHome() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      
      if (token) {
        try {
          const response = await fetch('/api/user', { 
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
          
          const data = await response.json();
          
          if (response.status === 200) {
            setUser(data.user);
          } else {
            console.error('Помилка при отриманні даних користувача:', data.message);
            setError(data.message || 'Не вдалося отримати дані користувача');
          }
        } catch (error) {
          console.error('Помилка запиту:', error);
          setError('Сталася помилка при запиті даних.');
        } finally {
          setLoading(false); 
        }
      } else {
        setLoading(false);  
        setError('Токен не знайдено!');
      }
    };

    fetchUserData();
  }, []); 

  if (loading) {
    return <div>Завантаження...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }


  
  return (
    <>
      <Navbar user={user} />
    </>
  );
}
