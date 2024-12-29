import { fireEvent, render, screen } from '@testing-library/react';
import ButtonAtoms from '../Button.Atoms';

describe('ButtonAtoms component', () => {
  it('(PC版) クリックした時にonClickが1回作動する。', () => {
    const handleClick = jest.fn();
    render(
      <ButtonAtoms isMobile={false} onClick={handleClick}>
        Click Me
      </ButtonAtoms>,
    );

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('(モバイル版) クリックした時にonClickが1回作動する。内部ではonTouchが走っている。', () => {
    const handleClick = jest.fn();
    render(
      <ButtonAtoms isMobile onClick={handleClick}>
        Click Me
      </ButtonAtoms>,
    );

    const buttonElement = screen.getByRole('button');
    fireEvent.touchStart(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('(PC版) クリックした時にdisabledの場合はonClickが作動しない', () => {
    const handleClick = jest.fn();
    render(
      <ButtonAtoms onClick={handleClick} disabled>
        Disabled
      </ButtonAtoms>,
    );

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it('(モバイル版) クリックした時にdisabledの場合はonClickが作動しない', () => {
    const handleClick = jest.fn();
    render(
      <ButtonAtoms isMobile onClick={handleClick} disabled>
        Disabled
      </ButtonAtoms>,
    );

    const buttonElement = screen.getByRole('button');
    fireEvent.touchStart(buttonElement);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it('引数として渡されたclass nameが正常に追加される', () => {
    const className = 'custom-class';
    render(
      <ButtonAtoms onClick={() => {}} className={className}>
        Class Button
      </ButtonAtoms>,
    );

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass(className);
  });

  it('childrenが正しくレンダリングされる', () => {
    const handleClick = jest.fn();
    const buttonText = 'Click Me';

    render(<ButtonAtoms onClick={handleClick}>{buttonText}</ButtonAtoms>);

    const buttonElement = screen.getByRole('button', { name: buttonText });

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(buttonText);
  });
});
