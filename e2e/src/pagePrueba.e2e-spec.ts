import {browser, element, by } from 'protractor';
 
describe('Pruebas.', ()=>{
    //configuramos nuestro bloque
    beforeEach(()=>{
        browser.get("/");

    });
    //creación de pruebas
    it("Prueba 1: El titulo se muestra correctamente", ()=>{
        expect(element(by.css("#titulokkk ion-title")).getText()).toContain("InfoGaming");
    });
    
    it("Prueba 2: El label se muestra correctamente", ()=>{
        expect(element(by.css("#prueba2 ion-label")).getText()).toContain("NOVEDADES GAMING");
    }); 

});


 















