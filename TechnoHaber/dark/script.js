function changeTheme() {
  let themeVal = document.querySelector('input[name="theme"]').checked ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', themeVal);
}