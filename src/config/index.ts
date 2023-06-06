import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  evn: process.env.NODE_ENV,
  port: process.env.PORT,
  Database_url: process.env.DATABASE_URL,
  defult_student_pass: process.env.DEFULT_STUDENT_PASS,
}
