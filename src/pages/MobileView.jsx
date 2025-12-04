import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import PhoneFrame from '../components/PhoneFrame'
import ProductDesign from './ProductDesign'
import ServiceFlow from './ServiceFlow'
import CoDesign from './CoDesign'
import ARInteraction from './ARInteraction'
import Community from './Community'
import Culture from './Culture'
import UserCenter from './UserCenter'
import { getSwipeDirection } from '../utils/touchUtils'
import logo from '../assets/logo.jpg'
import './MobileView.css'

function MobileView() {
  const navigate = useNavigate()
  const location = useLocation()
  const [currentPage, setCurrentPage] = useState('首页')
  const touchStartRef = useRef(null)
  const contentRef = useRef(null)

  // 页面标题映射
  const pageTitles = {
    '/mobile': '首页',
    '/mobile/product': '产品设计',
    '/mobile/service': '服务流程',
    '/mobile/codesign': '共创设计',
    '/mobile/ar': 'AR互动',
    '/mobile/community': '社区',
    '/mobile/culture': '文化知识',
    '/mobile/user': '用户中心'
  }

  useEffect(() => {
    const title = pageTitles[location.pathname] || '首页'
    setCurrentPage(title)
  }, [location.pathname])

  // 触摸事件处理 - 监听phone-content容器的滚动
  useEffect(() => {
    // 获取phone-content容器（实际的滚动容器）
    const phoneContent = contentRef.current?.closest('.phone-content') || 
                         document.querySelector('.phone-content')
    if (!phoneContent) return

    const handleTouchStart = (e) => {
      touchStartRef.current = {
        clientX: e.touches[0].clientX,
        clientY: e.touches[0].clientY
      }
    }

    const handleTouchEnd = (e) => {
      if (!touchStartRef.current) return

      const touchEnd = {
        clientX: e.changedTouches[0].clientX,
        clientY: e.changedTouches[0].clientY
      }

      const direction = getSwipeDirection(touchStartRef.current, touchEnd)
      
      // 右滑返回（仅在非首页时，且不是垂直滚动）
      const deltaY = Math.abs(touchEnd.clientY - touchStartRef.current.clientY)
      const deltaX = Math.abs(touchEnd.clientX - touchStartRef.current.clientX)
      
      // 只有在水平滑动明显大于垂直滑动时才触发返回
      if (deltaX > deltaY && deltaX > 50 && direction === 'right' && location.pathname !== '/mobile') {
        navigate('/mobile')
      }

      touchStartRef.current = null
    }

    // 滚动事件处理
    const handleScroll = () => {
      if (!phoneContent) return
      
      const scrollTop = phoneContent.scrollTop
      const scrollHeight = phoneContent.scrollHeight
      const clientHeight = phoneContent.clientHeight
      
      // 添加滚动类名用于样式控制
      if (scrollTop > 10) {
        phoneContent.classList.add('scrolling')
      } else {
        phoneContent.classList.remove('scrolling')
      }
      
      // 顶部/底部指示
      if (scrollTop < 50) {
        phoneContent.classList.add('scroll-top')
      } else {
        phoneContent.classList.remove('scroll-top')
      }
      
      if (scrollTop + clientHeight >= scrollHeight - 50) {
        phoneContent.classList.add('scroll-bottom')
      } else {
        phoneContent.classList.remove('scroll-bottom')
      }
    }

    phoneContent.addEventListener('touchstart', handleTouchStart, { passive: true })
    phoneContent.addEventListener('touchend', handleTouchEnd, { passive: true })
    phoneContent.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      phoneContent.removeEventListener('touchstart', handleTouchStart)
      phoneContent.removeEventListener('touchend', handleTouchEnd)
      phoneContent.removeEventListener('scroll', handleScroll)
    }
  }, [location.pathname, navigate])

  const handleBack = () => {
    if (location.pathname !== '/mobile') {
      navigate('/mobile')
    }
  }

  // 根据路径渲染对应组件
  const renderContent = () => {
    switch (location.pathname) {
      case '/mobile':
        return <MobileHome />
      case '/mobile/product':
        return <ProductDesign />
      case '/mobile/service':
        return <ServiceFlow />
      case '/mobile/codesign':
        return <CoDesign />
      case '/mobile/ar':
        return <ARInteraction />
      case '/mobile/community':
        return <Community />
      case '/mobile/culture':
        return <Culture />
      case '/mobile/user':
        return <UserCenter />
      default:
        return <MobileHome />
    }
  }

  return (
    <PhoneFrame currentPage={currentPage}>
      <div className="mobile-app" ref={contentRef}>
        {/* 返回按钮功能 */}
        {location.pathname !== '/mobile' && (
          <div 
            className="mobile-back-btn" 
            onClick={handleBack}
            onTouchStart={(e) => e.stopPropagation()}
          >
            ← 返回
          </div>
        )}

        {renderContent()}

        {/* 底部导航栏 */}
        <div className="mobile-bottom-nav">
          <div 
            className={`nav-item ${location.pathname === '/mobile' ? 'active' : ''}`}
            onClick={() => navigate('/mobile')}
          >
            <span className="nav-icon">🏠</span>
            <span className="nav-label">首页</span>
          </div>
          <div 
            className={`nav-item ${location.pathname === '/mobile/product' ? 'active' : ''}`}
            onClick={() => navigate('/mobile/product')}
          >
            <span className="nav-icon">📐</span>
            <span className="nav-label">设计</span>
          </div>
          <div 
            className={`nav-item ${location.pathname === '/mobile/community' ? 'active' : ''}`}
            onClick={() => navigate('/mobile/community')}
          >
            <span className="nav-icon">💬</span>
            <span className="nav-label">社区</span>
          </div>
          <div 
            className={`nav-item ${location.pathname === '/mobile/user' ? 'active' : ''}`}
            onClick={() => navigate('/mobile/user')}
          >
            <span className="nav-icon">👤</span>
            <span className="nav-label">我的</span>
          </div>
        </div>
      </div>
    </PhoneFrame>
  )
}

