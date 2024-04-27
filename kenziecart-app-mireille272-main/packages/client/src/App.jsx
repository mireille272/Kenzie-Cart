import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ProductDetailPage from './pages/ProductDetailPage.jsx'
import ShoppingCartPage from './pages/ShoppingCartPage.jsx'
import CheckoutPage from './pages/CheckoutPage.jsx'
import { ErrorBoundary, Layout } from './components'
import NotFoundPage from './pages/NotFoundPage.jsx'

function App() {
  return (
    <>
      <ErrorBoundary>
        <Layout>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/p/:pid" element={<ProductDetailPage />} />
            <Route exact path="/cart" element={<ShoppingCartPage />} />
            <Route exact path="/checkout" element={<CheckoutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </ErrorBoundary>
    </>
  );
}

export default App
