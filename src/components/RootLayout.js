import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function RootLayout({ children }) {
    return (
            <>
                <Head>
                    <title>My page title</title>
                </Head>
                <Header />
                <main>{children}</main>
                <Footer />
            </>
    );
}