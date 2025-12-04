import React, { useState } from 'react'
import myDesign1 from '../assets/my-design1.jpg'
import myDesign2 from '../assets/my-design2.jpg'
import fireClassic from '../assets/fire-classic.jpg'
import fireModern from '../assets/fire-modern.jpg'
import fireSimple from '../assets/fire-simple.jpg'
import fireGeometric from '../assets/fire-geometric.jpg'
import fireAbstract from '../assets/fire-abstract.jpg'
import fireComposite from '../assets/fire-composite.jpg'
import './CoDesign.css'

function CoDesign() {
  const [selectedPattern, setSelectedPattern] = useState(null)
  const [selectedGarment, setSelectedGarment] = useState(null)
  const [designColor, setDesignColor] = useState('#ff6b6b')
  const [designSize, setDesignSize] = useState('medium')

  // 火焰纹样库
  const patterns = [
    { id: 1, name: '经典火焰纹', description: '传统彝族经典火焰纹样', category: '传统', image: fireClassic },
    { id: 2, name: '现代火焰纹', description: '现代演绎的火焰纹样', category: '现代', image: fireModern },
    { id: 3, name: '简约火焰纹', description: '简化设计的火焰纹样', category: '简约', image: fireSimple },
    { id: 4, name: '几何火焰纹', description: '几何化处理的火焰纹样', category: '几何', image: fireGeometric },
    { id: 5, name: '抽象火焰纹', description: '抽象艺术风格的火焰纹', category: '抽象', image: fireAbstract },
    { id: 6, name: '复合火焰纹', description: '多元素复合的火焰纹样', category: '复合', image: fireComposite }
  ]

  // 我的设计作品
  const myDesigns = [
    { id: 1, title: '火焰纹T恤', date: '2024-01-15', image: myDesign1 },
    { id: 2, title: '现代火焰纹连衣裙', date: '2024-01-12', image: myDesign2 }
  ]

  // 服饰模板
  const garments = [
    { id: 1, name: 'T恤', type: 'tshirt' },
    { id: 2, name: '连衣裙', type: 'dress' },
    { id: 3, name: '外套', type: 'jacket' },
    { id: 4, name: '配饰', type: 'accessory' }
  ]

  const colors = ['#ff6b6b', '#ff8e53', '#ee5a6f', '#c92a2a', '#ffd93d', '#6bcf7f', '#4d96ff', '#9b59b6']

  return (
    <div className="co-design">
      <div className="page-header">
        <h1>共创设计</h1>
        <p>选择纹样和服饰类型，打造专属数字服饰设计</p>
      </div>

      <div className="design-workspace">
        <div className="workspace-left">
          {/* 纹样库 */}
          <div className="section-card">
            <h3>火焰纹样库</h3>
            <div className="patterns-grid">
              {patterns.map(pattern => (
                <div
                  key={pattern.id}
                  className={`pattern-card ${selectedPattern?.id === pattern.id ? 'selected' : ''}`}
                  onClick={() => setSelectedPattern(pattern)}
                >
                  <div className="pattern-preview">
                    <img src={pattern.image} alt={pattern.name} className="pattern-image" />
                  </div>
                  <div className="pattern-info">
                    <span className="pattern-category">{pattern.category}</span>
                    <h4>{pattern.name}</h4>
                    <p>{pattern.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 服饰类型选择 */}
          <div className="section-card">
            <h3>选择服饰类型</h3>
            <div className="garments-grid">
              {garments.map(garment => (
                <div
                  key={garment.id}
                  className={`garment-type-card ${selectedGarment?.id === garment.id ? 'selected' : ''}`}
                  onClick={() => setSelectedGarment(garment)}
                >
                  <div className="garment-icon">{garment.type === 'tshirt' ? '👕' : garment.type === 'dress' ? '👗' : garment.type === 'jacket' ? '🧥' : '👒'}</div>
                  <h4>{garment.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="workspace-center">
          {/* 设计预览区 */}
          <div className="section-card preview-card">
            <h3>设计预览</h3>
            <div className="design-preview-area">
              {selectedGarment && selectedPattern ? (
                <div className="preview-content">
                  <div className="garment-preview">
                    <div className="garment-outline">
                      {selectedGarment.type === 'tshirt' && (
                        <svg viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg">
                          <path d="M100,50 L80,80 L80,200 L120,200 L120,80 Z M80,80 L50,100 L50,120 L80,120 M120,80 L150,100 L150,120 L120,120" 
                                stroke="#333" strokeWidth="2" fill={designColor} opacity="0.3"/>
                          <circle cx="100" cy="130" r="30" fill="url(#flamePattern)" opacity="0.8"/>
                          <defs>
                            <pattern id="flamePattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                              <path d="M10,20 Q8,15 10,10 Q12,5 10,0" stroke={designColor} strokeWidth="1" fill="none"/>
                            </pattern>
                          </defs>
                        </svg>
                      )}
                      {selectedGarment.type === 'dress' && (
                        <svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg">
                          <path d="M100,30 Q90,50 95,80 L95,260 Q95,270 100,270 Q105,270 105,260 L105,80 Q110,50 100,30" 
                                stroke="#333" strokeWidth="2" fill={designColor} opacity="0.3"/>
                          <circle cx="100" cy="120" r="25" fill="url(#flamePattern)" opacity="0.8"/>
                        </svg>
                      )}
                      {selectedGarment.type === 'jacket' && (
                        <svg viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg">
                          <path d="M100,40 L70,80 L70,220 L130,220 L130,80 Z" 
                                stroke="#333" strokeWidth="2" fill={designColor} opacity="0.3"/>
                          <circle cx="100" cy="130" r="28" fill="url(#flamePattern)" opacity="0.8"/>
                        </svg>
                      )}
                      {selectedGarment.type === 'accessory' && (
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="100" cy="100" r="60" stroke="#333" strokeWidth="2" fill={designColor} opacity="0.3"/>
                          <path d="M100,40 Q110,50 120,60 Q130,70 120,80 Q110,90 100,100" 
                                fill="url(#flamePattern)" opacity="0.8"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className="preview-info">
                    <p><strong>纹样：</strong>{selectedPattern.name}</p>
                    <p><strong>服饰：</strong>{selectedGarment.name}</p>
                    <p><strong>颜色：</strong>{designColor}</p>
                  </div>
                </div>
              ) : (
                <div className="empty-preview">
                  <div className="empty-icon">🎨</div>
                  <p>请选择纹样和服饰类型开始设计</p>
                </div>
              )}
            </div>
          </div>

          {/* 设计工具 */}
          <div className="section-card">
            <h3>设计工具</h3>
            <div className="design-tools">
              <div className="tool-group">
                <label>颜色选择</label>
                <div className="color-picker-tool">
                  {colors.map(color => (
                    <div
                      key={color}
                      className={`color-option ${designColor === color ? 'active' : ''}`}
                      style={{ backgroundColor: color }}
                      onClick={() => setDesignColor(color)}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="tool-group">
                <label>尺寸</label>
                <div className="size-selector">
                  {['small', 'medium', 'large'].map(size => (
                    <button
                      key={size}
                      className={`size-btn ${designSize === size ? 'active' : ''}`}
                      onClick={() => setDesignSize(size)}
                    >
                      {size === 'small' ? '小' : size === 'medium' ? '中' : '大'}
                    </button>
                  ))}
                </div>
              </div>
              <div className="tool-group">
                <label>位置调整</label>
                <div className="position-tool">
                  <input type="range" min="0" max="100" defaultValue="50" />
                  <span>左右</span>
                </div>
                <div className="position-tool">
                  <input type="range" min="0" max="100" defaultValue="50" />
                  <span>上下</span>
                </div>
              </div>
            </div>
          </div>

          {/* 我的设计 */}
          <div className="section-card">
            <h3>我的设计</h3>
            <div className="my-designs">
              {myDesigns.map(design => (
                <div key={design.id} className="design-item">
                  <div className="design-thumbnail">
                    <img src={design.image} alt={design.title} className="design-img" />
                  </div>
                  <div className="design-meta">
                    <p>{design.title}</p>
                    <span>{design.date}</span>
                  </div>
                </div>
              ))}
              <button className="view-all-btn">查看全部 →</button>
            </div>
          </div>
        </div>
      </div>

      {/* 底部操作区 */}
      <div className="workspace-bottom">
        {/* 操作面板 */}
        <div className="section-card">
          <h3>操作</h3>
          <div className="action-buttons">
            <button className="action-btn primary" disabled={!selectedPattern || !selectedGarment}>
              💾 保存设计
            </button>
            <button className="action-btn" disabled={!selectedPattern || !selectedGarment}>
              📱 AR预览
            </button>
            <button className="action-btn" disabled={!selectedPattern || !selectedGarment}>
              📤 提交共创
            </button>
            <button className="action-btn" disabled={!selectedPattern || !selectedGarment}>
              🎨 重置设计
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoDesign

