import { fireEvent, render, screen } from '@testing-library/react';
import RadioButtonAtoms from '../RadioButton.Atoms';
import { RadioButtonAtomsProps } from '../RadioButton.type';

describe('RadioButtonAtoms', () => {
  const mockOnChange = jest.fn();
  const defaultProps: RadioButtonAtomsProps = {
    checked: false,
    onChange: mockOnChange,
  };

  beforeEach(() => {
    mockOnChange.mockClear();
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
      expect(defaultProps.onChange).toHaveBeenCalledTimes(1);

      const label = screen.getByText('label').closest('div');
      if (label) {
        fireEvent.click(label);
        expect(defaultProps.onChange).toHaveBeenCalledTimes(2);
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
