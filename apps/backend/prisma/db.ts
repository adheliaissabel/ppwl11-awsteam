import { PrismaLibSql } from "@prisma/adapter-libsql";
import { PrismaClient } from "../src/generated/prisma/client";

<<<<<<< HEAD
=======
// Perhatikan perubahan di sini: bungkus dalam objek { client: libsql }
>>>>>>> 230e25e (feat: implement Vercel deployment support, secure cookie configuration, and API key authentication for backend and frontend services.)
const adapter = new PrismaLibSql({
  url: process.env.DATABASE_URL!,
  authToken: process.env.DB_AUTH_TOKEN,
});

export const prisma = new PrismaClient({ adapter });