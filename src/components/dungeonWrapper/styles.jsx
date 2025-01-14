import styled from "styled-components";

export const DropWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  background-color: #ffffff;
  border: 1px solid #2b2b2b;
  cursor: pointer;
  :hover {
    background-color: #9ebddb;
  }
`;

export const DungeonWrapper = styled.img`
  width: 50px;
  height: 50px;
  background-color: #aa96c4;
  object-fit: contain;
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;
