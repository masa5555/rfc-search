module.exports = {
  prettier: true,
  space: true,
  rules: {
    "n/file-extension-in-import": ["error", "always"],
    "@typescript-eslint/naming-convention": "off", // App router の API routeのGET関数がエラーになる
  }
};
