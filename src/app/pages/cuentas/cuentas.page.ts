import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicesdatosService, Datos } from 'src/app/services/servicesdatos.service';
import { Platform, ToastController, IonList} from '@ionic/angular';
import { MenuController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.page.html',
  styleUrls: ['./cuentas.page.scss'],
})
export class CuentasPage implements OnInit {

  datos: Datos[] = [];
  newDato: Datos = <Datos>{};
  @ViewChild('myList')myList :IonList; 

  constructor(private storageService: ServicesdatosService, private plt: Platform, private toastController: ToastController, private menuController: MenuController, public navCtrl: NavController) {
      this.plt.ready().then(()=>{
        this.loadDatos();
      });
    }

  ngOnInit() {
  }

  loadDatos(){
    this.storageService.getDatos().then(datos=>{
      this.datos=datos;
    });
  }

  logout() {
    this.navCtrl.navigateRoot('inicio');
    localStorage.removeItem('ingresado');
    alert('Has cerrado sesión exitosamente');
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
