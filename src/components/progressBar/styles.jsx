import styled from "styled-components";

// Wrapper for the progress bar
export const ProgressBarWrapper = styled.div`
  width: 100%; /* Full width by default */
  background-color: #e0e0e0; /* Light gray for the background */
  border-radius: 8px;
  height: 20px; /* Height of the progress bar */
  overflow: hidden; /* Ensures progress stays within bounds */
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.2);
`;

// Actual progress element
export const Progress = styled.div`
  width: ${(props) => props.$progress}%; /* Dynamic width based on progress */
  background-color: ${(props) =>
    props.$progress < 50
      ? "#f39c12" // Yellow for less progress
      : "#2ecc71"}; // Green for higher progress
  height: 100%; /* Full height of the wrapper */
  border-radius: 8px 0 0 8px; /* Rounded on the left side */
  transition: width 0.3s ease-in-out; /* Smooth animation */
`;
