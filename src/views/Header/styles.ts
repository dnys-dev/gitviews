import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    font-size: 1.5rem;
    color: #fff;
  }
`;

export const Logo = styled.img`
  fill: var(--logo);
  width: 100px;
  height: 60px;
  flex-shrink: 0;
  margin-left: 1rem;
`;

export const SearchForm = styled.form`
  padding-left: 16px;
  width: 100%;

  input {
    background: var(--search);
    outline: 0;
    border-radius: 6px;
    padding: 7px 12px;
    width: 100%;

    &:focus {
      width: 318px;
    }

    transition: width 0.2s ease-out, color 0.2s ease-out;
  }
`;
