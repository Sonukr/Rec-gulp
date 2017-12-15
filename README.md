This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

So, i added gulp in this project to solve the scss to css without ejecting this app.

##### Let's install Gulp and gulp-sass
```js
npm install --save-dev gulp
npm install --save-dev gulp-sass
```

Create a filw with name "gulpfile.js"

##### Add the following in the gulpfile.js
```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');

```

##### Add the task in gulpfile.js
```javascript
// task for compiling scss to css
gulp.task('sass', function () {
   gulp.src('./src/scss/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./src/css/'));
});
```

```javascript
// task for watch scss
gulp.task('watch', function () {
  gulp.watch('./src/scss/*.scss', ['sass']);
});
```


Lets call the Default Task with dependency of sass and watch task.
```javascript
//call the default task in which call above task as dependency
gulp.task('default', ['sass', 'watch']);

```


To run this app, run the following command

```sh
npm start
```
```sh
gulp
```
PS: There are more task in this app for copy and clear. you can found in gulpfile.js.

##### Suggestions and pull request are most welcome. :)

#### #Happy Coding. :)
