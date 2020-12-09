import Page from "./page";
import { expectedListItems } from "../data/landing-list-items";

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

  listItem(index) {
    return $(`ul li:nth-child(${index})`); 
  } 

 get listLinks() {
    return $$(`ul li a`);
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

  getListItemText(index){
    return this.listItem(index).getText();
  }

  verifyListItemsText(){
    let actualListItemsText = this.listItems.map(item=>item.getText());
    return this.listItems.length === expectedListItems.length && 
      actualListItemsText.every((itemText,index)=>itemText === expectedListItems[index][1]); 
  }

  verifyListItemLinks(){
    let actualListItemsLinks = this.listLinks.map(link=>link.getAttribute('href'));
    return this.listLinks.length === expectedListItems.length && 
      actualListItemsLinks.every((linkItem, index)=> {  return linkItem === browser.options.baseUrl.slice(0,-1)+expectedListItems[index][0]}); 
  }
}

export default new LandingPage();
