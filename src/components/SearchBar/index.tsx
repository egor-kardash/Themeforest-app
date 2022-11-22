import { SearchArea, SearchBarContainer, SearchButton } from './styled';

export const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchArea type='search' placeholder='Search' />
      <SearchButton type='submit' />
    </SearchBarContainer>
  );
};
