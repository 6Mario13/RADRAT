import PropTypes from 'prop-types'

const ResetButton = ({ onReset }) => {
  return (
    <button className="reset-button" onClick={onReset}>
      Reset
    </button>
  );
};

export default ResetButton

ResetButton.propTypes = {
  onReset: PropTypes.string,
  
  
}