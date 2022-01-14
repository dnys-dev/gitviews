import styled from "styled-components";

interface styledProps {
  isFontColor?: boolean;
  isLoading?: boolean;
}

export const Container = styled.div<styledProps>`
  margin: 2rem 0.4rem;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid rgb(208, 215, 222);
`;

export const Content = styled.div<styledProps>`
  ${({ isLoading }) =>
    isLoading ? " position: relative; margin:1rem " : null};
`;

export const Title = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props: styledProps) => (props.isFontColor ? "#000" : "#fff")};
  @media only screen and (max-width: 1012px) {
    text-align: flex-end;
  }
`;

export const Nick = styled.div`
  font-size: 10px;
  margin-left: 1rem;
  margin-top: 22px;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media only screen and (max-width: 1012px) {
    flex-direction: column;
  }
`;

export const Caption = styled.h2`
  color: ${(props: styledProps) => (props.isFontColor ? "#000" : "#fff")};
  @media only screen and (max-width: 1012px) {
    text-align: center;
  }
`;

export const Action = styled.div`
  color: ${(props: styledProps) => (props.isFontColor ? "#000" : "#fff")};
`;

export const Description = styled.div`
  margin-top: 0.5rem;
`;
export const Resume = styled.p`
  font-weight: bold;
  color: ${(props: styledProps) => (props.isFontColor ? "#000" : "#fff")};
`;

export const Image = styled.img`
  width: 100%;
`;

export const Loading = styled.div<styledProps>`

 ${({ isLoading }) =>
   isLoading
     ? " position: absolute;background-color: #22DD7A;  height: 10px;  border-radius: 15px;  animation: progres 14s infinite linear;  "
     : null} ;
           ${({ isLoading }) => (isLoading ? "  " : null)} ;
}

@keyframes progres{
    0%{
      width: 0%;
    }
    25%{
        width: 50%;
    }
    50%{
        width: 75%;
    }
    75%{
        width: 85%;
    }
    100%{
        width: 100%;
    }
`;
