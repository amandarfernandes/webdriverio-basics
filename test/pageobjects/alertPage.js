import Page from './page';

class AlertsPage extends Page {
    get pageHeader() { return $(`div.example h3`); }
    get result() { return $(`#result`);  }
    get jsAlertButtons() { return $$(`ul li button`); }
    
    open() {
        super.open('/javascript_alerts');
        this.pageHeader.waitForDisplayed();
    }

    
    jsAlertButton(index) { 
        return $(`ul li:nth-child(${index}) button`);
    }

    jsAlertButtonText(index){
        this.jsAlertButton(index).waitForDisplayed();
        return this.jsAlertButton(index).getText();    
    }

    jsAlertButtonClick(index) { 
        this.jsAlertButton(index).waitForDisplayed();
        console.log(`${this.jsAlertButtonText(index)} is clickable? ${this.jsAlertButton(index).isClickable()}`)
        this.jsAlertButton(index).click();
    }

    resultText() {
        this.result.waitForDisplayed();
        return this.result.getText();
    }  

    allAlertButtonsClickable(){
        return this.jsAlertButtons.every(button => button.isClickable());
    }
}

export default new AlertsPage();
