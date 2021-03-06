module.exports = {
	env: {
		browser: true,
		es2021: true,
		commonjs: true,
	},
	extends: [
		"plugin:react/recommended",
		"google",
		"plugin:prettier/recommended",
		"plugin:react/jsx-runtime",
		"next",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint", "prettier", "react-hooks"],
	rules: {
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
			},
		],
		"require-jsdoc": [
			"error",
			{
				require: {
					FunctionDeclaration: false,
					MethodDefinition: false,
					ClassDeclaration: false,
					ArrowFunctionExpression: false,
					FunctionExpression: false,
				},
			},
		],
		"react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
		"react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
	},
}
