import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { FacebookRoundButtonAtoms } from '../SNSRoundButtonAtoms';

describe('FacebookRoundButtonAtoms', () => {
  // デフォルト値のテスト
  test('renders with default props', () => {
    render(<FacebookRoundButtonAtoms onClick={() => {}} />);

    // デフォルトのテキストが表示されていることを確認
    const button = screen.getByText('Facebook でログイン');
    expect(button).toBeInTheDocument();

    // デフォルトのサイズクラスが適用されていることを確認
    expect(button.closest('div')).toHaveClass('sns-round-button-atoms-medium');
  });

  // カスタムテキストのテスト
  test('renders with custom text', () => {
    const customText = 'カスタムログインテキスト';
    render(<FacebookRoundButtonAtoms onClick={() => {}} text={customText} />);

    const button = screen.getByText(customText);
    expect(button).toBeInTheDocument();
  });

  // サイズバリエーションのテスト
  test('applies correct size class', () => {
    const { rerender } = render(
      <FacebookRoundButtonAtoms onClick={() => {}} size="small" />,
    );

    expect(screen.getByText('Facebook でログイン').closest('div')).toHaveClass(
      'sns-round-button-atoms-small',
    );

    // mediumサイズのテスト
    rerender(<FacebookRoundButtonAtoms onClick={() => {}} size="medium" />);
    expect(screen.getByText('Facebook でログイン').closest('div')).toHaveClass(
      'sns-round-button-atoms-medium',
    );

    // largeサイズのテスト
    rerender(<FacebookRoundButtonAtoms onClick={() => {}} size="large" />);
    expect(screen.getByText('Facebook でログイン').closest('div')).toHaveClass(
      'sns-round-button-atoms-large',
    );
  });

  // クリックイベントのテスト
  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<FacebookRoundButtonAtoms onClick={handleClick} />);

    const button = screen.getByText('Facebook でログイン');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // アクセシビリティのテスト
  test('has correct accessibility attributes', () => {
    render(<FacebookRoundButtonAtoms onClick={() => {}} />);

    const button = screen.getByText('Facebook でログイン');
    expect(button.closest('div')).toHaveAttribute('role', 'button');
    expect(button.closest('div')).toHaveAttribute('tabindex', '0');
  });
});
