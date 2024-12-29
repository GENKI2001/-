import { act, renderHook } from '@testing-library/react';
import useOpen from '../useOpen';

describe('useAuthPopup', () => {
  it('デフォルト初期値がclose(open: false)となっていること', () => {
    const { result } = renderHook(() => useOpen());

    expect(result.current.open).toBe(false);
  });

  it('初期値を受け取ったらその値となっていること', () => {
    const { result } = renderHook(() => useOpen(true));

    expect(result.current.open).toBe(true);
  });

  it('handleOpenによってopenすること', () => {
    const { result } = renderHook(() => useOpen());

    act(() => {
      result.current.handleOpen();
    });

    expect(result.current.open).toBe(true);
  });

  it('handleCloseによってcloseすること', () => {
    const { result } = renderHook(() => useOpen(true));

    act(() => {
      result.current.handleClose();
    });

    expect(result.current.open).toBe(false);
  });

  it('handleChangeによってopenが変化すること(true -> false)', () => {
    const { result } = renderHook(() => useOpen(true));

    act(() => {
      result.current.handleChangeOpen();
    });

    expect(result.current.open).toBe(false);
  });

  it('handleChangeによってopenが変化すること(false -> true)', () => {
    const { result } = renderHook(() => useOpen(false));

    act(() => {
      result.current.handleChangeOpen();
    });

    expect(result.current.open).toBe(true);
  });
});
