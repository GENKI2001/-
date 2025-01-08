import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { FacebookRoundButtonAtoms } from '../SNSRoundButtonAtoms';

describe('FacebookRoundButtonAtoms', () => {
  test('カスタムテキストのテスト', () => {
    const customText = 'カスタムログインテキスト';
    render(<FacebookRoundButtonAtoms onClick={() => {}} text={customText} />);

    const button = screen.getByText(customText);
    expect(button).toBeInTheDocument();
  });

  // サイズバリエーションのテスト
  test('applies correct size class', () => {
    const customText = 'カスタムログインテキスト';
    const { rerender } = render(
      <FacebookRoundButtonAtoms
        onClick={() => {}}
        size="small"
        text={customText}
      />,
    );
    const buttonElement = screen.getByText(customText).closest('button');
    expect(buttonElement).toHaveClass('sns-round-button-atoms small');
  });

  // クリックイベントのテスト
  test('calls onClick handler when clicked', () => {
    const customText = 'カスタムログインテキスト';
    const handleClick = jest.fn();
    render(
      <FacebookRoundButtonAtoms onClick={handleClick} text={customText} />,
    );

    const button = screen.getByText(customText);
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
