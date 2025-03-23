import { Lucia } from "lucia";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { prisma } from "./prisma";

const adapter = new PrismaAdapter(prisma.session, prisma.user, {
  user: { schema: undefined },
  session: { schema: undefined }
});

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (attributes) => ({
    email: attributes.email,
    fullName: attributes.fullName,
    isAdmin: attributes.isAdmin,
  }),
});

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: {
      email: string;
      fullName: string | null;
      isAdmin: boolean;
    };
  }
}
