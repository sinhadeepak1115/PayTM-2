"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authOptions = void 0;
const google_1 = __importDefault(require("next-auth/providers/google"));
const client_1 = __importDefault(require("@repo/db/client"));
exports.authOptions = {
    providers: [
        (0, google_1.default)({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        })
    ],
    callbacks: {
        async signIn({ user, account }) {
            console.log("hi signin");
            if (!user || !user.email) {
                return false;
            }
            await client_1.default.merchant.upsert({
                select: {
                    id: true
                },
                where: {
                    email: user.email
                },
                create: {
                    email: user.email,
                    name: user.name,
                    auth_type: account.provider === "google" ? "Google" : "Github" // Use a prisma type here
                },
                update: {
                    name: user.name,
                    auth_type: account.provider === "google" ? "Google" : "Github" // Use a prisma type here
                }
            });
            return true;
        }
    },
    secret: process.env.NEXTAUTH_SECRET || "secret"
};
