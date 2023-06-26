import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  evn: process.env.NODE_ENV,
  port: process.env.PORT,
  Database_url: process.env.DATABASE_URL,
  defult_student_pass: process.env.DEFULT_STUDENT_PASS,
  defult_faculty_pass: process.env.DEFULT_FACULTY_PASS,
  defult_admin_pass: process.env.DEFULT_ADMIN_PASS,
  bycrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,

  jwt: {
    secret: process.env.JWT_SECRET,
    refresh_secret: process.env.JWT_REFRESH_SECRET,
    expires_in: process.env.JWT_EXPIRES_IN,
    refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
  },
};
