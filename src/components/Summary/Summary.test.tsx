import { Summary } from ".";
import { render, screen } from "../../utils/test-utils";

beforeEach(() => {
  render(<Summary />);
});

describe("Summary", () => {
  describe("Renders the default cards", () => {

    it("Renders the Income Card", () => {
      const incomeCardTitle = screen.getByText("Entradas");
      const incomeCardAmount = screen.getByTestId("income-amount");
      expect(incomeCardTitle).toBeInTheDocument();
      expect(incomeCardAmount).toBeInTheDocument();
    });

    it("Renders the Outcome Card", () => {
      const outcomeCardTitle = screen.getByText("Saídas");
      const outcomeCardAmount = screen.getByTestId("outcome-amount");
      expect(outcomeCardTitle).toBeInTheDocument();
      expect(outcomeCardAmount).toBeInTheDocument();
    });

    it("Renders the Total Card", () => {
      const totalCardTitle = screen.getByText("Total");
      const totalCardAmount = screen.getByTestId("total-amount");
      expect(totalCardTitle).toBeInTheDocument();
      expect(totalCardAmount).toBeInTheDocument();
    });
  });
});
