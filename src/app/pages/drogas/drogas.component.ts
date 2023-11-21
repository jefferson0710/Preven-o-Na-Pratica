import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Renderer2 } from '@angular/core';



@Component({
  selector: 'app-drogas',
  templateUrl: './drogas.component.html',
  styleUrls: ['./drogas.component.scss']
})
export class DrogasComponent {

  contactForm: FormGroup;




  constructor(private fb:FormBuilder,private renderer: Renderer2) {

    this.contactForm = this.fb.group({
      id: 0
    });
  }


  ngOnInit() {

    this.setupModal();
  }

 private setupModal(): void {
    document.addEventListener('DOMContentLoaded', () => {
      const openModalBtn = document.getElementById('openModalBtn');
      const openModalBtnalcool = document.getElementById('openModalBtnalcool');
      const closeModalBtnalcool = document.getElementById('closeModalBtnalcool');
      const closeModalBtn = document.getElementById('closeModalBtn');
      const modal = document.getElementById('myModal');


      if (openModalBtn && closeModalBtn && modal && closeModalBtnalcool && openModalBtnalcool) {
        this.renderer.listen( openModalBtnalcool && openModalBtn, 'click', () => {
          modal.style.display = 'block';
        });

        this.renderer.listen(closeModalBtn && closeModalBtnalcool, 'click', () => {
          modal.style.display = 'none';
        });

        this.renderer.listen(window, 'click', (event) => {
          if (event.target === modal) {
            modal.style.display = 'none';
          }
        });
      }
    });
  }


}
