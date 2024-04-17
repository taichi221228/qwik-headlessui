/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ["plugin:qwik/recommended"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ["./tsconfig.json"],
		ecmaVersion: 2021,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ["@typescript-eslint"],
};
