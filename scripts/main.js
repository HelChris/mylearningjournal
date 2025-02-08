import '/css/style.css';
import { RegistrationForm } from './registrationForm.mjs';

document.addEventListener('DOMContentLoaded', () => {
  new RegistrationForm('registrationForm');
});



document
  .getElementById('new-post-button')
  .addEventListener('click', function () {
    document
      .getElementById('create-post')
      .scrollIntoView({ behavior: 'smooth' });
  });
