import PropTypes from 'prop-types'

export const Feedback = ({ options, onLeaveFeedback }) => (
  <div>
    {Object.keys(options).map(option => (
      <button
        key={option}
        name={option}
        type="button"
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    ))}
  </div>
)

Feedback.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}
