import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import ProductDesign from './pages/ProductDesign'
import ServiceFlow from './pages/ServiceFlow'
import ARInteraction from './pages/ARInteraction'
import CoDesign from './pages/CoDesign'
import UserCenter from './pages/UserCenter'
import Community from './pages/Community'
import Culture from './pages/Culture'
import MobileView from './pages/MobileView'
import logo from './assets/logo.jpg'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        {/* 手机视图路由 */}
        <Route path="/mobile/*" element={<MobileView />} />
        
        {/* 桌面视图路由 */}
        <Route path="/*" element={
          <div className="app">
            <nav className="navbar">
              <div className="nav-container">
                <Link to="/" className="nav-logo">
                  <img src={logo} alt="彝族火焰纹Logo" className="logo-image" />
                  <h1>彝族火焰纹 AR 共创平台</h1>
                </Link>
                <ul className="nav-menu">
                  <li><Link to="/">首页</Link></li>
                  <li><Link to="/product">产品设计</Link></li>
                  <li><Link to="/service">服务流程</Link></li>
                  <li><Link to="/codesign">共创设计</Link></li>
                  <li><Link to="/ar">AR互动</Link></li>
                  <li><Link to="/community">社区</Link></li>
                  <li><Link to="/culture">文化知识</Link></li>
                  <li><Link to="/user">用户中心</Link></li>
                  <li><Link to="/mobile" className="mobile-link">📱 手机视图</Link></li>
                </ul>
              </div>
            </nav>
            
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<ProductDesign />} />
                <Route path="/service" element={<ServiceFlow />} />
                <Route path="/codesign" element={<CoDesign />} />
                <Route path="/ar" element={<ARInteraction />} />
                <Route path="/community" element={<Community />} />
                <Route path="/culture" element={<Culture />} />
                <Route path="/user" element={<UserCenter />} />
              </Routes>
            </main>
            
            <footer className="footer">
              <p>© 2024 彝族火焰纹与 AR 互动数字服饰共创平台</p>
            </footer>
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App

