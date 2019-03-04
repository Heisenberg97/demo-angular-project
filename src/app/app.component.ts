import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Demo Proj';

  componentTitle = 'I am Component title';

  onClickButton(){
    alert('Clicked!!');
  }
}
