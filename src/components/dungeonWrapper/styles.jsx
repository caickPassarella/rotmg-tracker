import styled from "styled-components";

export const DropWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 45px;
  background: linear-gradient(to right, transparent 25px, #7388ce 20px);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 3px;

  cursor: pointer;
`;

export const DungeonWrapper = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 8px;
  margin-right: 8px;
  object-fit: contain;
  transform: scale(1.6);
`;

export const Icon = styled.img`
  width: 45px;
  object-fit: contain;
  &:hover {
    opacity: 0.5;
  }
`;
