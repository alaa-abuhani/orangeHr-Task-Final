export default class timePage {
  timeTab() {
    cy.visit("/time/viewMyTimesheet");
    cy.get(".oxd-button--ghost").click();
  }
  timeView() {
    cy.visit("/time/viewEmployeeTimesheet");
  }
  //assetion time
  timeAssertion(name: string) {
    cy.get(".oxd-table").should("contain", name);
  }
}
