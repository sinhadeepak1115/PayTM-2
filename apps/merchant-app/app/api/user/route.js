"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const server_1 = require("next/server");
const client_1 = require("@repo/db/client");
const client = new client_1.PrismaClient();
const GET = async () => {
    await client.user.create({
        data: {
            email: "asd",
            name: "adsads"
        }
    });
    return server_1.NextResponse.json({
        message: "hi there"
    });
};
exports.GET = GET;
