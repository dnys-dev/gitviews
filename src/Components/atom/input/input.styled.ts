import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #F1F1F1;  
  border-radius: 0.25rem;  
  padding: 0 0.5rem;
  margin: 1rem;
  svg {
    font-size: 1.5rem;
    margin: 0.5rem;
    color: #4a4d55;
  }
`;


export const SearchInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: #4a4d55;
  padding: 0 0.25rem;
  margin: 1rem 0;

  &::placeholder {
    color: #4a4d55;
  }

  &:-ms-input-placeholder {
    color: #4a4d55;
  }

  &::-ms-input-placeholder {
    color: #4a4d55;
  }
`;
