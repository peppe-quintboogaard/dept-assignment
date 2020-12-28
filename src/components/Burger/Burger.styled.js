import styled from "styled-components";

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.25rem;
  height: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;

  span {
    width: 100%;
    height: 2px;
    background: ${({ open }) => (open ? "white" : "black")};
    transition: all 0.25s linear;
    position: relative;
    transform-origin: 4px;
    &:first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
    }
    &:last-child {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
    }
  }
`;
