import React from "react";
import { render, screen } from "@testing-library/react";
import Clock from "../Clock";

jest.useFakeTimers();

describe("Clock", () => {
  it("renders the current time", () => {
    render(<Clock />);
    const timeElement = screen.getByText(/\d{2}:\d{2}:\d{2}/);
    expect(timeElement).toBeInTheDocument();
  });

  it("updates the time every second", () => {
    render(<Clock />);
    const initialTime = screen.getByText(/\d{2}:\d{2}:\d{2}/).textContent;

    jest.advanceTimersByTime(1000);
    const updatedTime = screen.getByText(/\d{2}:\d{2}:\d{2}/).textContent;

    expect(updatedTime).not.toBe(initialTime);
  });
});