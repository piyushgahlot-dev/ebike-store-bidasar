import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import FloatingButtons from './components/FloatingButtons.jsx'
import Loader from './components/Loader.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Models = lazy(() => import('./pages/Models.jsx'))
const ModelDetail = lazy(() => import('./pages/ModelDetail.jsx'))
const Gallery = lazy(() => import('./pages/Gallery.jsx'))
const Finance = lazy(() => import('./pages/Finance.jsx'))
const Services = lazy(() => import('./pages/Services.jsx'))
const FAQ = lazy(() => import('./pages/FAQ.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Privacy = lazy(() => import('./pages/Privacy.jsx'))
const Terms = lazy(() => import('./pages/Terms.jsx'))
const Disclaimer = lazy(() => import('./pages/Disclaimer.jsx'))
const CookiePolicy = lazy(() => import('./pages/CookiePolicy.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-bg bg-noise">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/models" element={<Models />} />
            <Route path="/models/:slug" element={<ModelDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