// 移动端首页组件
function MobileHome() {
  const navigate = useNavigate()

  const modules = [
    { path: '/mobile/product', icon: '📐', title: '产品设计', desc: '浏览设计作品' },
    { path: '/mobile/codesign', icon: '✂️', title: '共创设计', desc: '参与设计创作' },
    { path: '/mobile/service', icon: '📋', title: '服务流程', desc: '了解服务流程' },
    { path: '/mobile/ar', icon: '📱', title: 'AR互动', desc: 'AR试穿体验' },
    { path: '/mobile/community', icon: '💬', title: '社区', desc: '分享交流' },
    { path: '/mobile/culture', icon: '📚', title: '文化知识', desc: '了解彝族文化' }
  ]

  return (
    <div className="mobile-home">
      <div className="mobile-hero">
        <img src={logo} alt="彝族火焰纹Logo" className="mobile-hero-logo" />
        <h1 className="mobile-title">彝族火焰纹 AR 共创平台</h1>
        <p className="mobile-subtitle">融合传统与现代的数字服饰共创体验</p>
      </div>

      <div className="mobile-modules">
        {modules.map((module, idx) => (
          <div
            key={idx}
            className="mobile-module-card"
            onClick={() => navigate(module.path)}
            onTouchStart={(e) => e.stopPropagation()}
          >
            <div className="module-icon-large">{module.icon}</div>
            <div className="module-info">
              <h3>{module.title}</h3>
              <p>{module.desc}</p>
            </div>
            <div className="module-arrow">→</div>
          </div>
        ))}
      </div>

      <div className="mobile-features">
        <h2 className="section-title-mobile">平台特色</h2>
        <div className="features-list-mobile">
          <div className="feature-item-mobile">
            <span className="feature-icon">🎨</span>
            <div>
              <h4>传统纹样数字化</h4>
              <p>保留文化精髓</p>
            </div>
          </div>
          <div className="feature-item-mobile">
            <span className="feature-icon">👗</span>
            <div>
              <h4>个性化设计</h4>
              <p>打造专属作品</p>
            </div>
          </div>
          <div className="feature-item-mobile">
            <span className="feature-icon">📱</span>
            <div>
              <h4>AR试穿体验</h4>
              <p>实时预览效果</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileView

