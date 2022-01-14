import styled from "styled-components";
import { TAG } from "./tagLanguage";

interface iProps {
    language: any;
}


export const Component = styled.div`
    border: 1px solid #d0d7d9;
    padding: 0.5rem;
    margin: 0.4rem;
    border-radius: 5px;
`;
export const Link = styled.a`
    text-decoration: none;
    color: #009;
    &:focus {
        outline: 0;
    }
    &:hover {
        text-decoration: underline;
        color: #009;
    }
`;
export const Title = styled.div`
    display: flex;
    font-weight: 600;
    align-items: center;
`;

export const Repo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Language = styled.div`
    display: flex;
    flex-direction: row;
    color: #57606a;
    font-size: 12px;
    margin: 0 1.5rem 0 0;
`;

export const Legend = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const Branch = styled.div`
    color: #57606a;
    font-size: 12px;
`;

export const Circulo = styled.div`
    border-radius: 16px;
    border: 1px solid #d0d7d9;
    color: #57606a;
    font-size: 12px;
    font-weight: 500;
    width: 4rem;
    text-align: center;
    padding: 0.1rem;
`;

export const Head = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const Bagder = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 0.3rem;
    align-items: center;
`;

export const Tag = styled.div`
    margin-right: 0.3rem;
    background: ${({language}: iProps) => (language === TAG ? '#fff' : "#177")};
    border: 1px solid #177;
    border-radius: 50%;
    width: 12px;
    height: 12px;
`;

export const Description = styled.div`
    font-size: 13px;
    height: 50px;
    margin-top: 1rem;
    color: #57606a;
`;
