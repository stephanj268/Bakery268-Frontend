import { Component } from '@angular/core';
import { NavigationComponent } from "../../Shared/navigation/navigation";
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-contact',
  imports: [
    NavigationComponent,
    FormsModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitted = false;

  sendMsg(): void {
    if (!this.form.name || !this.form.email || !this.form.message) {
      alert('Please fill in your name, email, and message.');
      return;
    }
    this.submitted = true;
  }
}
