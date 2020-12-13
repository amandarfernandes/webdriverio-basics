import dragAndDropPage from '../pageobjects/dragAndDropPage';

beforeEach("open", ()=>{
    dragAndDropPage.open();
});

describe('Test HTML Drag & Drop',()=>{
    it('Should drag the element from A to B', function() {
        expect(dragAndDropPage.columnOneText()).to.equal('A');
        expect(dragAndDropPage.columnTwoText()).to.equal('B');
        dragAndDropPage.dragAToB();
        expect(dragAndDropPage.columnOneText()).to.equal('B');
        expect(dragAndDropPage.columnTwoText()).to.equal('A');
    });

    it('Should drag the element from B to A', function() {
        expect(dragAndDropPage.columnOneText()).to.equal('A');
        expect(dragAndDropPage.columnTwoText()).to.equal('B');
        dragAndDropPage.dragBToA();
        expect(dragAndDropPage.columnOneText()).to.equal('B');
        expect(dragAndDropPage.columnTwoText()).to.equal('A');
    });

});