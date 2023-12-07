import React from "react";
import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import Success from "./Success";
import Button from "../UI/Button";

jest.mock("react-dom", () => {
  const original = jest.requireActual("react-dom");
  return {
    ...original,
    createPortal: (node) => node,
  };
}); //it mocks the react-dom and intercepts the usage of createPortal, by simply returning the node that is supplied to it

describe("Success Component", () => {
  test("checks if the modal is rendered properly", () => {
    const { getByText } = render(<Success />);
    expect(getByText("Success!")).toBeInTheDocument();
    expect(
      getByText(
        "Your order was Succesfully placed. you will recive a call shortly for conformation"
      )
    ).toBeInTheDocument();
  });

  test("Checks if the button is being rendered", () => {
    const { getByText } = render(<Success />);
    const closeButton = getByText("Close");
    expect(closeButton).toBeInTheDocument();
  });

  test("The Modal Closes when the Closed button is clicked", () => {
    const { getByText, queryByRole } = render(<Success />);
    const closeButton = getByText("Close");
    fireEvent.click(closeButton);
    const modal = queryByRole("dialog"); // using queryBy as we want to verify if it stil is present or not
    expect(modal).toBeNull();
  });
});
