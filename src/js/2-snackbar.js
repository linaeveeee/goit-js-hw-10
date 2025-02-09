import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.form'),
  delayInput: document.querySelector("input[name='delay']"),
  stateInputs: document.querySelectorAll("input[name='state']"),
};

function handleSubmit(evt) {
  evt.preventDefault();

  const delay = Number(refs.delayInput.value); 

const selectedInput = [...refs.stateInputs].find(input => input.checked);
const selectedState = selectedInput && selectedInput.value;


  if (!selectedState) return;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      selectedState === 'fulfilled' ? resolve(delay) : reject(delay);
    }, delay);
  });

  promise
    .then(delay => {
      console.log(`✅ Fulfilled promise in ${delay}ms`);
      iziToast.success({
        title: '✅ Success',
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(delay => {
      console.log(`❌ Rejected promise in ${delay}ms`);
      iziToast.error({
        title: '❌ Error',
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
}

refs.form.addEventListener('submit', handleSubmit);
