import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("Initial conditions", () => {
	// arrange and act
	render(<SummaryForm />);

	const checkbox = screen.getByRole("checkbox", { name: /terms and conditions/i });
	const confirmButton = screen.getByRole("button", { name: /confirm order/i });

	// assert
	expect(checkbox).not.toBeChecked();
	expect(confirmButton).toBeDisabled();
});

test("Checkbox enables button on first click and disables on second click", () => {
	// arrange
	render(<SummaryForm />);

	const checkbox = screen.getByRole("checkbox", { name: /terms and conditions/i });
	const confirmButton = screen.getByRole("button", { name: /confirm order/i });

	// act and assert
	userEvent.click(checkbox);
	expect(confirmButton).toBeEnabled();

	userEvent.click(checkbox);
	expect(confirmButton).toBeDisabled();
});

test("Popover responds to hover", async () => {
	// arrange
	render(<SummaryForm />);

	const popoverTextRegex = /no ice cream will actually be delivered/i;

	const termsAndConditions = screen.getByText(/terms and conditions/i);

	// act and assert
	const nullPopover = screen.queryByText(popoverTextRegex);
	expect(nullPopover).not.toBeInTheDocument();

	userEvent.hover(termsAndConditions);

	const popover = screen.getByText(popoverTextRegex);
	expect(popover).toBeInTheDocument();

	userEvent.unhover(termsAndConditions);

	await waitForElementToBeRemoved(() => screen.queryByText(popoverTextRegex));
});
