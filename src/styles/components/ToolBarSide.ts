import styled, { keyframes } from "styled-components";

export const ToolSideBard = styled.div`
  position: absolute;
  background-color: rgba(38, 38, 38, 0.7);
  width: 5.9rem;
  padding: 2.5rem 0;
  border-radius: 10rem;
  top: 10rem;
  left: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;

  a {
    text-decoration: none;
  }
`;

export const ToolItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  li + li {
    margin-top: 2rem;
  }
`;

export const ToolItem = styled.li`
  text-align: center;
  list-style: none;
  font-family: "Kanit", sans-serif;
  svg {
    transition: 0.3s ease-in-out;
    color: #aaa;
    animation-duration: 0.3s;
  }

  &:hover {
    svg {
      transition: 0.1s ease-in-out;
      color: #fff;
    }

    div {
      color: #fff;
    }
  }
`;

export const TollItemIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 3.5rem;
  transition: 1s;

  cursor: pointer;
`;

export const ToolItemName = styled.div`
  font-size: 1.3rem;
  font-family: Kanit;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: #bbbbbb;
  cursor: pointer;
`;
