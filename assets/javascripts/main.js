document.addEventListener("DOMContentLoaded", function(){
  let theme = localStorage.getItem('theme') || 'dark'
  document.body.setAttribute('data-theme', theme);
  toggleSwitcher(theme)

  document.getElementById('themeSwitcher').addEventListener('click', function(event) {
    let currentTheme = localStorage.getItem('theme') || 'dark'
    let theme = toggleTheme(currentTheme)
    localStorage.setItem('theme', theme)
    toggleSwitcher(theme)
    document.body.setAttribute('data-theme', theme)
  })

  function toggleSwitcher(theme) {
    let switcher = document.getElementById('themeSwitcher')
    if (theme === "dark") {
      switcher.classList.remove('typcn-flash')
      switcher.classList.add('typcn-flash-outline')
    } else {
      switcher.classList.remove('typcn-flash-outline')
      switcher.classList.add('typcn-flash')
    }
  }

  function toggleTheme(theme) {
    if (theme === 'light') {
      return 'dark'
    } else {
      return 'light'
    }
  }
})
