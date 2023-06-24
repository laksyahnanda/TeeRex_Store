import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { CartState } from '../../ContextApi/Context';

const SearchBar = () => {
  const { productDispatch } = useContext(CartState) || {};

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    productDispatch({ type: 'FILTER_BY_SEARCH', payload: searchQuery });
  };

  return (
    <Form.Control
      type="text"
      placeholder="Search Products..."
      className="search-bar"
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
