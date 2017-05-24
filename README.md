# jQuery Captcha Basic

[![npm](https://img.shields.io/npm/v/jquery-captcha-basic.svg?style=flat-square)](https://www.npmjs.com/package/jquery-captcha-basic) [![npm](https://img.shields.io/npm/dt/jquery-captcha-basic.svg?style=flat-square)](https://www.npmjs.com/package/jquery-captcha-basic) [![npm](https://img.shields.io/npm/l/jquery-captcha-basic.svg?style=flat-square)](https://www.npmjs.com/package/jquery-captcha-basic)

A basic math captcha plugin for jQuery

## Demo
[View Demo](http://rencs.com/demo/jquery-captcha-basic/)

## Usage
### Getting Started
* Install `jquery-captcha-basic` from npm:
```bash
$ npm install jquery-captcha-basic
```
* Add the JavaScript file reference to your web site.
* Select the form you want to show a captcha for.
* Run the *captcha()* method on the form with the options you want.
* Plugin will add a simple math sum text and an input box before the submit button.

### Initialization
The basic initialization example:
```js
$(document).ready(function() {
  $("#my-form").captcha();
});
```

Initialization example with all options set:
```js
$(document).ready(function() {
  $("#my-form").captcha({
    idCaptchaText: 'customCaptchaTextId',
    idCaptchaInput: 'customCaptchaInputId',
    class: 'button-primary'
  });
});
```

## Plugin Options
- `idCaptchaText`: The ID for the captcha text. Default is `captchaText`.
- `idCaptchaInput`: The ID for the captcha input. Default is `captchaInput`.
- `class`: Class name for the submit button toggle. Default is an empty string: `''`.

## Development
After cloning the repo and making your changes, you can use `gulp` command to uglify js files.

## Reporting Bugs
For bug reports, questions, feature requests, or other suggestions the best way to contact me is to [create an issue][newissue] on GitHub.

[newissue]: https://github.com/pemre/jquery-captcha-basic/issues/new

## Contributor Guide
Make the plugin better! Join the [contributors] today by submitting a patch! The best way to submit patches is to [fork this project][fork] on GitHub and submit a pull request. But if you are unwilling or unable to use GitHub I will accept patches in any way you can get them to me (JSFiddle, Pastebin, text file, whatever).

[contributors]: https://github.com/pemre/jquery-captcha-basic/graphs/contributors
[fork]: https://github.com/pemre/jquery-captcha-basic/fork

## References
Thanks to these valuable sources, I could start this project.

- The base idea and codes from EbCaptcha jQuery plugin by Edon Bajrami https://github.com/DonDi1989
