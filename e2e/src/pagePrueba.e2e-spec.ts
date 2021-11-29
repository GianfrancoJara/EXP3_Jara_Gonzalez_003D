import {browser, element, by } from 'protractor';
 
describe('Titulo prueba 1.', ()=>{
    //configuramos nuestro bloque
    beforeEach(()=>{
        browser.get("/");

    });
    //creación de prueba 1
    it("El titulo se muestra correctamente", ()=>{
        expect(element(by.css("#titulokkk ion-title")).getText()).toContain("InfoGaming");
    });  

});


 















