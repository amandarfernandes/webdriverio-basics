import landingPage from "../pageobjects/landingPage";

beforeEach("before the test", () => {
  landingPage.open();
});

describe("Testing the herokuapp landing page", () => {
  it("should have a header and subheader on the landing page", () => {
    expect(landingPage.header.isExisting() && landingPage.header.isDisplayed())
      .to.be.true;
    expect(
      landingPage.subheader.isExisting() && landingPage.subheader.isDisplayed()
    ).to.be.true;
  });

  it("should get the text for the header,subheader elements", () => {
    try {
      expect(landingPage.getHeaderText()).to.equal("Welcome to the-internet");
      expect(landingPage.getSubheaderText()).to.equal("Available Examples");
    } catch (error) {
      console.log(`Something went wrong.${error}`);
      assert.fail();
    }
  });
  it("should have a footer with a link to elemental selenium", () => {
    expect(landingPage.footer.isExisting() && landingPage.footer.isDisplayed())
      .to.be.true;
    expect(landingPage.getFooterText()).to.contain(
      "Powered by Elemental Selenium"
    );
    expect(landingPage.getFooterLink()).to.equal(
      "http://elementalselenium.com/"
    );
  });

  it("should have a list of items in an unordered list", () => {
    expect(
      landingPage.listItems.length,
      "There should be 44 list items"
    ).to.equal(44);
  });
});
