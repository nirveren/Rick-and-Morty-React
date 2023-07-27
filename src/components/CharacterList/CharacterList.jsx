import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from '../CharacterCard';
import CharacterModal from '../CharacterModal';
import Pagination from '../Pagination';
import ScrollToTop from '../UI/ScrollToTop';
import Button from '../UI/Button';
import Loader from '../UI/Loader/Loader';
import styles from './CharacterList.module.scss';


const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalCharacter, setModalCharacter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [useInfiniteScroll, setUseInfiniteScroll] = useState(true);

  useEffect(() => {
    fetchCharacters();
  }, [currentPage, useInfiniteScroll]);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get(
        useInfiniteScroll
          ? `https://rickandmortyapi.com/api/character?page=${currentPage}`
          : 'https://rickandmortyapi.com/api/character',
        { params: useInfiniteScroll ? null : { page: currentPage } }
      );

      setCharacters(prevCharacters =>
        useInfiniteScroll ? [...prevCharacters, ...response.data.results] : response.data.results
      );

      setTotalPages(response.data.info.pages);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching:', error);
    }
  };

  const handleClickCard = character => {
    setModalCharacter(character);
  };

  const handleCloseModal = () => {
    setModalCharacter(null);
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const handleToggleScrollType = () => {
    setUseInfiniteScroll(prevState => !prevState);
    setCharacters([]);
    setCurrentPage(1);
    setLoading(true);
  };

  const handleScroll = () => {
    if (
      useInfiniteScroll &&
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight - 50 &&
      currentPage < totalPages
    ) {
      handleNextPage();
    }
  };

  useEffect(() => {
    if (useInfiniteScroll) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [useInfiniteScroll, currentPage, totalPages]);

  return (
    <div className={styles.character__container}>
      <ScrollToTop />
      <Button text={useInfiniteScroll ? 'Pagination' : 'Infinite Scroll'} onClick={handleToggleScrollType} />
      {!useInfiniteScroll && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevPage={handlePrevPage}
          onNextPage={handleNextPage}
        />
      )}
      <div className={styles.character__list}>
        {characters.map(character  => (
          <CharacterCard character={character} onClick={handleClickCard} />
        ))}
      </div>
      <div className={styles.character__card}>
        {modalCharacter && <CharacterModal character={modalCharacter} onClose={handleCloseModal} />}
      </div>

      {loading && <Loader />}
    </div>
  );
};

export default CharacterList;
