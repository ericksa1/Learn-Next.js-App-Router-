const bcrypt = require('bcrypt');
const { sql } = require('@vercel/postgres');

async function seed() {
  const password = await bcrypt.hash('123456', 10);
  await sql`INSERT INTO users (email, password) VALUES ('user@nextmail.com', ${password})`;
}

seed().catch(console.error);