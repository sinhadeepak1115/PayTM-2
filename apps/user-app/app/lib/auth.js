"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authOptions = void 0;
const client_1 = __importDefault(require("@repo/db/client"));
const credentials_1 = __importDefault(require("next-auth/providers/credentials"));
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.authOptions = {
    providers: [
        (0, credentials_1.default)({
            name: 'Credentials',
            credentials: {
                phone: { label: "Phone number", type: "text", placeholder: "1231231231", required: true },
                password: { label: "Password", type: "password", required: true }
            },
            // TODO: User credentials type from next-aut
            async authorize(credentials) {
                // Do zod validation, OTP validation here
                const hashedPassword = await bcrypt_1.default.hash(credentials.password, 10);
                const existingUser = await client_1.default.user.findFirst({
                    where: {
                        number: credentials.phone
                    }
                });
                if (existingUser) {
                    const passwordValidation = await bcrypt_1.default.compare(credentials.password, existingUser.password);
                    if (passwordValidation) {
                        return {
                            id: existingUser.id.toString(),
                            name: existingUser.name,
                            email: existingUser.number
                        };
                    }
                    return null;
                }
                try {
                    const user = await client_1.default.user.create({
                        data: {
                            number: credentials.phone,
                            password: hashedPassword
                        }
                    });
                    return {
                        id: user.id.toString(),
                        name: user.name,
                        email: user.number
                    };
                }
                catch (e) {
                    console.error(e);
                }
                return null;
            },
        })
    ],
    secret: process.env.JWT_SECRET || "secret",
    callbacks: {
        // TODO: can u fix the type here? Using any is bad
        async session({ token, session }) {
            session.user.id = token.sub;
            return session;
        }
    }
};
