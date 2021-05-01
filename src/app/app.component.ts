import { Component } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {


  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value="";
  n="";

gen(data){this.value = "Name="+data.nm+"\nEmail="+data.email+"\nPhone="+data.ph+"\nAddress="+data.ad;}
}
