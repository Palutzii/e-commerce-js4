import Header from "./Header";
import Footer from "./Footer";
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