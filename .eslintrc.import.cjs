/** @type {import("eslint").Linter.Config} */
module.exports = {
	extends: ["plugin:import/recommended"],
	plugins: ["import"],
	rules: {
		"import/order": [
			"error",
			{
				alphabetize: {
					order: "asc",
				},
				groups: [
					"builtin",
					"external",
					"internal",
					["sibling", "parent"],
					"index",
					"object",
					"type",
				],
				"newlines-between": "always",
				pathGroups: [
					{
						group: "builtin",
						pattern: "@builder.io/qwik?(-city)**",
					},
					{
						group: "external",
						pattern: "@qwik?(-city)**",
					},
					{
						group: "internal",
						pattern: "~/constants",
					},
					{
						group: "internal",
						pattern: "~/components",
					},
					{
						group: "internal",
						pattern: "~/hooks",
					},
					{
						group: "sibling",
						pattern: "./**",
					},
					{
						group: "parent",
						pattern: "../**",
					},
				],
				pathGroupsExcludedImportTypes: [],
			},
		],
	},
	settings: {
		"import/resolver": {
			typescript: true,
		},
	},
};
