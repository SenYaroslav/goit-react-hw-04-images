import React, { useState, useEffect } from 'react';
import { fetchPictures } from 'services/picturesAPI';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

const App = () => {
  const [page, setPage] = useState(1);
  const [pictures, setPictures] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadMoreBtnShown, setIsLoadMoreBtnShown] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      setIsLoading(true);
      fetchPictures(searchQuery, page)
        .then(({ data: { hits } }) => {
          if (hits.length === 12) {
            setPictures(state => [...state, ...hits]);
            setIsLoadMoreBtnShown(true);
          }
          if (hits.length < 12) {
            setIsLoadMoreBtnShown(false);
          }
          if (hits.length === 0) {
            setPictures([]);
            alert('Bad search, try some else');
          }
        })
        .catch(console.log)
        .finally(() => setIsLoading(false));
    }
  }, [page, searchQuery]);

  const onSubmit = query => {
    if (query === '') {
      alert('Please, fill the search form');
      return;
    }
    if (query !== searchQuery) {
      setSearchQuery(query);
      setPictures([]);
      setPage(1);
      return;
    }
    setSearchQuery(query);
    setPage(1);
  };

  const handlerLoadMoreBtn = () => {
    setPage(state => state + 1);
  };

  return (
    <div className="container">
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery pictures={pictures} />
      {isLoading && <Loader />}
      {isLoadMoreBtnShown && <Button handlerLoadMoreBtn={handlerLoadMoreBtn} />}
    </div>
  );
};

export default App;