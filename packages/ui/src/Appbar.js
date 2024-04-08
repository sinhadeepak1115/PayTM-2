"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Appbar = void 0;
const button_1 = require("./button");
const Appbar = ({ user, onSignin, onSignout }) => {
    return <div className="flex justify-between border-b px-4">
        <div className="text-lg flex flex-col justify-center">
            PayTM
        </div>
        <div className="flex flex-col justify-center pt-2">
            <button_1.Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</button_1.Button>
        </div>
    </div>;
};
exports.Appbar = Appbar;
