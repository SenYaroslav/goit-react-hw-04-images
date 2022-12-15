import React from 'react';
import PropTypes from 'prop-types';
import { CiSearch } from 'react-icons/ci';
import css from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const handleChange = e => {
    e.preventDefault();
    const { value } = e.currentTarget.elements.query;

    onSubmit(value.trim().toLowerCase());
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.form} onSubmit={handleChange}>
        <button type="submit" className={css.form__button}>
          <CiSearch size="1.5em" />
          <span className={css.button__label}>Search</span>
        </button>

        <input
          className={css.form__input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
