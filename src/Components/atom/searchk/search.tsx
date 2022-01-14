import React, { useEffect, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { Container, SearchInput } from './search.styled';

interface SearchProps {
  onFilter: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onFilter }) => {
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      onFilter(query);
    }, 800);

    return () => {
      clearTimeout(timeout);
    };
  }, [query, onFilter]);
  return (
    <Container>
      <IoIosSearch />
      <SearchInput
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Pesquisar"
      />
    </Container>
  );
};

export default Search;
