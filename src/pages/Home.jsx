import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">彝族火焰纹与 AR 互动数字服饰共创平台</h1>
          <p className="hero-subtitle">
            融合传统彝族文化精髓与现代AR技术，打造独特的数字服饰共创体验
          </p>
          <div className="hero-buttons">
            <Link to="/product" className="btn btn-primary">查看产品设计</Link>
            <Link to="/service" className="btn btn-secondary">了解服务流程</Link>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="container">
          <h2 className="section-title">平台特色</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>传统纹样数字化</h3>
              <p>将彝族火焰纹等传统图案进行数字化处理，保留文化精髓</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👗</div>
              <h3>个性化设计</h3>
              <p>用户可参与服饰设计，打造专属数字服饰作品</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>AR试穿体验</h3>
              <p>通过AR技术实时预览虚拟服饰上身效果</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>共创平台</h3>
              <p>设计师、用户共同参与，形成创意生态圈</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>社区互动</h3>
              <p>分享作品，交流设计，共同探索彝族文化</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>文化传承</h3>
              <p>深入了解彝族文化和火焰纹的深厚内涵</p>
            </div>
          </div>
        </div>
      </div>

      <div className="modules-section">
        <div className="container">
          <h2 className="section-title">功能模块</h2>
          <div className="modules-grid">
            <Link to="/product" className="module-card">
              <div className="module-icon">📐</div>
              <h3>产品设计</h3>
              <p>浏览丰富的产品设计图库</p>
            </Link>
            <Link to="/codesign" className="module-card">
              <div className="module-icon">✂️</div>
              <h3>共创设计</h3>
              <p>参与设计，创造专属作品</p>
            </Link>
            <Link to="/ar" className="module-card">
              <div className="module-icon">📱</div>
              <h3>AR互动</h3>
              <p>实时预览虚拟服饰效果</p>
            </Link>
            <Link to="/community" className="module-card">
              <div className="module-icon">💬</div>
              <h3>社区互动</h3>
              <p>分享作品，交流创意</p>
            </Link>
            <Link to="/culture" className="module-card">
              <div className="module-icon">📚</div>
              <h3>文化知识</h3>
              <p>了解彝族文化传承</p>
            </Link>
            <Link to="/user" className="module-card">
              <div className="module-icon">👤</div>
              <h3>用户中心</h3>
              <p>管理您的设计和订单</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <h2>开始您的数字服饰之旅</h2>
          <div className="cta-buttons">
            <Link to="/codesign" className="btn btn-large">开始设计</Link>
            <Link to="/ar" className="btn btn-large btn-secondary">体验AR互动</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

