module.exports = {
  // ... your existing config
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs'], // add .mjs here
  },
  module: {
    rules: [
      // Add this rule if not present
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false, // allow importing .mjs files without full path
        },
      },
    ],
  },
};
