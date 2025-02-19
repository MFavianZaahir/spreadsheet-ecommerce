import { PrismaClient } from "@prisma/client";

declare global {
    // eslint-disable-next-line no-var
    var prisma: PrismaClient;

    namespace NodeJS {
        interface ProcessEnv {
            GOOGLE_CLIENT_ID: string;
            GOOGLE_CLIENT_SECRET: string;
            GOOGLE_PRIVATE_KEY: string;
            GOOGLE_SHEET_ID: string;
            GOOGLE_APPLICATION_CREDENTIALS: string;
            GOOGLE_SERVICE_ACCOUNT_EMAIL: string;
        }
    }
}