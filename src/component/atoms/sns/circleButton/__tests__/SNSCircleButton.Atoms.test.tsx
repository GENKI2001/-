import { fireEvent, render } from '@testing-library/react';
import { FacebookCircleButtonAtoms } from '../SNSCircleButton.Atoms';

describe('FacebookCircleButtonAtoms', () => {
  it('should trigger onClick when clicked', () => {
    const handleClick = jest.fn(); // モック関数を作成
    const { getByRole } = render(
      <FacebookCircleButtonAtoms onClick={handleClick} size="medium" />,
    );

    const button = getByRole('button'); // ボタン要素を取得
    fireEvent.click(button); // クリックイベントを発火

    expect(handleClick).toHaveBeenCalled(); // 関数が呼び出されたことを確認
  });
});
