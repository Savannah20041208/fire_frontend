import React from 'react'
import design1 from '../assets/design1.jpg'
import design2 from '../assets/design2.jpg'
import design3 from '../assets/design3.jpg'
import design4 from '../assets/design4.jpg'
import design5 from '../assets/design5.jpg'
import design6 from '../assets/design6.jpg'
import './ARInteraction.css'

function ARInteraction() {
  const garments = [
    { id: 1, title: '火焰纹传统服饰', category: '传统系列', image: design1 },
    { id: 2, title: '现代火焰纹T恤', category: '现代系列', image: design2 },
    { id: 3, title: '火焰纹连衣裙', category: '时尚系列', image: design3 },
    { id: 4, title: '火焰纹斗篷', category: '配饰系列', image: design4 },
    { id: 5, title: 'AR数字服饰', category: '数字系列', image: design5 },
    { id: 6, title: '火焰纹手提包', category: '定制系列', image: design6 }
  ]

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
              {garments.map(garment => (
                <div key={garment.id} className="garment-item">
                  <div className="garment-thumbnail">
                    <img src={garment.image} alt={garment.title} className="garment-image" />
                  </div>
                  <div className="garment-info">
                    <h4>{garment.title}</h4>
                    <span className="garment-category">{garment.category}</span>
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
            <div className="feature-header">
              <div className="feature-icon">🎯</div>
              <h4>实时预览</h4>
            </div>
            <p>即时查看服饰上身效果</p>
          </div>
          <div className="feature-item">
            <div className="feature-header">
              <div className="feature-icon">🎨</div>
              <h4>个性化定制</h4>
            </div>
            <p>调整颜色、尺寸等参数</p>
          </div>
          <div className="feature-item">
            <div className="feature-header">
              <div className="feature-icon">📸</div>
              <h4>拍照分享</h4>
            </div>
            <p>保存试穿效果，分享社区</p>
          </div>
          <div className="feature-item">
            <div className="feature-header">
              <div className="feature-icon">🌐</div>
              <h4>跨平台支持</h4>
            </div>
            <p>支持手机、平板等设备</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ARInteraction

