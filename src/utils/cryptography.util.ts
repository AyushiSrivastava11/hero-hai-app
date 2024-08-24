import bcrypt from "bcrypt";

/**
 *  Function to hash password
 * @param {String} password - Password to hash
 * @returns {Promise<String>} Hashed password
 */
export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

/**
 * Function to check password
 * @param {String} password - Password to check
 * @param {String} hash - Hashed password
 * @returns {Promise<Boolean>} True if password is correct, false otherwise
 */
export const checkPassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  const result = await bcrypt.compare(password, hash);
  return result;
};
