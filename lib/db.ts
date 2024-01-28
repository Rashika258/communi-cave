import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient({
    datasourceUrl: 'mysql://yl4ygj91bx0a8ltsjynk:pscale_pw_KaXMTt3FLRtcxnUuClSdf8n5jJR1tKI14gRwBK4dlEG@aws.connect.psdb.cloud/discord?sslaccept=strict&connect_timeout=1000'
 
});

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

db.$connect()
  .then(() => {
    console.log("Database connected successfully.");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error.message);
  })
  .finally(async () => {
    await db.$disconnect();
  });
