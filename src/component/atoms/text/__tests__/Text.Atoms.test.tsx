import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { TextAtoms } from '../Text.Atoms';

describe('TextAtoms', () => {
  // 基本的なレンダリングテスト
  it('テキストが正しくレンダリングされること', () => {
    render(<TextAtoms text="サンプルテキスト" />);
    expect(screen.getByText('サンプルテキスト')).toBeInTheDocument();
  });

  // サイズのテスト
  it('指定されたサイズのクラスが適用されること', () => {
    const { container } = render(<TextAtoms text="テキスト" size="small" />);
    expect(container.firstChild).toHaveClass('text-atoms-small');
  });

  // デフォルトサイズのテスト
  it('サイズが指定されていない場合はmediumが適用されること', () => {
    const { container } = render(<TextAtoms text="テキスト" />);
    expect(container.firstChild).toHaveClass('text-atoms-medium');
  });

  // カスタムクラス名のテスト
  it('追加のクラス名が正しく適用されること', () => {
    const { container } = render(
      <TextAtoms text="テキスト" className="custom-class" />,
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  // クリックイベントのテスト
  it('クリックイベントが正しく発火すること', () => {
    const handleClick = jest.fn();
    render(<TextAtoms text="クリック可能" onClick={handleClick} />);

    fireEvent.click(screen.getByText('クリック可能'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // クリックイベントがある場合のカーソルスタイルのテスト
  it('クリックイベントがある場合、カーソルがpointerになること', () => {
    const { container } = render(
      <TextAtoms text="クリック可能" onClick={() => {}} />,
    );
    expect(container.firstChild).toHaveStyle({ cursor: 'pointer' });
  });
});
