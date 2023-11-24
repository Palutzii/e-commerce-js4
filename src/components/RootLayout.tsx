import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import styles from '../styles/Root.module.css'

export default function RootLayout({ children }) {
    return (
            <>
                <Head>
                    <title>My page title</title>
                </Head>
                <Header />
                <main className={styles.main}>
                    <div className="site-wrapper">
                        {children}
                    </div>
                </main>
                <Footer />
            </>
    );
}