import React from "react";
import { useField } from "react-jeff";
import { render, fireEvent } from "@testing-library/react";
const Foo = React.memo(function Foo() {
  const field = useField({ defaultValue: "" });
  return (
    <div>
      <input
        {...field.props}
        onChange={event => field.props.onChange(event.target.value)}
      />
    </div>
  );
});
Foo.displayName = "Foo";
describe("Foo", () => {
  test("test", () => {
    const { container, getByRole } = render(<Foo />);
    expect(container).toBeDefined();
    expect(getByRole("textbox")).toBeDefined();
    fireEvent.change(getByRole("textbox"), { target: { value: "a" } });
    expect(getByRole("textbox").value).toEqual("a");
  });
});
