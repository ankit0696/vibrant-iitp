import Features from '@/components/home/Features'
import Hero from '@/components/home/Hero'
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <Layout title='' keywords='' description=''>
      <main>
        <Hero />
        <Features />
      </main>
    </Layout>
  )
}
