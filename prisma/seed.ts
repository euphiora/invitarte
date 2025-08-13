import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
   await prisma.user.create({
      data: {
        email: 'fiorella.aizaga@yahoo.es',
        name: 'Fiorella',
        password: await bcrypt.hash('123', 10),
      },
    }),

  console.log('Seeding completed.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });