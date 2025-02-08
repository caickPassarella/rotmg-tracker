import PropTypes from "prop-types";
import { ProgressBarWrapper, Progress } from "./styles";

export const ProgressBar = ({ progress }) => {
  return (
    <ProgressBarWrapper>
      <Progress $progress={progress} />
    </ProgressBarWrapper>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};
