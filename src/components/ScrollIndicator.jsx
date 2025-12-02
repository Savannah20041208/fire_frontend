import React, { useEffect, useState } from 'react'
import './ScrollIndicator.css'

function ScrollIndicator({ containerRef }) {
  const [showIndicator, setShowIndicator] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const container = containerRef?.current
    if (!container) return

    const handleScroll = () => {
      const scrollTop = container.scrollTop
      const scrollHeight = container.scrollHeight
      const clientHeight = container.clientHeight
      
      // 计算滚动进度百分比（0-100）
      const maxScroll = scrollHeight - clientHeight
      const progress = maxScroll > 0 
        ? Math.min(100, (scrollTop / maxScroll) * 100) 
        : 0
      
      setScrollProgress(progress)
      setShowIndicator(scrollHeight > clientHeight + 10) // 有足够内容才显示
    }

    // 初始检查和延迟检查（等待内容加载）
    const checkScroll = () => {
      handleScroll()
      // 延迟再次检查，确保内容已渲染
      setTimeout(handleScroll, 100)
    }
    
    checkScroll()

    container.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    
    // 监听内容变化
    const observer = new MutationObserver(handleScroll)
    observer.observe(container, { childList: true, subtree: true })

    return () => {
      container.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      observer.disconnect()
    }
  }, [containerRef])

  if (!showIndicator) return null

  // 计算滚动条位置（0% 到 65%，因为滚动条高度是35%）
  const thumbPosition = Math.min(65, (scrollProgress / 100) * 65)

  return (
    <div className="scroll-indicator">
      <div 
        className="scroll-progress" 
        style={{ transform: `translateY(${thumbPosition}%)` }}
      >
        <div className="scroll-thumb"></div>
      </div>
    </div>
  )
}

export default ScrollIndicator

