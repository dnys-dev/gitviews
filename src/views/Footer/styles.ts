import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 320px 3px 320px;

  p {
    margin: 1rem 0;
  }
`;

export const Line = styled.div`
  width: 100%;
  border-top: 1px solid var(--border);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  fill: var(--logo);
  width: 100px;
  height: 60px;
  flex-shrink: 0;
  margin: 0 3rem;
`;

export const Link = styled.a`
  &:link {
    color: #aeee;
    text-decoration: none;
  }

  /* visited link */
  &:visited {
    color: green;
  }

  /* mouse over link */
  &:hover {
    color: hotpink;
  }

  /* selected link */
  &:active {
    color: blue;
  }
`;
