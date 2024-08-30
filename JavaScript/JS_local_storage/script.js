//save user's theme preference
localStorage.setItem('theme', 'dark');

//retrive and apply the theme
const userTheme = localStorage.getItem('theme');

if(userTheme) {
    applyTheme(userTheme)
}