import { act, fireEvent, render, screen } from '@testing-library/react';
import PopoverAtoms from '../Popover.Atoms';

// タイマーをモック化（useVisibleAnimationのタイムアウト用）
jest.useFakeTimers();

describe('PopoverAtoms', () => {
  beforeEach(() => {
    jest.clearAllTimers();
  });

  it('子要素が正しくレンダリングされること', () => {
    render(
      <PopoverAtoms content={<div>Popover Content</div>}>
        <button>Trigger</button>
      </PopoverAtoms>,
    );

    expect(screen.getByText('Trigger')).toBeInTheDocument();
  });

  it('hover時にポップオーバーが表示されること', async () => {
    render(
      <PopoverAtoms trigger="hover" content={<div>Content</div>}>
        <button>Trigger</button>
      </PopoverAtoms>,
    );

    const trigger = screen.getByText('Trigger').parentElement!;

    // マウスオーバー
    await act(async () => {
      fireEvent.mouseEnter(trigger);
    });

    const popover = screen.getByRole('tooltip');
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(popover).toHaveClass('popover-atoms', 'popover-bottom');

    // マウスアウト
    await act(async () => {
      fireEvent.mouseLeave(trigger);
      jest.advanceTimersByTime(100); // usePopoverのタイムアウト
    });

    expect(popover).toHaveClass('popover-atoms', 'popover-bottom', 'closing');
  });

  it('click triggerの場合、クリックでポップオーバーが開閉すること', async () => {
    render(
      <PopoverAtoms content={<div>Content</div>} trigger="click">
        <button>Trigger</button>
      </PopoverAtoms>,
    );

    const trigger = screen.getByText('Trigger').parentElement!;

    // 1回目のクリック（開く）
    await act(async () => {
      fireEvent.click(trigger);
    });
    // ポップオーバーが開くまでの時間を待つ
    jest.advanceTimersByTime(100);

    expect(trigger).toHaveAttribute('aria-expanded', 'true');

    const popover = screen.getByRole('tooltip');

    // 2回目のクリック（閉じる）
    await act(async () => {
      fireEvent.click(trigger);
    });
    // ポップオーバーが開くまでの時間を待つ
    jest.advanceTimersByTime(100);

    expect(popover).toHaveClass('popover-atoms', 'popover-bottom', 'closing');
  });

  it('click triggerの場合、外側をクリックすると閉じること', async () => {
    render(
      <PopoverAtoms content={<div>Content</div>} trigger="click">
        <button>Trigger</button>
      </PopoverAtoms>,
    );

    const trigger = screen.getByText('Trigger').parentElement!;

    // ポップオーバーを開く
    await act(async () => {
      fireEvent.click(trigger);
    });

    const popover = screen.getByRole('tooltip');
    expect(trigger).toHaveAttribute('aria-expanded', 'true');

    // 外側をクリック
    await act(async () => {
      fireEvent.mouseDown(document.body);
    });
    // ポップオーバーが閉じるまでの時間を待つ
    jest.advanceTimersByTime(100);

    expect(popover).toHaveClass('popover-atoms', 'popover-bottom', 'closing');
  });

  it('異なるplacementが正しく適用されること', async () => {
    const { rerender } = render(
      <PopoverAtoms
        content={<div>Content</div>}
        trigger="click"
        placement="top"
      >
        <button>Trigger</button>
      </PopoverAtoms>,
    );
    const trigger = screen.getByText('Trigger').parentElement!;
    // ポップオーバーを開く
    await act(async () => {
      fireEvent.click(trigger);
    });

    let popover = screen.getByRole('tooltip');
    expect(popover).toHaveClass('popover-atoms', 'popover-top');
  });

  it('アクセシビリティ属性が正しく設定されること', () => {
    render(
      <PopoverAtoms content={<div>Content</div>}>
        <button>Trigger</button>
      </PopoverAtoms>,
    );

    const trigger = screen.getByText('Trigger').parentElement;

    expect(trigger).toHaveAttribute('role', 'button');
    expect(trigger).toHaveAttribute('tabIndex', '0');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    expect(trigger).toHaveAttribute('aria-haspopup', 'true');
  });

  it('デフォルトのpropsが正しく適用されること', async () => {
    render(
      <PopoverAtoms content={<div>Content</div>}>
        <button>Trigger</button>
      </PopoverAtoms>,
    );

    const trigger = screen.getByText('Trigger').parentElement!;
    // ポップオーバーを開く
    await act(async () => {
      fireEvent.click(trigger);
    });

    const popover = screen.getByRole('tooltip');
    expect(popover).toHaveClass('popover-atoms', 'popover-bottom');
  });
});
