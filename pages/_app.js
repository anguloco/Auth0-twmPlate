import "/styles/globals.css"

// December 11 2020 
// DEFAULT EXAMPLE  https://jools.dev/nextjs-_appjs-example  READ for more info

const MyApp = ({ Component, pageProps }) => {
    return <Component {...pageProps }
    />
}
export default MyApp

// OR 

// function MyApp({ Component, pageProps }) {
//     return <Component {...pageProps} />
//   }

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

//   export default MyApp

// ANOTHER NOTE WITH TYPSCRIPT SAME 

//   The Component prop is the active page, so whenever you navigate between routes, Component will change to the new page. Therefore, any props you send to Component will be received by the page.

//   pageProps is an object with the initial props that were preloaded for your page by one of our data fetching methods, otherwise it's an empty object.

//   The App.getInitialProps receives a single argument called context.ctx. It's an object with the same set of properties as the context object in getInitialProps.