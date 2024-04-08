export declare const authOptions: {
    providers: import("next-auth/providers/oauth").OAuthConfig<import("next-auth/providers/google").GoogleProfile>[];
    callbacks: {
        signIn({ user, account }: {
            user: {
                email: string;
                name: string;
            };
            account: {
                provider: "google" | "github";
            };
        }): Promise<boolean>;
    };
    secret: string;
};
//# sourceMappingURL=auth.d.ts.map