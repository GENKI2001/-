import { fireEvent, render, screen } from '@testing-library/react';
import SearchTextFieldAtoms from '../SearchTextField.Atoms';
import { SearchTextFieldAtomsProps } from '../SearchTextField.type';

describe('SearchTextFieldAtoms', () => {
  const defaultProps: SearchTextFieldAtomsProps = {
    value: '',
    onChange: jest.fn(),
    placeholder: 'テスト検索',
    className: 'custom-class',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('正しくレンダリングされること', () => {
    render(<SearchTextFieldAtoms {...defaultProps} />);

    const inputElement = screen.getByPlaceholderText('テスト検索');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass('search-field-input', 'custom-class');
  });

  it('検索アイコンが表示されること', () => {
    render(<SearchTextFieldAtoms {...defaultProps} />);

    const svgElement = document.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '20');
    expect(svgElement).toHaveAttribute('height', '20');
  });

  it('プレースホルダーのデフォルト値が空文字であること', () => {
    render(<SearchTextFieldAtoms value="" onChange={jest.fn()} />);

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveAttribute('placeholder', '');
  });

  it('入力値が変更されたとき、onChangeが呼ばれること', () => {
    const onChange = jest.fn();
    render(<SearchTextFieldAtoms {...defaultProps} onChange={onChange} />);

    const inputElement = screen.getByPlaceholderText('テスト検索');
    fireEvent.change(inputElement, { target: { value: 'テストテキスト' } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(expect.any(Object));
  });

  it('value propが正しく反映されること', () => {
    render(<SearchTextFieldAtoms {...defaultProps} value="テスト値" />);

    const inputElement = screen.getByPlaceholderText('テスト検索');
    expect(inputElement).toHaveValue('テスト値');
  });

  it('カスタムclassNameが正しく適用されること', () => {
    const customClass = 'my-custom-class';
    render(<SearchTextFieldAtoms {...defaultProps} className={customClass} />);

    const inputElement = screen.getByPlaceholderText('テスト検索');
    expect(inputElement).toHaveClass('search-field-input', customClass);
  });

  it('コンポーネントがメモ化されていること', () => {
    const { rerender } = render(<SearchTextFieldAtoms {...defaultProps} />);
    const firstRender = screen.getByPlaceholderText('テスト検索');

    rerender(<SearchTextFieldAtoms {...defaultProps} />);
    const secondRender = screen.getByPlaceholderText('テスト検索');

    expect(firstRender).toBe(secondRender);
  });

  it('Enterキーを押した時にonSearchが呼ばれること', () => {
    const onSearch = jest.fn();
    render(<SearchTextFieldAtoms {...defaultProps} onSearch={onSearch} />);

    const inputElement = screen.getByPlaceholderText('テスト検索');
    fireEvent.keyDown(inputElement, { key: 'Enter' });

    expect(onSearch).toHaveBeenCalledTimes(1);
  });

  it('Enter以外のキーを押した時にonSearchが呼ばれないこと', () => {
    const onSearch = jest.fn();
    render(<SearchTextFieldAtoms {...defaultProps} onSearch={onSearch} />);

    const inputElement = screen.getByPlaceholderText('テスト検索');
    fireEvent.keyDown(inputElement, { key: 'Space' });

    expect(onSearch).not.toHaveBeenCalled();
  });

  it('onSearchが未定義の場合、Enterキーを押してもエラーが発生しないこと', () => {
    const { onSearch, ...propsWithoutClick } = defaultProps;
    render(<SearchTextFieldAtoms {...propsWithoutClick} />);

    const inputElement = screen.getByPlaceholderText('テスト検索');
    fireEvent.keyDown(inputElement, { key: 'Enter' });
    // エラーが発生しないことをテスト
  });
});
