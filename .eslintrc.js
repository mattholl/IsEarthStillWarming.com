module.exports = {
  extends: "react-tools",
  plugins: ["cypress"],
  env: {
    "cypress/globals": true
  },
  rules: {
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"]
      }
    ],
    "react/jsx-curly-brace-presence": 0,
    "no-restricted-globals": 0,
    indent: ["error", 2],
    "import/no-extraneous-dependencies": 0
  }
};
