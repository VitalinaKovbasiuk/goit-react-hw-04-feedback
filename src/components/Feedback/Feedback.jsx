import React from 'react';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import FeedbackOption from 'components/FeedbackOption/FeedbackOption';
import Section from 'components/Section/Section';
import { FeedbackContainer } from './Feedback.styled';
import { useEffect, useState } from 'react';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [goodPercent, setGoodPercent] = useState(0);

  const leaveFeedback = e => {
    const updateValue = e.target.name;

    switch (updateValue) {
      case options[0]:
        setGood(prevValue => prevValue + 1);
        break;
      case options[1]:
        setNeutral(prevValue => prevValue + 1);
        break;
      case options[2]:
        setBad(prevValue => prevValue + 1);
        break;

      default:
        break;
    }
  };

  // const totalFeedback = () => {
  //   return good + neutral + bad;
  // };

  // const goodPercent = () => {
  //   return parseInt((good / totalFeedback()) * 100) || 0;
  // };

  useEffect(() => {
    setTotalFeedback(good + neutral + bad);
    setGoodPercent(((good / totalFeedback) * 100).toFixed());
  }, [good, neutral, bad, totalFeedback]);

  const options = Object.keys({ good, neutral, bad });

  return (
    <FeedbackContainer>
      <Section title="Please leave feedback">
        <FeedbackOption options={options} onLeaveFeedback={leaveFeedback} />
      </Section>

      {totalFeedback ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            goodPercent={goodPercent}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </FeedbackContainer>
  );
}
