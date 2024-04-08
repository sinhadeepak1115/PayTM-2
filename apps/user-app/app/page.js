"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("next-auth/react");
const appbar_1 = require("@repo/ui/appbar");
function Page() {
    const session = (0, react_1.useSession)();
    return (<div>
      <appbar_1.Appbar onSignin={react_1.signIn} onSignout={react_1.signOut} user={session.data?.user}/>
   </div>);
}
exports.default = Page;
