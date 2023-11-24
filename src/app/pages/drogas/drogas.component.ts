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
    this.setupModal2();
  }

 private setupModal(): void {
    document.addEventListener('DOMContentLoaded', () => {
      const openModalBtn = document.getElementById('openModalBtn');
      const closeModalBtn = document.getElementById('closeModalBtn');
      const modal = document.getElementById('myModal');

      if (openModalBtn && closeModalBtn && modal) {
        this.renderer.listen( openModalBtn, 'click', () => {
          modal.style.display = 'block';
        });

        this.renderer.listen(closeModalBtn, 'click', () => {
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
  private setupModal2(): void {
    document.addEventListener('DOMContentLoaded', () => {
      const openModalBtnalcool = document.getElementById('openModalBtnalcool');
      const closeModalBtnalcool = document.getElementById('closeModalBtnalcool');
      const modal = document.getElementById('myModalalcool');

      if (openModalBtnalcool && closeModalBtnalcool && modal) {
        this.renderer.listen( openModalBtnalcool, 'click', () => {
          modal.style.display = 'block';
        });

        this.renderer.listen(closeModalBtnalcool, 'click', () => {
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


