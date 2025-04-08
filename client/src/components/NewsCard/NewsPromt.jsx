import { useEffect, useState } from 'react';
import './NewsPromt.scss';

export default function NewsPromt() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const newsAPI = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d39e97070b6b438a886d37d473a51503';

  useEffect(() => {
    fetch(newsAPI)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.articles) {
          setNewsData(data.articles);
        } else {
          setError('No articles found.');
        }
        setLoading(false);
      })
      .catch((err) => {
        setError('Не вдалося отримати новини');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Завантаження...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='newsList'>
      {newsData.map((news, index) => (
        <div className="newsCard" key={index}>
          <div className="cardinfo">
            <h5>Thema: {news.title}</h5>
            <p>Author: {news.author || 'Unknown Author'}</p>
            <h6>{news.description}</h6>
          </div>
          <img 
            src={news.urlToImage || 'https://via.placeholder.com/150'} // Заміна на placeholder, якщо картинка відсутня
            alt="News"
          />
        </div>
      ))}
    </div>
  );
}
