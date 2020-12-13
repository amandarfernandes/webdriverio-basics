import alertPage from '../pageobjects/alertPage';

beforeEach("Navigate to Alerts page",()=>{
    alertPage.open();
});

describe("Testing javascript alerts",()=>{
    it("Should have 3 alerts buttons and verify the button text",()=>{
        expect(alertPage.jsAlertButtons.length).to.equal(3);
        expect(alertPage.jsAlertButtonText(1)).to.equal('Click for JS Alert');
        expect(alertPage.jsAlertButtonText(2)).to.equal('Click for JS Confirm');
        expect(alertPage.jsAlertButtonText(3)).to.equal('Click for JS Prompt');
    });

    it("Should have all 3 buttons as clickable",()=>{
        expect(alertPage.allAlertButtonsClickable(),'All buttons should be clickable').to.be.true;
    });

    it("Should click on first alert button and allow alert to be accepted",()=>{
        alertPage.jsAlertButtonClick(1);
        expect(browser.getAlertText()).to.equal('I am a JS Alert');
        browser.acceptAlert();
        expect(alertPage.resultText()).to.equal('You successfuly clicked an alert');
    });

    it("Should click on second alert button and allow alert to be confirmed",()=>{
        alertPage.jsAlertButtonClick(2);
        expect(browser.getAlertText()).to.equal('I am a JS Confirm');
        browser.acceptAlert();
        expect(alertPage.resultText()).to.equal('You clicked: Ok');
    });

    it("Should click on second alert button and allow alert to be cancelled",()=>{
        alertPage.jsAlertButtonClick(2);
        expect(browser.getAlertText()).to.equal('I am a JS Confirm');
        browser.dismissAlert();
        expect(alertPage.resultText()).to.equal('You clicked: Cancel');
    });
    it("Should click on third alert button and allow alert to be cancelled",()=>{
        alertPage.jsAlertButtonClick(3);
        expect(browser.getAlertText()).to.equal('I am a JS prompt');
        browser.sendAlertText("Webdriverio Testing is great!");
        browser.acceptAlert();
        expect(alertPage.resultText()).to.equal('You entered: Webdriverio Testing is great!');
    });



});