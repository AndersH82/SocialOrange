import { render, fireEvent } from "@testing-library/react";
import { MoreDropdown, ProfileEditDropdown } from "./MoreDropdown";
import { BrowserRouter as Router } from "react-router-dom";

describe("MoreDropdown", () => {
  it("calls handleEdit when edit is clicked", () => {
    const handleEdit = jest.fn();
    const handleDelete = jest.fn();
    const { getByLabelText } = render(
      <Router>
        <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />
      </Router>
    );

    fireEvent.click(getByLabelText("edit"));
    expect(handleEdit).toHaveBeenCalled();
  });

  it("calls handleDelete when delete is clicked", () => {
    const handleEdit = jest.fn();
    const handleDelete = jest.fn();
    const { getByLabelText } = render(
      <Router>
        <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />
      </Router>
    );

    fireEvent.click(getByLabelText("delete"));
    expect(handleDelete).toHaveBeenCalled();
  });
});

describe("ProfileEditDropdown", () => {
  it("navigates to edit profile page", () => {
    const { getByLabelText } = render(
      <Router>
        <ProfileEditDropdown id="1" />
      </Router>
    );

    fireEvent.click(getByLabelText("edit-profile"));
    expect(window.location.pathname).toBe("/profiles/1/edit");
  });

  it("navigates to change username page", () => {
    const { getByLabelText } = render(
      <Router>
        <ProfileEditDropdown id="1" />
      </Router>
    );

    fireEvent.click(getByLabelText("edit-username"));
    expect(window.location.pathname).toBe("/profiles/1/edit/username");
  });

  it("navigates to change password page", () => {
    const { getByLabelText } = render(
      <Router>
        <ProfileEditDropdown id="1" />
      </Router>
    );

    fireEvent.click(getByLabelText("edit-password"));
    expect(window.location.pathname).toBe("/profiles/1/edit/password");
  });
});