import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FooterService } from '../../../shared/services/footer.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private readonly notifier: NotifierService;

  form: FormGroup;

  constructor(private builder: FormBuilder,
              private service: FooterService,
              private notifierService: NotifierService) {
    this.form = this.builder.group({
      lastName: null,
      firstName: null,
      phone: null,
      email: null,
      question: null
    });
    this.notifier = notifierService;
  }

  ngOnInit(): void {
  }

  sendForm(): void {
    if (this.form.valid) {
      this.service.sendForm(this.form.value).subscribe(res => {
          if (res && res.success) {
            this.notifier.notify('success', 'Успешно! Спасибо за обратную связь, с Вами свяжутся');
            this.form.reset();
          } else if (res && !res.success) {
            this.notifier.notify('error', res.message);
          }
        },
          error => this.notifier.notify('error', 'Произошла ошибка'));
    } else {
      this.notifier.notify('error', 'Заполните форму');
    }
  }

}
