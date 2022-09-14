import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
        <main className='flex-grow'>
          {children}
          <ToastContainer
            position='top-right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </main>

        {/*  Site footer */}
        <Footer />
      </div>
    </>
  )
}
