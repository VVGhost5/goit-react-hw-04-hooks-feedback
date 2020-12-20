import styles from "./Statistics.module.css";
import PropTypes from "prop-types";
import Notification from "../Notification/Notification";

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercent,
}) => (
  <div className="wrapper">
    {good || neutral || bad ? (
      <ul>
        <li key="good" className={styles.item}>
          <span>Good: {good}</span>
        </li>

        <li key="bad" className={styles.item}>
          <span>Bad: {bad}</span>
        </li>

        <li key="neutral" className={styles.item}>
          <span>Neutral: {neutral}</span>
        </li>

        <li key="total" className={styles.item}>
          <span>Total: {totalFeedback}</span>
        </li>

        <li key="positiveFeedback" className={styles.item}>
          <span>Positive feedback: {positiveFeedbackPercent} %</span>
        </li>
      </ul>
    ) : (
      <Notification message={"No feedback given"} />
    )}
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercent: PropTypes.number.isRequired,
};

export default Statistics;
