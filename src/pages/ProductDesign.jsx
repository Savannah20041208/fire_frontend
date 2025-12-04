import React from 'react'
import design1 from '../assets/design1.jpg'
import design2 from '../assets/design2.jpg'
import design3 from '../assets/design3.jpg'
import design4 from '../assets/design4.jpg'
import design5 from '../assets/design5.jpg'
import design6 from '../assets/design6.jpg'
import './ProductDesign.css'

function ProductDesign() {
  // 产品设计图数据
  const designs = [
    {
      id: 1,
      title: '火焰纹传统服饰',
      description: '融合经典彝族火焰纹样的传统服饰设计',
      category: '传统系列',
      image: design1
    },
    {
      id: 2,
      title: '现代火焰纹T恤',
      description: '将火焰纹元素融入现代T恤设计',
      category: '现代系列',
      image: design2
    },
    {
      id: 3,
      title: '火焰纹连衣裙',
      description: '优雅的连衣裙设计，火焰纹点缀',
      category: '时尚系列',
      image: design3
    },
    {
      id: 4,
      title: '火焰纹斗篷',
      description: '精美斗篷设计，展现火焰纹细节',
      category: '配饰系列',
      image: design4
    },
    {
      id: 5,
      title: 'AR数字服饰',
      description: '专为AR体验设计的虚拟服饰',
      category: '数字系列',
      image: design5
    },
    {
      id: 6,
      title: '火焰纹手提包',
      description: '个性化定制手提包设计',
      category: '定制系列',
      image: design6
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
                <img src={design.image} alt={design.title} className="product-image" />
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

