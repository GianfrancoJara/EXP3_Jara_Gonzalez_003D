import {browser, element, by } from 'protractor';
 
describe('Label prueba 2.', ()=>{
    //configuramos nuestro bloque
    beforeEach(()=>{
        browser.get("/");

    });
    //creación de prueba 2
    it("El label se muestra correctamente", ()=>{
        expect(element(by.css("#prueba2 ion-label")).getText()).toContain("NOVEDADES GAMING");
    });  

});


 















