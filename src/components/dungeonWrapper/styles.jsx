import styled from "styled-components";

export const DropWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 45px;
  background: linear-gradient(to right, transparent 25px, #7388ce 20px);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 6px;

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
  opacity: 0.5;
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.$isVisible ? 1 : 0.6)};
  &:hover {
    opacity: ${(props) => (props.$isVisible ? 1 : 0.7)};
  }
`;

export const XIcon = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px; /* Adjust size */
  height: 50px;
  fill: #ffffff; /* Color of the "X" */
  pointer-events: none; /* Prevent interaction */
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transition: opacity 0.3s ease;
  z-index: 99;
`;
