import Page from "./page";

class LandingPage extends Page {
  /**
   *  the elements of the page
   */
  get header() {
    return $(`h1.heading`);
  }
  get subheader() {
    return $(`h2`);
  }
  get footer() {
    return $(`#page-footer`);
  }
  get footerLink() {
    return $(`=Elemental Selenium`);
  }
  get list() {
    return $("ul");
  }
  get listItems() {
    return this.list.$$("li");
  }

  /**
   * page Methods
   */
  open() {
    super.open("/");
  }

  getHeaderText() {
    this.header.waitForDisplayed();
    return this.header.getText();
  }

  getSubheaderText() {
    this.subheader.waitForDisplayed();
    return this.subheader.getText();
  }

  getFooterText() {
    this.footer.waitForDisplayed();
    return this.footer.getText();
  }

  getFooterLink() {
    return this.footerLink.getAttribute("href");
  }
}

export default new LandingPage();
