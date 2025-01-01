import { fireEvent, render, screen } from '@testing-library/react';
import Checkbox from '../Checkbox.Atoms';
import { CheckboxAtomsProps } from '../Checkbox.type';

describe('Checkbox', () => {
  const defaultProps: CheckboxAtomsProps = {
    label: 'テスト用チェックボックス',
    checked: false,
    onChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('ラベル付きのチェックボックスが正しく表示される', () => {
    render(<Checkbox {...defaultProps} />);

    const checkbox = screen.getByRole('checkbox');
    const label = screen.getByTestId('checkbox-atoms-label');

    expect(checkbox).toBeInTheDocument(); // チェックボックスが存在することを確認
    expect(label).toBeInTheDocument(); // ラベルが存在することを確認
    expect(label).toHaveTextContent('テスト用チェックボックス'); // ラベルのテキストが正しいことを確認
  });

  it('checked が true の場合、チェックされた状態になる', () => {
    render(<Checkbox {...defaultProps} checked={true} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked(); // チェックされていることを確認
  });

  it('checked が false の場合、チェックされていない状態になる', () => {
    render(<Checkbox {...defaultProps} checked={false} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked(); // チェックされていないことを確認
  });

  it('クリックすると onChange ハンドラーが呼び出される', () => {
    render(<Checkbox {...defaultProps} />);

    const checkbox = screen.getByTestId('checkbox-atoms-input');
    fireEvent.click(checkbox);

    expect(defaultProps.onChange).toHaveBeenCalledTimes(1); // onChange が1回呼び出されることを確認
  });

  it('ラベルをクリックすると onChange ハンドラーが呼び出される', () => {
    render(<Checkbox {...defaultProps} />);

    const label = screen.getByTestId('checkbox-atoms-label');
    fireEvent.click(label);

    expect(defaultProps.onChange).toHaveBeenCalledTimes(1); // onChange が1回呼び出されることを確認
  });

  it('disabled が true の場合、チェックボックスが無効化される', () => {
    render(<Checkbox {...defaultProps} disabled={true} />);

    const checkbox = screen.getByTestId('checkbox-atoms-input');
    expect(checkbox).toBeDisabled(); // チェックボックスが無効化されていることを確認
  });

  it('無効化されている場合、クリックしても onChange が呼び出されない', () => {
    render(<Checkbox {...defaultProps} disabled={true} />);

    const checkbox = screen.getByTestId('checkbox-atoms-input');
    fireEvent.click(checkbox);

    expect(defaultProps.onChange).toHaveBeenCalledTimes(0); // onChange が呼び出されないことを確認
  });
});
