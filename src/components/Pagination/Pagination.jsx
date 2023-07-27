import React from 'react';
import PropTypes from 'prop-types'
import styles from './Pagination.module.scss';
import Button from '../UI/Button';

const Pagination = ({ currentPage, totalPages, onPrevPage, onNextPage }) => {
  return (
    <div className={styles.pagination}>
      <Button text='Prev' onClick={onPrevPage} disabled={currentPage === 1} />
      <span className={styles.pagination__text}>Page {currentPage}</span>
      <Button text='Next' onClick={onNextPage} disabled={currentPage === totalPages} />
    </div>
  );
};


Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onPrevPage: PropTypes.func,
  onNextPage: PropTypes.func,
}
export default Pagination;
