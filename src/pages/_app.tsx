import RootLayout from '../components/RootLayout';
import { CartProvider } from "../CartContext";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
            <CartProvider>
                <RootLayout>
                    <Component {...pageProps} />
                </RootLayout>
            </CartProvider>
    );
}

export default MyApp;