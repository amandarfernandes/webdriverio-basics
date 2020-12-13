import Page from './page';
/*
* WebDriver cannot handle HTML Drag and Drop. 
* This module can simulate the HTML Drag and Drop by using the Execute Script command.
*/
import { codeForSelectors as dragAndDrop } from 'html-dnd';

class DragAndDrop extends Page {
    get columnA() { return $('#column-a') ;}
    get columnB() { return $('#column-b') ;}
    get columnOneHeader() {return $('#column-a header')}
    get columnTwoHeader() {return $('#column-b header')}

    open() {
        super.open('/drag_and_drop');
    }

    dragAToB(){
        this.columnA.waitForDisplayed();
        browser.execute(dragAndDrop, '#column-a', '#column-b');
    }
    
    dragBToA() {
        this.columnB.waitForDisplayed();
        browser.execute(dragAndDrop, '#column-b', '#column-a');
    }

    columnOneText(){
        this.columnOneHeader.waitForDisplayed();
        return this.columnOneHeader.getText();
    }

    columnTwoText(){
        this.columnTwoHeader.waitForDisplayed();
        return this.columnTwoHeader.getText();
    }
}

export default new DragAndDrop();