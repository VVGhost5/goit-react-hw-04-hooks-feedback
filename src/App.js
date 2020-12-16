import React, { useState } from "react";
import FeedbackButtons from "./components/FeedbackButtons/FeedbackButtons";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";
import buttons from "./data/buttons";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function handleIncrementFeedbackValue({ target }) {
    const { name } = target;

    switch (name) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;

      case "bad":
        setBad((prevState) => prevState + 1);
        break;

      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;

      default:
        console.log("nothing to render");
        break;
    }
  }

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    const positiveFeedbackPercentage = (good / (good + neutral + bad)) * 100;
    return Math.round(positiveFeedbackPercentage);
  }

  return (
    <div className="container">
      <Section title="Please leave feedback">
        <FeedbackButtons
          buttons={buttons}
          onHandleIncrement={handleIncrementFeedbackValue}
        />
      </Section>

      {good || neutral || bad ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            totalFeedback={countTotalFeedback()}
            positiveFeedbackPercent={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message={"No feedback given"} />
      )}
    </div>
  );
}
