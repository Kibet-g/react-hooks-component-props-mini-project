import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../components/App";

test("renders the correct child components", () => {
  const { container } = render(<App />);
  
  // Check that the .App container is rendered
  expect(container.querySelector(".App")).toBeInTheDocument();
  
  // Check if each child component's content is rendered
  expect(container.querySelector("header")).toBeInTheDocument(); // assuming Header component renders a <header>
  expect(container.querySelector("article")).toBeInTheDocument(); // assuming Article renders an <article>
  expect(container.querySelector("main")).toBeInTheDocument(); // if one of the components renders a <main>

  // Optional: If the other components don't use these specific tags, test for their classnames or specific text content instead.
});
