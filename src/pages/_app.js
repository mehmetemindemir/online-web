import {Fragment} from "react";
import App from "next/app";
import Head from "next/head";
import withReduxStore from "../lib/with-redux-store";
import {Provider} from "react-redux";
import {ToastProvider} from "react-toast-notifications";
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";
import "../assets/scss/styles.scss";
import Router from 'next/router';
import NProgress from 'nprogress';
import * as actions from "../redux/actions";

NProgress.configure({showSpinner: true, color: "red"});
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class MyApp extends App {
    constructor(props) {
        super(props);
        this.persistor = persistStore(props.reduxStore);
    }

    state = {
        loading: false
    }

    componentDidMount() {
        localStorage.setItem("company", JSON.stringify(this.props.company))
        console.log("componentDidMount :", JSON.parse(localStorage.getItem("company")))
    }

    static async getInitialProps(ctx) {
        let company = null

        const reqCompany = {
            lang: 'TR'
        }
        const resCompany = await actions.getAsyncCompany(reqCompany);
        company = resCompany.company.data[0];
        return {company: company}
    }


    render() {
        const {Component, pageProps, reduxStore} = this.props;
        return (
            <Fragment>
                <Fragment>
                    <Head>
                        <title>Shopping</title>
                        <link rel="icon" href={process.env.PUBLIC_URL + "/favicon.ico"}/>
                        <link
                            href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
                            rel="stylesheet"
                        ></link>
                    </Head>
                    <ToastProvider placement="bottom-left">
                        <Provider store={reduxStore}>
                            <PersistGate
                                loading={<Component {...pageProps} />}
                                persistor={this.persistor}
                            >
                                <Component {...pageProps}  />
                            </PersistGate>
                        </Provider>
                    </ToastProvider>
                </Fragment>
            </Fragment>
        );
    }
}

export default withReduxStore(MyApp);
