
const passwordOutput = document.getElementById('password-output');

const dataLowercase = "azertyuiopqsdfghjklmwxcvbn".split('');
const dataUppercase = "AZERTYUIOPQSDFGHJKLMWXCVBN".split('');
const dataNumbers = "1234567890".split('');
const dataSymbols = "!@#$%^&*-_=+\|:;',.>/?~".split('');

function generatePassWord(){

  const data = [].concat(
    lowercase.checked ? dataLowercase : [], 
    uppercase.checked ? dataUppercase : [],
    numbers.checked ? dataNumbers : [],
    symbols.checked ? dataSymbols : []
  );

  let passwordLength = parseInt(document.getElementById('display-password-length').value);

  let newPassword = "";

  if (data.length === 0){
    passwordOutput.innerHTML = "Générateur de MDP";
    alert('Veuillez sélectionner des critères');
    return;
  }

  for(let i =0; i<passwordLength; i++){
    newPassword += data[Math.floor(Math.random() * data.length)]
  }

  passwordOutput.value = newPassword;

  passwordOutput.select();
  document.execCommand('copy');
  generateButton.innerHTML = 'mdp copié !';
  setTimeout(() => {generateButton.innerHTML = 'Générer mot de passe'}, 3500);

};