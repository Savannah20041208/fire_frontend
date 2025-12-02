import React from 'react'
import './ARInteraction.css'

function ARInteraction() {
  return (
    <div className="ar-interaction">
      <div className="page-header">
        <h1>AR 互动体验</h1>
        <p>通过增强现实技术，实时预览数字服饰上身效果</p>
      </div>

      <div className="ar-container">
        <div className="ar-preview">
          <div className="ar-viewport">
            <div className="ar-placeholder">
              <div className="ar-camera-icon">📷</div>
              <p>AR 摄像头预览区域</p>
              <p className="ar-hint">开启摄像头后，将在此显示AR试穿效果</p>
            </div>
          </div>
          <div className="ar-controls">
            <button className="control-btn primary">启动摄像头</button>
            <button className="control-btn">切换前后摄像头</button>
            <button className="control-btn">拍照</button>
          </div>
        </div>

        <div className="ar-sidebar">
          <div className="sidebar-section">
            <h3>选择服饰</h3>
            <div className="garment-list">
              {[1, 2, 3, 4].map(id => (
                <div key={id} className="garment-item">
                  <div className="garment-thumbnail">
                    <div className="flame-pattern-small">
                      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50,90 Q40,75 45,60 Q50,50 55,40 Q60,30 50,20 Q40,25 35,35 Q30,45 25,55 Q20,65 25,75 Q30,85 50,90 Z" 
                              fill="url(#flameGradSmall)" opacity="0.8"/>
                        <defs>
                          <linearGradient id={`flameGradSmall${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#ff6b6b" />
                            <stop offset="50%" stopColor="#ff8e53" />
                            <stop offset="100%" stopColor="#ff6b6b" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="garment-info">
                    <h4>火焰纹服饰 {id}</h4>
                    <button className="select-btn">选择</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <h3>调整参数</h3>
            <div className="adjustment-controls">
              <div className="control-item">
                <label>颜色</label>
                <div className="color-picker">
                  <div className="color-option" style={{background: '#ff6b6b'}}></div>
                  <div className="color-option" style={{background: '#ff8e53'}}></div>
                  <div className="color-option" style={{background: '#ee5a6f'}}></div>
                  <div className="color-option" style={{background: '#c92a2a'}}></div>
                </div>
              </div>
              <div className="control-item">
                <label>尺寸</label>
                <input type="range" min="0.8" max="1.2" step="0.1" defaultValue="1" />
              </div>
              <div className="control-item">
                <label>位置</label>
                <div className="position-controls">
                  <button className="pos-btn">↑</button>
                  <div className="pos-mid">
                    <button className="pos-btn">←</button>
                    <button className="pos-btn">→</button>
                  </div>
                  <button className="pos-btn">↓</button>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>保存与分享</h3>
            <div className="action-buttons">
              <button className="action-btn primary">保存图片</button>
              <button className="action-btn">分享到社区</button>
              <button className="action-btn">生成AR码</button>
            </div>
          </div>
        </div>
      </div>

      <div className="ar-features">
        <h2>AR 功能特点</h2>
        <div className="features-list">
          <div className="feature-item">
            <div className="feature-icon">🎯</div>
            <h4>实时预览</h4>
            <p>即时查看服饰上身效果，无需等待</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🎨</div>
            <h4>个性化定制</h4>
            <p>调整颜色、尺寸等参数，找到最适合的样式</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📸</div>
            <h4>拍照分享</h4>
            <p>保存试穿效果，分享到社区</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🌐</div>
            <h4>跨平台支持</h4>
            <p>支持手机、平板等多种设备</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ARInteraction

