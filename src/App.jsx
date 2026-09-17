import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Services from './pages/Services';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import DataTreatment from './pages/DataTreatment';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="nosotros" element={<About />} />
        <Route path="soluciones" element={<Solutions />} />
        <Route path="servicios" element={<Services />} />
        <Route path="catalogo" element={<Catalog />} />
        <Route path="catalogo/:category" element={<Catalog />} />
        <Route path="producto/:slug" element={<ProductDetail />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogDetail />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="politica-de-privacidad" element={<PrivacyPolicy />} />
        <Route path="tratamiento-de-datos" element={<DataTreatment />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
