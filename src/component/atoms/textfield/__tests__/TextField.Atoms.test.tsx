import { fireEvent, render, screen } from '@testing-library/react';
import TextFieldAtoms from '../TextField.Atoms';

describe('TextFieldAtoms', () => {
  it('ラベルが適切にレンダリングされる', () => {
    render(
      <TextFieldAtoms
        label="Username"
        value=""
        onChange={() => {}}
        placeholder="Enter your username"
        error={null}
      />,
    );
    const labelElement = screen.getByText('Username');
    expect(labelElement).toBeInTheDocument();
  });

  it('プレイスホルダーが適切にレンダリングされる', () => {
    render(
      <TextFieldAtoms
        label="Username"
        value=""
        onChange={() => {}}
        placeholder="Enter your username"
        error={null}
      />,
    );
    const inputElement = screen.getByPlaceholderText('Enter your username');
    expect(inputElement).toBeInTheDocument();
  });

  it('エラーメッセージが適切にレンダリングされる', () => {
    render(
      <TextFieldAtoms
        label="Username"
        value=""
        onChange={() => {}}
        error="This field is required"
      />,
    );
    const errorMessage = screen.getByText('This field is required');
    expect(errorMessage).toBeInTheDocument();
  });

  it('入力が変化した時に、onChangeが呼ばれる', () => {
    const handleChange = jest.fn();
    render(
      <TextFieldAtoms
        label="Username"
        value=""
        onChange={handleChange}
        placeholder="Enter your username"
        error={null}
      />,
    );

    const inputElement = screen.getByPlaceholderText(
      'Enter your username',
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'John' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('typeが適切に設定される', () => {
    render(
      <TextFieldAtoms
        label="Password"
        value=""
        onChange={() => {}}
        placeholder="Enter your password"
        type="password"
        error={null}
      />,
    );
    const inputElement = screen.getByPlaceholderText('Enter your password');
    expect(inputElement).toHaveAttribute('type', 'password');
  });

  it('input_class_nameが適切に設定される', () => {
    render(
      <TextFieldAtoms
        label="Password"
        value=""
        onChange={() => {}}
        placeholder="Enter your password"
        type="password"
        error={null}
        input_class_name="test"
      />,
    );
    const inputElement = screen.getByPlaceholderText('Enter your password');
    expect(inputElement).toHaveClass('test');
  });

  it('maxが指定された時に、適切にレンダリングされる', () => {
    render(
      <TextFieldAtoms
        label="Password"
        value="abc"
        onChange={() => {}}
        placeholder="Enter your password"
        error={null}
        max={3}
      />,
    );
    const inputElement = screen.getByText('3 / 3');
    expect(inputElement).toHaveClass('textfield-counter max');
  });

  it('rowsが設定されたらtextareaに切り替わる', () => {
    const { container } = render(
      <TextFieldAtoms
        label="Test Label"
        value=""
        onChange={() => {}}
        error={null}
        rows={3}
      />,
    );
    expect(container.querySelector('textarea')).toBeInTheDocument();
    expect(container.querySelector('textarea')).toHaveAttribute('rows', '3');
  });

  it('rowsが設定されなければinputのまま', () => {
    const { container } = render(
      <TextFieldAtoms
        label="Test Label"
        value=""
        onChange={() => {}}
        error={null}
      />,
    );
    expect(container.querySelector('input')).toBeInTheDocument();
  });
});
