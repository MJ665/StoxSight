import { PrismaClient, Prisma } from '../src/generated/prisma'


const prisma = new PrismaClient();

async function main() {
  // --- Seed users ---
  const alice = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@example.com',
      password: 'hashedpassword123', // Normally hash this with bcryptjs
      authMethod: 'EMAIL',
      portfolios: {
        create: [
          {
            type: 'INDIA',
            stockSymbol: 'TCS',
            quantity: 10,
          },
        ],
      },
      watchlists: {
        create: [
          {
            type: 'US',
            stockSymbol: 'AAPL',
          },
        ],
      },
    },
  });

  const bob = await prisma.user.create({
    data: {
      name: 'Bob',
      email: 'bob@example.com',
      password: null,
      authMethod: 'GOOGLE',
    },
  });

  // --- Seed India stocks ---
  await prisma.indiaStock.createMany({
    data: [
      {
        symbol: 'TCS',
        name: 'Tata Consultancy Services',
        prevClosePrice: 3450.0,
        openPrice: 3465.0,
        currentPrice: 3480.0,
      },
      {
        symbol: 'INFY',
        name: 'Infosys',
        prevClosePrice: 1350.0,
        openPrice: 1340.0,
        currentPrice: 1365.0,
      },
    ],
  });

  // --- Seed US stocks ---
  await prisma.uSStock.createMany({
    data: [
      {
        symbol: 'AAPL',
        name: 'Apple Inc.',
        prevClosePrice: 190.0,
        openPrice: 191.0,
        currentPrice: 189.5,
      },
      {
        symbol: 'GOOGL',
        name: 'Alphabet Inc.',
        prevClosePrice: 2800.0,
        openPrice: 2810.0,
        currentPrice: 2795.0,
      },
    ],
  });

  // --- Seed Crypto assets ---
  await prisma.cryptoAsset.createMany({
    data: [
      {
        symbol: 'BTC',
        name: 'Bitcoin',
        prevClosePrice: 65000.0,
        openPrice: 65200.0,
        currentPrice: 65500.0,
      },
      {
        symbol: 'ETH',
        name: 'Ethereum',
        prevClosePrice: 3200.0,
        openPrice: 3220.0,
        currentPrice: 3195.0,
      },
    ],
  });

  console.log('✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
