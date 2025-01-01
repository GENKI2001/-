import { act, renderHook } from '@testing-library/react';
import { usePopupClose } from '../usePopupClose.hooks';

describe('usePopupClose', () => {
  it('handleMouseDownとhandleMouseUpが両方呼ばれたときにonCloseが実行される', () => {
    const onCloseMock = jest.fn();
    const { result } = renderHook(() => usePopupClose(onCloseMock));

    // handleMouseDown を呼び出す
    act(() => {
      result.current.handleMouseDown();
    });

    // handleMouseUp を呼び出す
    act(() => {
      result.current.handleMouseUp();
    });

    // onClose が呼び出されていることを確認
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('handleMouseDownが呼ばれない場合、handleMouseUpを呼んでもonCloseは実行されない', () => {
    const onCloseMock = jest.fn();
    const { result } = renderHook(() => usePopupClose(onCloseMock));

    // handleMouseUp を呼び出す
    act(() => {
      result.current.handleMouseUp();
    });

    // onClose が呼び出されていないことを確認
    expect(onCloseMock).not.toHaveBeenCalled();
  });

  it('handleResetが呼び出された後は状態がリセットされる', () => {
    const onCloseMock = jest.fn();
    const { result } = renderHook(() => usePopupClose(onCloseMock));

    // handleMouseDown を呼び出す
    act(() => {
      result.current.handleMouseDown();
    });

    // handleReset を呼び出す
    act(() => {
      result.current.handleReset();
    });

    // handleMouseUp を呼び出しても onClose が呼び出されないことを確認
    act(() => {
      result.current.handleMouseUp();
    });

    expect(onCloseMock).not.toHaveBeenCalled();
  });

  it('handleMouseDownが呼ばれた後にhandleMouseUpが呼ばれなければonCloseは実行されない', () => {
    const onCloseMock = jest.fn();
    const { result } = renderHook(() => usePopupClose(onCloseMock));

    // handleMouseDown を呼び出す
    act(() => {
      result.current.handleMouseDown();
    });

    // onClose が呼び出されていないことを確認
    expect(onCloseMock).not.toHaveBeenCalled();
  });
});
