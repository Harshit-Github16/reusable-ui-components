import { Poppins } from 'next/font/google'
import './globals.css'
import MainWrapper from '../components/Layout/MainWrapper'
import 'react-toastify/dist/ReactToastify.css'
import ClientFooter from '../components/ClientFooter'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
})

// ... rest of your imports and constants ...

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5688GVQ');` }} />
      </head>
      <body className={`bg-[#F8FBFF] dark:bg-[#0d1425] scroll-smooth ${poppins.className}`}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5688GVQ" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} /></noscript>
        {/* <MainWrapper>{children}</MainWrapper> */}
        {/* <Header /> */}
        {children}
        <ClientFooter />
        {/* {children} */}
      </body>
    </html>
  )
} 