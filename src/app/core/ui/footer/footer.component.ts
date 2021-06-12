import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FooterService } from '../../../shared/services/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  form: FormGroup;

  constructor(private builder: FormBuilder,
              private service: FooterService) {
    this.form = this.builder.group({
      lastName: null,
      firstName: null,
      phone: null,
      email: null,
      question: null
    });
  }

  ngOnInit(): void {
  }

  sendForm(): void {
    if (this.form.valid) {
      this.service.sendForm(this.form.value).subscribe(res => alert('Успешно'),
        error => alert('Произошла ошибка'));
    } else {
      alert('Заполните форму');
    }
  }

}
