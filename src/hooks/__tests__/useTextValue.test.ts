import { act, renderHook } from '@testing-library/react';
import useTextValue from '../useTextValue';

describe('useTextValue カスタムフックのテスト', () => {
  it('初期値が正しく設定される', () => {
    const { result } = renderHook(() => useTextValue('初期値'));
    expect(result.current.value).toBe('初期値');
  });

  it('初期値が指定されない場合は空文字で初期化される', () => {
    const { result } = renderHook(() => useTextValue());
    expect(result.current.value).toBe('');
  });

  it('handleChange で値が更新される', () => {
    const { result } = renderHook(() => useTextValue());
    act(() => {
      result.current.handleChange('新しい値');
    });
    expect(result.current.value).toBe('新しい値');
  });

  it('handleReset で値が空文字にリセットされる', () => {
    const { result } = renderHook(() => useTextValue('リセット前の値'));
    act(() => {
      result.current.handleReset();
    });
    expect(result.current.value).toBe('');
  });

  it('複数回の値の更新とリセットが正しく動作する', () => {
    const { result } = renderHook(() => useTextValue('開始値'));

    // 値を更新
    act(() => {
      result.current.handleChange('1回目の更新');
    });
    expect(result.current.value).toBe('1回目の更新');

    // 値をさらに更新
    act(() => {
      result.current.handleChange('2回目の更新');
    });
    expect(result.current.value).toBe('2回目の更新');

    // 値をリセット
    act(() => {
      result.current.handleReset();
    });
    expect(result.current.value).toBe('');
  });
});
