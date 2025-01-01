import { fireEvent, render, screen } from '@testing-library/react';
import RadioButtonAtoms from '../RadioButton.Atoms';

describe('RadioButtonAtoms', () => {
  const defaultProps = {
    checked: false,
    onClick: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('正しくレンダリングされること', () => {
    render(<RadioButtonAtoms {...defaultProps} />);
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  it('チェック状態が正しく反映されること', () => {
    render(<RadioButtonAtoms {...defaultProps} checked={true} />);
    expect(screen.getByRole('radio')).toBeChecked();
  });

  it('子要素が正しくレンダリングされること', () => {
    const childText = 'テストラベル';
    render(<RadioButtonAtoms {...defaultProps}>{childText}</RadioButtonAtoms>);
    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  describe('クリックイベントのハンドリング', () => {
    it('デスクトップでクリックイベントが発火すること', () => {
      render(<RadioButtonAtoms {...defaultProps}>label</RadioButtonAtoms>);

      fireEvent.click(screen.getByRole('radio'));
      expect(defaultProps.onClick).toHaveBeenCalledTimes(1);

      const label = screen.getByText('label').closest('div');
      if (label) {
        fireEvent.click(label);
        expect(defaultProps.onClick).toHaveBeenCalledTimes(2);
      }
    });

    it('モバイルでタッチイベントが発火すること', () => {
      render(
        <RadioButtonAtoms {...defaultProps} isMobile>
          label
        </RadioButtonAtoms>,
      );

      fireEvent.touchStart(screen.getByRole('radio'));
      expect(defaultProps.onClick).toHaveBeenCalledTimes(1);

      const label = screen.getByText('label').closest('div');
      if (label) {
        fireEvent.touchStart(label);
        expect(defaultProps.onClick).toHaveBeenCalledTimes(2);
      }
    });
  });

  describe('サイズバリエーション', () => {
    it('デフォルトでsmallサイズが適用されること', () => {
      render(<RadioButtonAtoms {...defaultProps} />);
      expect(screen.getByRole('radio')).toHaveClass('small');
    });

    it('指定したサイズが適用されること', () => {
      render(<RadioButtonAtoms {...defaultProps} size="large" />);
      expect(screen.getByRole('radio')).toHaveClass('large');
    });
  });
});
