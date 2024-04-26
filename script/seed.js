const { db } = require("@vercel/postgres");

const invoices = [
  {
    merek: "Toyota",
    jenis: "SUV",
    jumlah_stok: 2,
    harga: 25000000,
    keterangan: "-",
  },
];

async function seedInvoices(client) {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  // Create the "invoices" table if it doesn't exist
  const createTable = await client.sql`
  CREATE TABLE IF NOT EXISTS invoices (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    merek TEXT NOT NULL,
    jenis TEXT NOT NULL,
    jumlah_stok INT NOT NULL,
    harga INT NOT NULL,
    keterangan TEXT NOT NULL
  );
`;

  console.log(`Created "invoices" table`);

  // Insert data into the "invoices" table
  const insertedInvoices = await Promise.all(
    invoices.map(
      (invoice) => client.sql`
        INSERT INTO invoices (merek, jenis, jumlah_stok, harga, keterangan)
        VALUES (${invoice.merek}, ${invoice.jenis}, ${invoice.jumlah_stok}, ${invoice.harga}, ${invoice.keterangan})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  console.log(`Seeded ${insertedInvoices.length} products`);

  return {
    createTable,
    invoices: insertedInvoices,
  };
}

async function seed() {
  const client = await db.connect();

  await seedInvoices(client);

  client.release();
}

seed().catch((error) =>
  console.error(
    "An error occurred while attempting to seed the database:",
    error
  )
);
