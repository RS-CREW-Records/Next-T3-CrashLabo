import { GeistSans } from "geist/font/sans";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "$/utils/api";

import "$/styles/globals.css";
import Navbar from "$/lib/components/Navbar";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
        <Navbar />
      <div className="font-sans ${inter.variable} bg-gradient-to-b from-[#1d232a] to-[#a6f7a6] h-screen w-full">
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
