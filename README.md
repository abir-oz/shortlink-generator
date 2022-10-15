# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users are able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Solution URL](https://)
- Live Site URL: [Live site URL here](https://)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- VsCode - Editor

### What I learned

I learned how to use styled components and how to use the clipboard API.

```js
const copyToClipboard = (e) => {
  navigator.clipboard.writeText(e.target.innerText);
};
```

### Continued development

I want to build my own API rather than using the one provided by Frontend Mentor. I also want add authentication to the app so that users can save their links and access them from any device.

### Useful resources

- [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API) - This helped me to copy the shortened link to the clipboard.

- [Styled Components](https://styled-components.com/) - This is an amazing library that helped me with my styles.

- [React Icons](https://react-icons.github.io/react-icons/) - This helped me to use the icons.

- [React Toastify](https://fkhadra.github.io/react-toastify/introduction) - This helped me to show the error messages.

- [React Router](https://reactrouter.com/web/guides/quick-start) - This helped me to create the routes.

- [React Helmet](https://www.npmjs.com/package/react-helmet) - This helped me to change the title of the page.

- [ Vite](https://vitejs.dev/) - This helped me to create the project.

- [React Hook Form](https://react-hook-form.com/) - This helped me to create the form.

## Author

- Website - [Abir](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

## Acknowledgments

I want to thank Frontend Mentor for this challenge. I learned a lot from this challenge.
