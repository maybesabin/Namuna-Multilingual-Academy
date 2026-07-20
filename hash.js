import bcrypt from "bcryptjs";

async function generateHash() {
  const hash = await bcrypt.hash("Sawishigh123#", 10);
  console.log(hash);
}

generateHash();