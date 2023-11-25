import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Renderer2 } from '@angular/core';
import { ModalService } from 'src/app/service-modal';



@Component({
  selector: 'app-drogas',
  templateUrl: './drogas.component.html',
  styleUrls: ['./drogas.component.scss']
})
export class DrogasComponent {





  constructor(private fb:FormBuilder,private renderer: Renderer2, private modalService: ModalService) {

  }


  ngOnInit() {
  }
  openModal(content:any) {
    const modalRef = this.modalService.open(content);
    modalRef.result.then(
      (result) => {
        console.log(`Modal fechado com resultado: ${result}`);
      },
      (reason) => {
        console.log(`Modal fechado com razão: ${reason}`);
      }
    );
  }

}


