import React, { useRef, useEffect } from 'react'
import ScrollIndicator from './ScrollIndicator'
import './PhoneFrame.css'

function PhoneFrame({ children, currentPage = '首页' }) {
  const contentRef = useRef(null)

  // 确保滚动功能正常工作
  useEffect(() => {
    const content = contentRef.current
    if (!content) return

    // 强制启用滚动
    const enableScroll = () => {
      content.style.overflowY = 'scroll'
      content.style.overflowX = 'hidden'
      content.style.webkitOverflowScrolling = 'touch'
    }

    enableScroll()

    // 确保触摸滚动正常工作
    const handleTouchMove = (e) => {
      // 不阻止默认行为，允许滚动
      // 不调用stopPropagation，让滚动正常进行
    }

    const handleWheel = (e) => {
      // 允许默认滚动行为
      // 不阻止，让滚动正常进行
    }

    content.addEventListener('touchmove', handleTouchMove, { passive: true })
    content.addEventListener('wheel', handleWheel, { passive: true })

    return () => {
      content.removeEventListener('wheel', handleWheel)
      content.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  return (
    <div className="phone-frame-container">
      <div className="phone-frame">
        {/* 手机外框 */}
        <div className="phone-bezel">
          {/* 顶部扬声器 */}
          <div className="phone-speaker"></div>
          {/* 前置摄像头 */}
          <div className="phone-camera"></div>
          
          {/* 屏幕区域 */}
          <div className="phone-screen">
            {/* 状态栏 */}
            <div className="phone-status-bar">
              <div className="status-left">
                <span className="status-time">9:41</span>
              </div>
              <div className="status-right">
                <span className="status-signal">📶</span>
                <span className="status-wifi">📶</span>
                <span className="status-battery">🔋</span>
              </div>
            </div>

            {/* 手机导航栏 */}
            <div className="phone-navbar">
              <div className="phone-nav-back">
                <span>←</span>
              </div>
              <div className="phone-nav-title">{currentPage}</div>
              <div className="phone-nav-menu">
                <span>☰</span>
              </div>
            </div>

            {/* 内容区域 */}
            <div className="phone-content" ref={contentRef}>
              {children}
              <ScrollIndicator containerRef={contentRef} />
            </div>
          </div>

          {/* 底部Home指示器 */}
          <div className="phone-home-indicator"></div>
        </div>
      </div>
    </div>
  )
}

export default PhoneFrame

