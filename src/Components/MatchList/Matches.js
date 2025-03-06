import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import './Matches.css';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import spinner from '../../Images/spinner.png';
import MatchCard from '../MatchCard/MatchCard';
import logo from '../../Images/logo.png';
import Loading from '../Loading/Loading'; 

const fetchMatches = async () => {
  const response = await fetch('https://app.ftoyd.com/fronttemp-service/fronttemp');
  if (!response.ok) {
    throw new Error('Ошибка: не удалось загрузить информацию');
  }
  return response.json();
};

const MatchesList = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [openMatches, setOpenMatches] = useState({});
  const [showLoading, setShowLoading] = useState(false); 

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['matches'],
    queryFn: fetchMatches,
    refetchOnWindowFocus: false,
    onSettled: () => {
      setShowLoading(false); 
    },
    onError: () => {
      setShowLoading(false); 
    },
  });

  useEffect(() => {
    let timer;
    if (isLoading) {
      timer = setTimeout(() => {
        setShowLoading(true);
      }, 400); 
    } else {
      setShowLoading(false); 
    }

    return () => {
      clearTimeout(timer); 
    };
  }, [isLoading]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    setShowLoading(false); 
    try {
      await refetch();
    } catch (err) {
      console.error('Ошибка: не удалось загрузить информацию', err);
    } finally {
      setIsRefreshing(false);
    }
  };

  const toggleDropdown = (index) => {
    setOpenMatches(prevState => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };


  return (
    <div className='list'>
      <div className='nav'>
        <img className='logo' src={logo} alt='logo' />
        <div className='BlockBtnErr'>
          {error && <ErrorMessage />}
          <button 
            className={`${isRefreshing ? 'loading' : 'updateBtn'}`}  
            onClick={handleRefresh} 
            disabled={isRefreshing}
          >
            Обновить 
            <img className={`${isRefreshing ? 'spinner' : 'defSpinner'}`} src={spinner} alt='...Loading' />
          </button>
        </div>
      </div>

      {showLoading ? (
        <Loading />  
      ) : (
        error ? (
          <div className='errorContainer'>
            <ErrorMessage />
          </div>
        ) : (
          data && (
            <ul>
              {data.data.matches.map((match, index) => (
                <MatchCard 
                  className='MatchCard'
                  key={match.title} 
                  match={match} 
                  index={index} 
                  openMatches={openMatches} 
                  toggleDropdown={toggleDropdown} 
                />
              ))}
            </ul>
          )
        )
      )}
    </div>
  );
};

export default MatchesList;