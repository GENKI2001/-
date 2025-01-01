import { render, screen } from '@testing-library/react';
import ImgAtoms from '../Img.Atoms';

describe('Logoコンポーネント', () => {
  it('img_srcが指定された場合、画像が表示される', () => {
    const imageSrc = 'https://example.com/logo.png';
    render(<ImgAtoms img_src={imageSrc} />); // 画像のソースを渡してコンポーネントをレンダリング
    const imgElement = screen.getByRole('img'); // 画像要素を取得

    // 画像が存在し、正しいsrc属性を持っていることを確認
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', imageSrc);
  });

  it('alt属性が正しく適用される', () => {
    const alt = 'custom-alt'; // alt属性の値
    render(<ImgAtoms img_src="" alt={alt} />); // alt属性を渡してコンポーネントをレンダリング
    const imgElement = screen.getByAltText(alt); // alt属性を持つ要素を取得

    // alt属性が正しく適用されている画像が存在することを確認
    expect(imgElement).toBeInTheDocument();
  });
});
