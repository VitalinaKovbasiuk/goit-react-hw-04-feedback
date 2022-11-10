import { ButtonContainer, Button } from './FeedbackOption.styled';

export default function FeedbackOption({ options, onLeaveFeedback }) {
  return (
    <ButtonContainer>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </Button>
      ))}
      {/* <ButtonGood onClick={handleGood}>😆 Good ᕙ(`▿´)ᕗ</ButtonGood>
      <ButtonNeutral onClick={handleNeutral}>
        😐 Neutral v( ‘.’ )v
      </ButtonNeutral>
      <ButtonBad onClick={handleBad}>😡 Bad ᕙ( ︡'︡益'︠)ง</ButtonBad> */}
    </ButtonContainer>
  );
}
