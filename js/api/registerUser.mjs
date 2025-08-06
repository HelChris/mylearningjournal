/**
 * Registers a new user by sending credentials to the server
 *
 * @param {Object} user - The user registration data
 * @param {string} user.name - The user's name
 * @param {string} user.email - The user's email address
 * @param {string} user.password - The user's password
 * @returns {Promise<Object>} A promise that resolves to the server response with user data
 * @throws {Error} If the registration fails or server returns an error
 *
 * @example
 * // Register a new user
 * try {
 *   const userData = await register({
 *     name: "John Doe",
 *     email: "john@example.com",
 *     password: "securePassword123"
 *   });
 *   console.log("Registration successful:", userData);
 * } catch (error) {
 *   console.error("Registration failed:", error.message);
 * }
 */
