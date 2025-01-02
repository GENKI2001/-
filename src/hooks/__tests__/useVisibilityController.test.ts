import { act, renderHook } from '@testing-library/react';
import { useVisibilityController } from '../useVisibilityController';

describe('useVisibilityController', () => {
  // アニメーション時間を設定
  const animationDuration = 300;

  // タイマーをモック化
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it('初期状態でopenがtrueの場合、isVisibleもtrueになる', () => {
    const { result } = renderHook(() =>
      useVisibilityController(true, animationDuration),
    );

    expect(result.current.isVisible).toBe(true);
    expect(result.current.isClosing).toBe(false);
  });

  it('初期状態でopenがfalseの場合、isVisibleもfalseになる', () => {
    const { result } = renderHook(() =>
      useVisibilityController(false, animationDuration),
    );

    expect(result.current.isVisible).toBe(false);
    expect(result.current.isClosing).toBe(true);
  });

  it('openがtrueからfalseに変更された場合、アニメーション後にisVisibleがfalseになる', () => {
    const { result, rerender } = renderHook(
      ({ open }) => useVisibilityController(open, animationDuration),
      {
        initialProps: { open: true },
      },
    );

    // 初期状態の確認
    expect(result.current.isVisible).toBe(true);
    expect(result.current.isClosing).toBe(false);

    // openをfalseに変更
    act(() => {
      rerender({ open: false });
    });

    // クローズアニメーションが開始された状態を確認
    expect(result.current.isVisible).toBe(true);
    expect(result.current.isClosing).toBe(true);

    // アニメーション時間経過後の状態を確認
    act(() => {
      jest.advanceTimersByTime(animationDuration);
    });

    expect(result.current.isVisible).toBe(false);
    expect(result.current.isClosing).toBe(true);
  });

  it('アニメーション中にopenがtrueに変更された場合、即座にisVisibleがtrueになる', () => {
    const { result, rerender } = renderHook(
      ({ open }) => useVisibilityController(open, animationDuration),
      {
        initialProps: { open: true },
      },
    );

    // falseに変更
    act(() => {
      rerender({ open: false });
    });

    // アニメーション中の状態を確認
    expect(result.current.isVisible).toBe(true);
    expect(result.current.isClosing).toBe(true);

    // アニメーション途中でopenをtrueに変更
    act(() => {
      rerender({ open: true });
    });

    expect(result.current.isVisible).toBe(true);
    expect(result.current.isClosing).toBe(false);
  });
});
