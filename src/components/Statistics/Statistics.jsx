import { StatisticsContainer, StatisticsValue } from "./Statistics.styled";

export default function Statistics({ good, neutral, bad, total, goodPercent }) {
  return (
    <div>
      <StatisticsContainer>
        <StatisticsValue> Good: {good}</StatisticsValue>
        <StatisticsValue> Neutral: {neutral}</StatisticsValue>
        <StatisticsValue> Bad: {bad}</StatisticsValue>
      </StatisticsContainer>
      <span> Total: {total}</span>
      <span> Positive feedback: {goodPercent}% </span>
    </div>
  );
}