// src/components/Button.test.tsx
const { render, screen, fireEvent } = require("@testing-library/react");
const { Button } = require("../components/button");

describe("Button Component", () => {
  it("should render the button with the correct text", () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("should apply the correct variant class", () => {
    render(<Button variant="warning">Warning Button</Button>);
    const buttonElement = screen.getByText(/warning button/i);
    expect(buttonElement).toHaveClass("warning");
  });

  it("should call onClick when the button is clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should apply additional class names", () => {
    render(<Button className="extra-class">Click me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toHaveClass("extra-class");
  });
});
