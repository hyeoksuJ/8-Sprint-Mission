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
const loginButton = document.getElementById('login-button');

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
}

function nicknameAlert() {
  if (nicknameInput.value.trim() === '') {
    nicknameInput.classList.add('alert-border');
  }
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
}

function passwordConfirmAlert() {}

emailInput.addEventListener('focusin', emailFocusIn);
nicknameInput.addEventListener('focusin', nicknameFocusIn);
passwordInput.addEventListener('focusin', passwordFocusIn);
passwordConfirmInput.addEventListener('focusin', passwordConfirmFocusIn);
