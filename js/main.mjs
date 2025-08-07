import '/css/style.css';
// import { RegistrationForm } from '/js/components/forms/registrationForm.mjs';
import { fetchJournal } from './database/fetchJournalData.mjs';

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

  fetchJournal();