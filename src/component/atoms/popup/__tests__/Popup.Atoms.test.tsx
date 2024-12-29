import { fireEvent, render, screen } from '@testing-library/react';
import PopupAtoms from '../Popup.Atoms';

describe('PopupAtoms', () => {
  it('openがfalseの時、nullが返ってくるかどうか', () => {
    render(
      <PopupAtoms open={false} onClose={jest.fn()}>
        {'Popup Content'}
      </PopupAtoms>,
    );
    const popupOverlay = screen.queryByRole('overlay');
    expect(popupOverlay).toBeNull();
  });

  it('openがtrueの時、正しくレンダリングされているかどうか', () => {
    render(
      <PopupAtoms open={true} onClose={jest.fn()}>
        <div>Popup Content</div>
      </PopupAtoms>,
    );
    const popupOverlay = screen.queryByRole('overlay');
    expect(popupOverlay).toBeInTheDocument();
    const popupContent = screen.getByText('Popup Content');
    expect(popupContent).toBeInTheDocument();
  });

  it('(PC版) overlayをmouse down -> upしたらonCloseが作動する', () => {
    const onClose = jest.fn();
    render(
      <PopupAtoms open={true} onClose={onClose}>
        {'Popup Content'}
      </PopupAtoms>,
    );

    const overlay = screen.getByRole('overlay');
    fireEvent.mouseDown(overlay);
    fireEvent.mouseUp(overlay);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('(Mobile版) overlayをtouch start -> endしたらonCloseが作動する', () => {
    const onClose = jest.fn();
    render(
      <PopupAtoms open={true} onClose={onClose}>
        {'Popup Content'}
      </PopupAtoms>,
    );

    const overlay = screen.getByRole('overlay');
    fireEvent.touchStart(overlay);
    fireEvent.touchEnd(overlay);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('(PC版) overlayをmouseupだけしても、onCloseが作動しない(他の箇所でドラッグ)', () => {
    const onClose = jest.fn();
    render(
      <PopupAtoms open={true} onClose={onClose}>
        {'Popup Content'}
      </PopupAtoms>,
    );

    const overlay = screen.getByRole('overlay');
    fireEvent.mouseUp(overlay);
    expect(onClose).toHaveBeenCalledTimes(0);
  });

  it('(Mobile版) overlayをtouch startだけしても、onCloseが作動しない(他の箇所でドラッグ)', () => {
    const onClose = jest.fn();
    render(
      <PopupAtoms open={true} onClose={onClose}>
        {'Popup Content'}
      </PopupAtoms>,
    );

    const overlay = screen.getByRole('overlay');
    fireEvent.touchStart(overlay);
    expect(onClose).toHaveBeenCalledTimes(0);
  });

  it('(PC版) overlayをmouse downだけしても、onCloseが作動しない(他の箇所でドラッグ)', () => {
    const onClose = jest.fn();
    render(
      <PopupAtoms open={true} onClose={onClose}>
        {'Popup Content'}
      </PopupAtoms>,
    );

    const overlay = screen.getByRole('overlay');
    fireEvent.mouseDown(overlay);
    expect(onClose).toHaveBeenCalledTimes(0);
  });

  it('(Mobile版) overlayをtouchEndだけしても、onCloseが作動しない(他の箇所でドラッグ)', () => {
    const onClose = jest.fn();
    render(
      <PopupAtoms open={true} onClose={onClose}>
        {'Popup Content'}
      </PopupAtoms>,
    );

    const overlay = screen.getByRole('overlay');
    fireEvent.touchEnd(overlay);
    expect(onClose).toHaveBeenCalledTimes(0);
  });

  it('(PC+Mobile版) popupをクリック(touch start -> end)しても、onCloseが作動しない。', () => {
    const onClose = jest.fn();
    render(
      <PopupAtoms open={true} onClose={onClose}>
        {'Popup Content'}
      </PopupAtoms>,
    );

    const popup = screen.getByRole('dialog');
    fireEvent.click(popup);
    expect(onClose).toHaveBeenCalledTimes(0);
    fireEvent.touchStart(popup);
    fireEvent.touchEnd(popup);
    expect(onClose).toHaveBeenCalledTimes(0);
  });

  it('閉じるボタンが押された時に、ポップアップが閉じる', () => {
    const onCloseMock = jest.fn();

    render(
      <PopupAtoms open={true} onClose={onCloseMock}>
        <div>Popup Content</div>
      </PopupAtoms>,
    );

    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
