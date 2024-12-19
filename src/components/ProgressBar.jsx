import PropTypes from 'prop-types'

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;

ProgressBar.propTypes = {
  progress: PropTypes.string,
}