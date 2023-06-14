import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SideMenu from "./SideMenu";

const menuConfig = [
  {
    title: "Home"
  },
  {
    title: "Services",
    subItems: ["Cooking", "Cleaning"]
  },
  {
    title: "Contact",
    subItems: ["Phone", "Mail"]
  }
];

test("renders the side menu with expandable items", () => {
  const { getByText, queryByTestId } = render(
    <SideMenu menuConfig={menuConfig} />
  );

  const homeDiv = getByText("Home");
  expect(homeDiv.getAttribute("data-test-id")).toBe("first-level-home");
  expect(queryByTestId("button-home")).toBeNull();
  expect(queryByTestId("ul-home")).toBeNull();

  const servicesDiv = getByText("Services");
  expect(servicesDiv.getAttribute("data-test-id")).toBe("first-level-services");
  const servicesButton = getByText("Expand");
  fireEvent.click(servicesButton);
  const cookingLi = getByText("Cooking");
  const cleaningLi = getByText("Cleaning");
  expect(queryByTestId("ul-services")).toBeInTheDocument();
  expect(queryByTestId("li-services-cooking")).toBeInTheDocument();
  expect(queryByTestId("li-services-cleaning")).toBeInTheDocument();

  const contactDiv = getByText("Contact");
  expect(contactDiv.getAttribute("data-test-id")).toBe("first-level-contact");
  const contactButton = getByText("Expand");
  fireEvent.click(contactButton);
  const phoneLi = getByText("Phone");
  const mailLi = getByText("Mail");
  expect(queryByTestId("ul-contact")).toBeInTheDocument();
  expect(queryByTestId("li-contact-phone")).toBeInTheDocument();
  expect(queryByTestId("li-contact-mail")).toBeInTheDocument();
});
