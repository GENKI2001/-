import { act, fireEvent, renderHook } from '@testing-library/react';
import { SelectorOption, useSelector } from '../useSelector';

describe('useSelector', () => {
  // テストで使用する共通のオプション
  const mockOptions: SelectorOption[] = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3', disabled: true },
  ];

  // デフォルトのprops
  const defaultProps = {
    options: mockOptions,
    value: '1',
    onOptionValueChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('初期状態が正しく設定されている', () => {
    const { result } = renderHook(() => useSelector(defaultProps));

    expect(result.current.open).toBe(false);
    expect(result.current.highlightedIndex).toBeNull();
    expect(result.current.selectedOption).toEqual(mockOptions[0]);
  });

  test('valueと一致するoptionが見つからない場合、selectedOptionがnullとなる', () => {
    // デフォルトのprops
    const props = {
      options: mockOptions,
      value: '0',
      onOptionValueChange: jest.fn(),
    };
    const { result } = renderHook(() => useSelector(props));

    expect(result.current.selectedOption).toEqual(null);
  });

  test('セレクトボックスをクリックするとopenステートが切り替わる', () => {
    const { result } = renderHook(() => useSelector(defaultProps));

    act(() => {
      result.current.handleSelectClick();
    });

    expect(result.current.open).toBe(true);

    act(() => {
      result.current.handleSelectClick();
    });

    expect(result.current.open).toBe(false); // 2回目のクリックでは閉じる
  });

  test('disabled状態の場合、クリックしてもopenステートが変化しない', () => {
    const { result } = renderHook(() =>
      useSelector({ ...defaultProps, disabled: true }),
    );

    act(() => {
      result.current.handleSelectClick();
    });

    expect(result.current.open).toBe(false);
  });

  test('オプションを選択すると、onOptionChangeが呼ばれて、セレクターが閉じる', () => {
    const { result } = renderHook(() => useSelector(defaultProps));

    act(() => {
      result.current.handleOptionClick('2');
    });

    expect(defaultProps.onOptionValueChange).toHaveBeenCalledWith('2');
    expect(result.current.open).toBe(false);
  });

  test('ハイライトインデックスが正しく更新される', () => {
    const { result } = renderHook(() => useSelector(defaultProps));

    act(() => {
      result.current.setHighlightedIndex(1);
    });

    expect(result.current.highlightedIndex).toBe(1);
  });

  test('セレクター外のクリックで閉じる', () => {
    // divタグを作成してdocumentに追加
    const outsideDiv = document.createElement('div');
    document.body.appendChild(outsideDiv);

    const { result } = renderHook(() => useSelector(defaultProps));

    // セレクターのラッパー要素を作成
    const wrapper = document.createElement('div');
    // useRefの値を設定
    if (result.current.wrapperRef.current === null) {
      // @ts-ignore - private propertyへのアクセス
      result.current.wrapperRef.current = wrapper;
    }

    // セレクターを開く
    act(() => {
      result.current.handleSelectClick();
    });
    expect(result.current.open).toBe(true);

    // セレクター外のクリック
    act(() => {
      fireEvent.mouseDown(outsideDiv);
    });
    expect(result.current.open).toBe(false);

    // クリーンアップ
    document.body.removeChild(outsideDiv);
  });

  test('セレクター外のタッチで閉じる', () => {
    // divタグを作成してdocumentに追加
    const outsideDiv = document.createElement('div');
    document.body.appendChild(outsideDiv);

    const { result } = renderHook(() => useSelector(defaultProps));

    // セレクターのラッパー要素を作成
    const wrapper = document.createElement('div');
    // useRefの値を設定
    if (result.current.wrapperRef.current === null) {
      // @ts-ignore - private propertyへのアクセス
      result.current.wrapperRef.current = wrapper;
    }

    // セレクターを開く
    act(() => {
      result.current.handleSelectClick();
    });
    expect(result.current.open).toBe(true);

    // セレクター外のクリック
    act(() => {
      fireEvent.touchStart(outsideDiv);
    });
    expect(result.current.open).toBe(false);

    // クリーンアップ
    document.body.removeChild(outsideDiv);
  });
});
