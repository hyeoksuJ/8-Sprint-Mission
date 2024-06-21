const emailInput = document.getElementById('signup-email');
const nicknameInput = document.getElementById('signup-nickname');
const passwordInput = document.getElementById('signup-password');
const passwordConfirmInput = document.getElementById('signup-password-confirm');
const emailAlertMessage = document.getElementById('email-alert-message');
const nicknameAlertMessage = document.getElementById('nickname-alert-message');
const passwordAlertMessage = document.getElementById('password-alert-message');
const passwordConfirmAlertMessage = document.getElementById(
  'password-confirm-alert-message'
);
const signupButton = document.getElementById('signup-button');

function emailFocusIn() {
  emailInput.classList.add('focus-in-blue');
}

function nicknameFocusIn() {
  nicknameInput.classList.add('focus-in-blue');
}

function passwordFocusIn() {
  passwordInput.classList.add('focus-in-blue');
}

function passwordConfirmFocusIn() {
  passwordConfirmInput.classList.add('focus-in-blue');
}

function emailAlert() {
  const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,}$/;
  if (emailInput.value.trim() === '') {
    emailInput.classList.add('alert-border');
    emailAlertMessage.textContent = '이메일을 입력해주세요';
  } else if (!emailRegex.test(emailInput.value.trim())) {
    emailInput.classList.add('alert-border');
    emailAlertMessage.textContent = '잘못된 이메일 형식입니다';
  } else {
    emailInput.classList.remove('alert-border');
    emailAlertMessage.textContent = '';
  }
  buttonCheckState();
}

function nicknameAlert() {
  if (nicknameInput.value.trim() === '') {
    nicknameInput.classList.add('alert-border');
    nicknameAlertMessage.textContent = '닉네임을 입력해주세요';
  } else {
    nicknameInput.classList.remove('alert-border');
    nicknameAlertMessage.textContent = '';
  }
  buttonCheckState();
}

function passwordAlert() {
  if (passwordInput.value.trim() === '') {
    passwordInput.classList.add('alert-border');
    passwordAlertMessage.textContent = '비밀번호를 입력해주세요';
  } else if (passwordInput.value.trim().length < 8) {
    passwordInput.classList.add('alert-border');
    passwordAlertMessage.textContent = '비밀번호를 8자 이상 입력해주세요';
  } else {
    passwordInput.classList.remove('alert-border');
    passwordAlertMessage.textContent = '';
  }
  buttonCheckState();
}

function passwordConfirmAlert() {
  if (passwordConfirmInput.value !== passwordInput.value) {
    passwordConfirmInput.classList.add('alert-border');
    passwordConfirmAlertMessage.textContent = '비밀번호가 일치하지 않습니다';
  } else {
    passwordConfirmInput.classList.remove('alert-border');
    passwordConfirmAlertMessage.textContent = '';
  }
  buttonCheckState();
}

function buttonCheckState() {
  const emailEnable =
    emailInput.value.trim() !== '' &&
    emailAlertMessage.textContent.trim() === '';
  const nicknameEnable =
    nicknameInput.value.trim() !== '' &&
    nicknameAlertMessage.textContent.trim() === '';
  const passwordEnable =
    passwordInput.value.trim() !== '' &&
    passwordAlertMessage.textContent.trim() === '';
  const passwordConfirmEnable =
    passwordConfirmInput.value.trim() !== '' &&
    passwordConfirmAlertMessage.textContent.trim() === '';

  if (
    emailEnable &&
    nicknameEnable &&
    passwordEnable &&
    passwordConfirmEnable
  ) {
    signupButton.disabled = false;
    signupButton.classList.add('button-enable');
  } else {
    signupButton.disabled = true;
    signupButton.classList.remove('button-enable');
  }
}

function toSignup(e) {
  e.preventDefault();
  console.log('signin 페이지로');
  window.location.href = './signin.html';
}

emailInput.addEventListener('focusin', emailFocusIn);
nicknameInput.addEventListener('focusin', nicknameFocusIn);
passwordInput.addEventListener('focusin', passwordFocusIn);
passwordConfirmInput.addEventListener('focusin', passwordConfirmFocusIn);
emailInput.addEventListener('input', emailAlert);
nicknameInput.addEventListener('input', nicknameAlert);
passwordInput.addEventListener('input', passwordAlert);
passwordConfirmInput.addEventListener('input', passwordConfirmAlert);
signupButton.addEventListener('click', toSignup);
