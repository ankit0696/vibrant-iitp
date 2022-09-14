import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'

export default function Layout({
  title = '',
  keywords = '',
  description = '',
  children,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
      </Head>
      <div className='overflow-hidden min-h-screen'>
        <Header />
        {/*  Page content */}
        <main className='flex-grow'>{children}</main>
        <Toaster />

        {/*  Site footer */}
        <Footer />
      </div>
    </>
  )
}
