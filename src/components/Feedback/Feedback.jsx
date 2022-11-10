import React, { Component } from 'react';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import FeedbackOption from 'components/FeedbackOption/FeedbackOption';
import Section from 'components/Section/Section';
import { FeedbackContainer } from './Feedback.styled';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleInkremet = event => {
    const { name } = event.currentTarget;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  handleGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  handleBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  goodPercent = () => {
    return parseInt((this.state.good / this.totalFeedback()) * 100);
  };

  render() {
    return (
      <FeedbackContainer>
        <Section title="Please leave feedback">
          <FeedbackOption
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleInkremet}
          />
        </Section>

        {this.totalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.totalFeedback()}
              goodPercent={this.goodPercent()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </FeedbackContainer>
    );
  }
}
