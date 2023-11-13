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

  numeroPagina = 0;
  contactForm: FormGroup;

 
  drogas = [
    { id: 1, name: "Maconha" },
    { id: 2, name: "Crack" },
    { id: 3, name: "Alcool" },
    { id: 4, name: "Cocaina" },
    { id: 5, name: "Ecstasy" }
  ];
 
  constructor(private fb:FormBuilder,private renderer: Renderer2) {

    this.contactForm = this.fb.group({
      id: 0
    });
  }
  
 
  ngOnInit() {
    this.setupModal();
  }
 
  submit() {
    this.numeroPagina = this.contactForm.value.id
    console.log(this.numeroPagina)
  }
 private setupModal(): void {
    document.addEventListener('DOMContentLoaded', () => {
      const openModalBtn = document.getElementById('openModalBtn');
      const closeModalBtn = document.getElementById('closeModalBtn');
      const modal = document.getElementById('myModal');

      if (openModalBtn && closeModalBtn && modal) {
        this.renderer.listen(openModalBtn, 'click', () => {
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
 

}
