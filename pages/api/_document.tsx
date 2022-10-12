import Document, { Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    rendred() {
        return(
            <Html lang="pl">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
    }
}

export default MyDocument