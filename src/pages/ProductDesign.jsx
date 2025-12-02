import React from 'react'
import './ProductDesign.css'

function ProductDesign() {
  // 模拟产品设计图数据
  const designs = [
    {
      id: 1,
      title: '火焰纹传统服饰',
      description: '融合经典彝族火焰纹样的传统服饰设计',
      category: '传统系列',
      image: '/api/placeholder/400/500'
    },
    {
      id: 2,
      title: '现代火焰纹T恤',
      description: '将火焰纹元素融入现代T恤设计',
      category: '现代系列',
      image: '/api/placeholder/400/500'
    },
    {
      id: 3,
      title: '火焰纹连衣裙',
      description: '优雅的连衣裙设计，火焰纹点缀',
      category: '时尚系列',
      image: '/api/placeholder/400/500'
    },
    {
      id: 4,
      title: '火焰纹配饰',
      description: '精美配饰设计，展现火焰纹细节',
      category: '配饰系列',
      image: '/api/placeholder/400/500'
    },
    {
      id: 5,
      title: 'AR数字服饰',
      description: '专为AR体验设计的虚拟服饰',
      category: '数字系列',
      image: '/api/placeholder/400/500'
    },
    {
      id: 6,
      title: '火焰纹定制款',
      description: '个性化定制服饰设计',
      category: '定制系列',
      image: '/api/placeholder/400/500'
    }
  ]

  return (
    <div className="product-design">
      <div className="page-header">
        <h1>产品设计图</h1>
        <p>探索融合彝族火焰纹元素的多样化服饰设计</p>
      </div>

      <div className="filter-section">
        <div className="filter-buttons">
          <button className="filter-btn active">全部</button>
          <button className="filter-btn">传统系列</button>
          <button className="filter-btn">现代系列</button>
          <button className="filter-btn">时尚系列</button>
          <button className="filter-btn">数字系列</button>
        </div>
      </div>

      <div className="designs-grid">
        {designs.map(design => (
          <div key={design.id} className="design-card">
            <div className="design-image-container">
              <div className="design-image">
                <div className="placeholder-image">
                  <div className="flame-pattern">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100,180 Q80,150 90,120 Q100,100 110,80 Q120,60 100,40 Q80,50 70,70 Q60,90 50,110 Q40,130 50,150 Q60,170 100,180 Z" 
                            fill="url(#flameGradient)" opacity="0.8"/>
                      <defs>
                        <linearGradient id="flameGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#ff6b6b" />
                          <stop offset="50%" stopColor="#ff8e53" />
                          <stop offset="100%" stopColor="#ff6b6b" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <span className="image-label">设计图 {design.id}</span>
                </div>
              </div>
              <div className="design-overlay">
                <button className="view-btn">查看详情</button>
                <button className="ar-btn">AR试穿</button>
              </div>
            </div>
            <div className="design-info">
              <span className="design-category">{design.category}</span>
              <h3>{design.title}</h3>
              <p>{design.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductDesign

