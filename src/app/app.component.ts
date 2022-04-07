import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'angular7-demo';
  isList = false;
  isTree = false;
  tabs(name) {
    if (name == 'List') {
      this.isList = true
      this.isTree = false
    } else if (name == 'Tree') {
      this.isList = false
      this.isTree = true
    } else {
      this.isList = false
      this.isTree = false
    }
  }

}
