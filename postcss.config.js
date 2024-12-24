module.exports = {
    plugins: [
      require('@fullhuman/postcss-purgecss')({
        content: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
        css: ['./src/**/*.css']
      }),
      // other plugins...
    ],
  };
  