/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const nextJest = require('next/jest')

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
	// An array of directory names to be searched recursively up from the requiring module's location
	moduleDirectories: ['node_modules', '<rootDir>/'],

	// A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
	moduleNameMapper: {
		'^@components/(.*)$': '<rootDir>/components/$1',
	},

	// The test environment that will be used for testing
	testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
