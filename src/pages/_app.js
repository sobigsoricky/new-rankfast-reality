import store from '@/app/store';
import { Footer, Header } from '@/components';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/fonts.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.css";
import { useEffect } from 'react';


export default function App({ Component, pageProps }) {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])

  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <ToastContainer />
        <Footer />
      </Provider>
    </>
  )
}
