import React, { useState } from "react";
import FeedbackButtons from "./components/FeedbackButtons/FeedbackButtons";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import buttons from "./data/buttons";

export default function App() {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = feedbacks;

  const handleIncrementFeedbackValue = ({ target }) => {
    const { name } = target;

    setFeedbacks((prevState) => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage = (good / (good + neutral + bad)) * 100;
    return Math.round(positiveFeedbackPercentage);
  };

  return (
    <div className="container">
      <Section title="Please leave feedback">
        <FeedbackButtons
          buttons={buttons}
          onHandleIncrement={handleIncrementFeedbackValue}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          totalFeedback={countTotalFeedback()}
          positiveFeedbackPercent={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
}
