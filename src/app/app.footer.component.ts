import {Component} from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
      <div class="layout-footer">
        <div class="clearfix">
          <span class="footer-text-left">Mitad izquierda</span>
          <span class="footer-text-right">Mitad derecha (Derechos reservados)</span>
        </div>
      </div>
    `
})
export class AppFooterComponent {

}
