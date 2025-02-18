import { PrismaClient } from "@prisma/client";

declare global {
    // eslint-disable-next-line no-var
    var prisma: PrismaClient;

    namespace NodeJS {
        interface ProcessEnv {
            GOOGLE_CLIENT_ID: string;
            GOOGLE_CLIENT_SECRET: string;
            GOOGLE_PRIVATE_KEY: string;
            NEXT_PUBLIC_GOOGLE_SHEET_ID: string;
            GOOGLE_APPLICATION_CREDENTIALS: string;
            NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL: string;
        }
    }
}