const prisma = require("./prisma");

const { puppies, owners, tricks, puppies_tricks } = require("./seedData");

const seedDb = async () => {
  console.log("creating owners...");
  await Promise.all(
    owners.map(async (owner) => {
      return prisma.owners.create({
        data: owner,
      });
    })
  );

  console.log("creating puppies...");
  await Promise.all(
    puppies.map(async (puppy) => {
      return prisma.puppies.create({
        data: puppy,
      });
    })
  );

  console.log("creating tricks....");
  await Promise.all(
    tricks.map(async (trick) => {
      return prisma.tricks.create({
        data: trick,
      });
    })
  );

  console.log("creating puppy_tricks...");
  await Promise.all(
    puppies_tricks.map(async (pt) => {
      return prisma.puppies_Tricks.upsert({
        data: pt,
      });
    })
  );
};

const initDb = async () => {
  try {
    await seedDb();
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
};

initDb();
