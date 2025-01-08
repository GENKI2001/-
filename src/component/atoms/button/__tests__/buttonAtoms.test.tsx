import { fireEvent, render, screen } from '@testing-library/react';
import ButtonAtoms from '../Button.Atoms';
import { ButtonSizeType } from '../Button.type';

describe('ButtonAtoms component', () => {
  it('クリックした時にonClickが1回作動する。', () => {
    const handleClick = jest.fn();
    render(<ButtonAtoms onClick={handleClick}>Click Me</ButtonAtoms>);

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('クリックした時にdisabledの場合はonClickが作動しない', () => {
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

  it('sizeが正しく適用される', () => {
    const size: ButtonSizeType = 'large';
    render(
      <ButtonAtoms onClick={() => {}} size={size}>
        Large Button
      </ButtonAtoms>,
    );

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass(size);
  });

  it('widthが正しく適用される', () => {
    const width = '100px';
    render(
      <ButtonAtoms onClick={() => {}} width={width}>
        Width Button
      </ButtonAtoms>,
    );

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle({ width });
  });

  it('heightが正しく適用される', () => {
    const height = '100px';
    render(
      <ButtonAtoms onClick={() => {}} height={height}>
        Height Button
      </ButtonAtoms>,
    );

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle({ height });
  });

  it('paddingが正しく適用される', () => {
    const padding = '10px';
    render(
      <ButtonAtoms onClick={() => {}} padding={padding}>
        Padding Button
      </ButtonAtoms>,
    );

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle({ padding });
  });
});
