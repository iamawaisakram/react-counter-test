import { getByTestId, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

/**
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @param {any} state - Initial state for the setup
 * @returns {render}
 */
const setup = (props = {}, state = null) => {
  return render(<App {...props} />);
};

/**
 * @function checkForTestId
 * @param {*} document - to search within the rendered component
 * @param {string} testid - Value of data-testid attribute for search
 * @returns {expect}
 */
const checkForTestId = (document, testid) => {
  return expect(
    getByTestId(document.documentElement, testid)
  ).toBeInTheDocument();
};

describe("Let's check for The DOM first", () => {
  it("renders the App component", () => {
    setup();
    checkForTestId(document, "container-app");
  });

  it("renders Increment Button", () => {
    setup();
    checkForTestId(document, "count-button");
  });

  it("renders counter display", () => {
    setup();
    checkForTestId(document, "current-count");
  });

  it("Check for Number Increment", () => {
    setup({ initialCount: 21 });
    userEvent.click(getByTestId(document, "count-button"));
    const element = getByTestId(document, "current-count");
    expect(element).toHaveTextContent("22");
  });
});
