import supabase from '/js/constants/supabaseClient.mjs';

export async function loginUser(email, password) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Login error:', error);
    return null;
  }
}

/**
 * Authenticates a user by sending login credentials to the server
 *
 * @param {Object} user - The user credentials object
 * @param {string} user.email - The user's email address
 * @param {string} user.password - The user's password
 * @returns {Promise<Object>} A promise that resolves to the server response with user data
 * @throws {Error} If the login fails or server returns an error
 *
 * @example
 * // Attempt to login a user
 * try {
 *   const userData = await login({
 *     email: "user@example.com",
 *     password: "securePassword123"
 *   });
 *   console.log("Login successful:", userData);
 * } catch (error) {
 *   console.error("Login failed:", error.message);
 * }
 */
