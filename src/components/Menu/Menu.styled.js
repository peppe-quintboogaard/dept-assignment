import styled from "styled-components";

export const StyledMenu = styled.nav`
  width: 100%;
  height: 100vh;
  position: absolute;
  overflow: scroll;
  top: 0;
  left: 0;
  background: black;
  transition: all 0.25s linear;
  pointer-events: ${({ open }) => (open ? "auto" : "none")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  &::after {
    display: none;
    height: 1rem;
    width: 100%;
    content: "";
    position: fixed;
    bottom: 0rem;
    z-index: 10;
    background: white;
    left: 0;
    @media only screen and (min-width: 1025px) {
      display: block;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 5rem 1.25rem;
    opacity: ${({ open }) => (open ? "1" : "0")};
    transform: ${({ open }) => (open ? "scale(1)" : "scale(1.05)")};
    transition: all 0.25s linear;
    &:hover li,
    &:focus li {
      opacity: 0.5;
      transition: all 0.25s linear;
    }
    @media only screen and (min-width: 850px) {
      padding: 5rem 3rem;
    }
    @media only screen and (min-width: 1025px) {
      padding: 7rem 5rem;
    }
    @media only screen and (min-width: 1200px) {
      padding: 8rem 8rem;
    }
    li {
      width: 100%;
      position: relative;
      margin-top: 0.5rem;
      text-align: right;
      text-transform: uppercase;
      line-height: 0.8;
      cursor: pointer;
      @media only screen and (min-width: 620px) {
        line-height: 1;
      }
      @media only screen and (min-width: 850px) {
        line-height: 1.1;
      }
      @media only screen and (min-width: 1025px) {
        line-height: 1.2;
      }
      @media only screen and (min-width: 1200px) {
        line-height: 1.3;
      }
      &:hover,
      &:focus {
        opacity: 1;
        transition: all 0.25s linear;
      }
      p {
        display: inline-flex;
        color: white;
        font-family: "Teko", sans-serif;
        font-size: 2.5rem;
        align-items: center;
        @media only screen and (min-width: 620px) {
          font-size: 3rem;
        }
        @media only screen and (min-width: 850px) {
          font-size: 3.5rem;
        }
        @media only screen and (min-width: 1025px) {
          font-size: 4rem;
        }
        @media only screen and (min-width: 1200px) {
          font-size: 5rem;
        }
        &::after {
          content: "";
          position: absolute;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-right: 10px solid transparent;
          border-left: 10px solid white;
          transition: all 0.25s linear;
          transform: translate3d(-40px, -4px, 0);
          opacity: 0;
        }
        &:hover::after {
          transform: translate3d(-25px, -4px, 0);
          opacity: 1;
        }
      }
    }
    li:not(:last-child) {
      border-bottom: 1px solid rgba(163, 163, 163, 0.5);
    }
  }
`;
