import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProgressBarAtoms from '../ProgressBar.Atoms';

describe('ProgressBarAtoms コンポーネント', () => {
  // コンポーネントが正しくレンダリングされることをテスト
  it('プログレスバーコンポーネントが正しくレンダリングされること', () => {
    render(<ProgressBarAtoms progress={50} />);
    const progressBar = screen.getByRole('progressbar', { hidden: true });
    expect(progressBar).toBeInTheDocument();
  });

  // プログレス値に応じて正しい幅が設定されることをテスト
  it('プログレス値に応じて正しい幅のスタイルが適用されること', () => {
    const { container } = render(<ProgressBarAtoms progress={75} />);
    const progressFill = container.querySelector('.progress-fill');
    expect(progressFill).toHaveStyle({ width: '75%' });
  });

  // 不正な値の処理をテスト（最小値）
  it('マイナスの値が入力された場合、0%にクランプされること', () => {
    const { container } = render(<ProgressBarAtoms progress={-20} />);
    const progressFill = container.querySelector('.progress-fill');
    expect(progressFill).toHaveStyle({ width: '0%' });
  });

  // 不正な値の処理をテスト（最大値）
  it('100を超える値が入力された場合、100%にクランプされること', () => {
    const { container } = render(<ProgressBarAtoms progress={120} />);
    const progressFill = container.querySelector('.progress-fill');
    expect(progressFill).toHaveStyle({ width: '100%' });
  });

  // 必要なCSSクラスが適用されていることをテスト
  it('必要なCSSクラスが全て適用されていること', () => {
    const { container } = render(<ProgressBarAtoms progress={50} />);

    // コンテナのクラス確認
    const progressContainer = container.querySelector('.progress-container');
    expect(progressContainer).toBeInTheDocument();

    // プログレスバーのクラス確認
    const progressBar = container.querySelector('.progress-bar');
    expect(progressBar).toBeInTheDocument();

    // プログレスフィルのクラス確認
    const progressFill = container.querySelector('.progress-fill');
    expect(progressFill).toBeInTheDocument();
  });

  // 小数点を含むプログレス値のテスト
  it('小数点を含むプログレス値が正しく処理されること', () => {
    const { container } = render(<ProgressBarAtoms progress={33.33} />);
    const progressFill = container.querySelector('.progress-fill');
    expect(progressFill).toHaveStyle({ width: '33.33%' });
  });
});
