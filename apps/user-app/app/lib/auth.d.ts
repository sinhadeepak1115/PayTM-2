export declare const authOptions: {
    providers: import("next-auth/providers/credentials").CredentialsConfig<{
        phone: {
            label: string;
            type: string;
            placeholder: string;
            required: boolean;
        };
        password: {
            label: string;
            type: string;
            required: boolean;
        };
    }>[];
    secret: string;
    callbacks: {
        session({ token, session }: any): Promise<any>;
    };
};
//# sourceMappingURL=auth.d.ts.map