import { act, renderHook } from '@testing-library/react';
import { PopoverTrigger } from '../Popover.type';
import { usePopover } from '../usePopover.hooks';

// タイマーをモック化
jest.useFakeTimers();

describe('usePopover', () => {
  beforeEach(() => {
    // 各テスト前にモックとタイマーをリセット
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  describe('クリックトリガーの場合', () => {
    const setup = () => {
      return renderHook(() =>
        usePopover({ trigger: 'click' as PopoverTrigger }),
      );
    };

    it('初期状態では閉じているべき', () => {
      const { result } = setup();
      expect(result.current.open).toBeFalsy();
    });

    it('クリックで開閉状態が切り替わるべき', () => {
      const { result } = setup();

      // 開く
      act(() => {
        result.current.handlers.handleClick();
      });
      expect(result.current.open).toBeTruthy();

      // 閉じる
      act(() => {
        result.current.handlers.handleClick();
      });
      expect(result.current.open).toBeFalsy();
    });

    it('外側をクリックしたら閉じるべき', () => {
      const { result } = setup();

      // ポップオーバーを開く
      act(() => {
        result.current.handlers.handleClick();
      });
      expect(result.current.open).toBeTruthy();

      // 外側クリックをシミュレート
      const mouseEvent = new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true,
      });

      act(() => {
        document.dispatchEvent(mouseEvent);
      });
      expect(result.current.open).toBeFalsy();
    });
  });

  describe('ホバートリガーの場合', () => {
    const setup = () => {
      return renderHook(() =>
        usePopover({ trigger: 'hover' as PopoverTrigger }),
      );
    };

    it('マウスが入ったら開くべき', () => {
      const { result } = setup();

      act(() => {
        result.current.handlers.handleMouseEnter();
      });
      expect(result.current.open).toBeTruthy();
    });

    it('マウスが離れたら一定時間後に閉じるべき', () => {
      const { result } = setup();

      // マウスが入る
      act(() => {
        result.current.handlers.handleMouseEnter();
      });
      expect(result.current.open).toBeTruthy();

      // マウスが離れる
      act(() => {
        result.current.handlers.handleMouseLeave();
      });

      // タイムアウト時間を進める
      act(() => {
        jest.advanceTimersByTime(20);
      });

      expect(result.current.open).toBeFalsy();
    });

    it('マウスが再度入ったらタイムアウトがキャンセルされるべき', () => {
      const { result } = setup();

      // 閉じるタイムアウトを開始
      act(() => {
        result.current.handlers.handleMouseLeave();
      });

      // タイムアウト完了前にマウスが入る
      act(() => {
        result.current.handlers.handleMouseEnter();
      });

      // タイムアウト時間を進める
      act(() => {
        jest.advanceTimersByTime(20);
      });

      expect(result.current.open).toBeTruthy();
    });

    it('クリックイベントに反応しないべき', () => {
      const { result } = setup();

      act(() => {
        result.current.handlers.handleClick();
      });
      expect(result.current.open).toBeFalsy();
    });
  });

  it('アンマウント時にイベントリスナーが削除されるべき', () => {
    const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener');

    const { unmount } = renderHook(() =>
      usePopover({ trigger: 'click' as PopoverTrigger }),
    );

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'mousedown',
      expect.any(Function),
    );
  });
});
