export class RegistrationForm {
  constructor(formId) {
    this.form = document.getElementById(formId);
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
  }

  handleSubmit(e) {
    e.preventDefault();

    const username = this.form.elements.username.value;
    const email = this.form.elements.email.value;
    const password = this.form.elements.password.value;
    const confirmPassword = this.form.elements.confirmPassword.value;

    if (this.validateForm(password, confirmPassword)) {
      this.submitForm({ username, email, password });
    }
  }

  validateForm(password, confirmPassword) {
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return false;
    }
    return true;
  }

  submitForm(data) {
    // Here you would typically send the data to your server
    console.log('Registration data:', data);
    alert('Registration successful!');
    this.form.reset();
  }
}
