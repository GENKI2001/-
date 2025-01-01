import { render, screen } from '@testing-library/react';
import { SelectorAtomsProps, SelectorOption } from '../Selector.type';
import SelectorAtoms from './../Selector.Atoms';

describe('SelectorAtoms', () => {
  const mockOptions: SelectorOption[] = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3', disabled: true },
  ];

  const defaultProps: SelectorAtomsProps = {
    options: mockOptions,
    value: '1',
    onChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('セレクターが正しく表示される', () => {
    render(<SelectorAtoms {...defaultProps} />);

    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  test('プレースホルダーが正しく表示される', () => {
    render(
      <SelectorAtoms
        {...defaultProps}
        value=""
        placeholder="選択してください"
      />,
    );

    expect(screen.getByText('選択してください')).toBeInTheDocument();
  });

  test('無効状態が正しく反映される', () => {
    render(<SelectorAtoms {...defaultProps} disabled={true} />);

    const wrapper = screen.getByText('Option 1').closest('.select-wrapper');
    expect(wrapper).toHaveClass('disabled');
  });
});
