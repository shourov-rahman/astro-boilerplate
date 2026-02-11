module.exports = {
  plugins: {
    // 1. Fix known flexbox bugs in IE 10/11
    'postcss-flexbugs-fixes': {},

    // 2. Polyfill modern CSS features based on Browserslist
    'postcss-preset-env': {
      stage: 2, // Stable features + some in-progress (good balance)
      features: {
        'nesting-rules': true, // Supports & nested syntax
        'custom-properties': true, // Attempts to polyfill CSS variables,
        'is-pseudo-class': false, // Add this to disable the transformation and warning
      },
      autoprefixer: {
        flexbox: 'no-2009', // Specific fix for older flexbox specs
      },
    },
  },
};
