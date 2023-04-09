import styled from "styled-components";

export const StyledNavbar = styled.div`
  width: 90%;
  height: 40px;
  margin: 0 auto;
  position: relative;
  top: 0;
  padding-left: 16px;
  padding-right: 16px;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;

export const Frame = styled.div`
  height: calc(100vh - 40px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
