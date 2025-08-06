import '/css/style.css';
// import { RegistrationForm } from '/js/components/forms/registrationForm.mjs';

import supabase from '/js/constants/supabaseClient.mjs';

// document.addEventListener('DOMContentLoaded', () => {
//   new RegistrationForm('registrationForm');
// });

console.log(supabase);

document
  .getElementById('new-post-button')
  ?.addEventListener('click', function () {
    const createPostElement = document.getElementById('create-post');
    if (createPostElement) {
      createPostElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn('Element with ID "create-post" not found');
    }
  });
