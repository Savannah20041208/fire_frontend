import React, { useState } from 'react'
import fireClassic from '../assets/fire-classic.jpg'
import fireGeometric from '../assets/fire-geometric.jpg'
import fireComposite from '../assets/fire-composite.jpg'
import fireAbstract from '../assets/fire-abstract.jpg'
import fireSimple from '../assets/fire-simple.jpg'
import fireModern from '../assets/fire-modern.jpg'
import './Culture.css'

function Culture() {
  const [activeSection, setActiveSection] = useState('intro')

  const cultureSections = [
    {
      id: 'intro',
      title: '彝族文化',
      icon: '🏛️',
      content: {
        title: '彝族文化简介',
        paragraphs: [
          '彝族是中国56个民族之一，主要分布在云南、四川、贵州、广西等地区，拥有悠久的历史和丰富的文化传统。',
          '彝族文化以其独特的语言文字、服饰艺术、音乐舞蹈、节庆习俗等方面而闻名，是中华文化宝库中的重要组成部分。',
          '彝族人民在长期的历史发展过程中，创造了灿烂的文化遗产，其中服饰文化尤为突出，体现了民族的审美观念和生活方式。'
        ]
      }
    },
    {
      id: 'flame',
      title: '火焰纹',
      icon: '🔥',
      content: {
        title: '火焰纹的历史与意义',
        paragraphs: [
          '火焰纹是彝族传统服饰中最具代表性的纹样之一，具有深厚的文化内涵和象征意义。',
          '火焰纹象征着光明、希望和生命力，在彝族文化中，火焰被视为神圣的元素，代表着驱邪避灾、带来好运。',
          '传统的火焰纹样通常以流畅的曲线和动感的形态呈现，体现了彝族人民对自然的敬畏和对美好生活的向往。',
          '在现代设计中，火焰纹元素被广泛运用，既保留了传统文化的精髓，又融入了现代审美理念，形成了独特的艺术风格。'
        ]
      }
    },
    {
      id: 'patterns',
      title: '传统纹样',
      icon: '🎨',
      content: {
        title: '彝族传统纹样解读',
        paragraphs: [
          '彝族传统纹样种类丰富，除了火焰纹，还包括几何纹、植物纹、动物纹等多种类型。',
          '几何纹：以点、线、面等几何元素构成，具有强烈的装饰性和韵律感。',
          '植物纹：以花卉、枝叶等自然植物为题材，体现了彝族人民对大自然的热爱。',
          '动物纹：以龙、凤、鸟、兽等动物形象为题材，具有丰富的象征意义。',
          '这些传统纹样不仅是装饰元素，更是彝族文化的重要载体，承载着民族的历史记忆和文化传承。'
        ]
      }
    },
    {
      id: 'digital',
      title: '数字化传承',
      icon: '💻',
      content: {
        title: '数字技术赋能文化传承',
        paragraphs: [
          '随着数字技术的发展，彝族传统纹样正在通过新的方式得到传承和创新。',
          'AR（增强现实）技术为传统服饰文化提供了全新的展示和体验方式，用户可以通过AR技术实时预览传统纹样在服饰上的效果。',
          '数字化平台为设计师和用户提供了共创空间，让传统纹样在现代设计中焕发新的生命力。',
          '通过数字技术，彝族火焰纹等传统元素得以更好地保存、传播和创新，为传统文化的传承和发展开辟了新路径。'
        ]
      }
    }
  ]

  const patternGallery = [
    { id: 1, name: '经典火焰纹', category: '传统', description: '传统经典的火焰纹样，流畅的曲线体现动感', image: fireClassic },
    { id: 2, name: '几何火焰纹', category: '几何', description: '几何化处理的火焰纹，更具现代感', image: fireGeometric },
    { id: 3, name: '复合火焰纹', category: '复合', description: '多种元素组合的火焰纹样', image: fireComposite },
    { id: 4, name: '抽象火焰纹', category: '抽象', description: '抽象艺术风格的火焰纹', image: fireAbstract },
    { id: 5, name: '简约火焰纹', category: '简约', description: '简化设计的火焰纹样', image: fireSimple },
    { id: 6, name: '现代火焰纹', category: '现代', description: '现代演绎的火焰纹样', image: fireModern }
  ]

  return (
    <div className="culture">
      <div className="page-header">
        <h1>文化知识</h1>
        <p>了解彝族文化，探索火焰纹的深厚内涵</p>
      </div>

      <div className="culture-layout">
        {/* 侧边导航 */}
        <div className="culture-sidebar">
          <div className="sidebar-nav">
            {cultureSections.map(section => (
              <button
                key={section.id}
                className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => setActiveSection(section.id)}
              >
                <span className="nav-icon">{section.icon}</span>
                <span className="nav-title">{section.title}</span>
              </button>
            ))}
          </div>

          {/* 纹样速览 */}
          <div className="pattern-quickview">
            <h3>纹样速览</h3>
            <div className="quickview-grid">
              {patternGallery.slice(0, 4).map(pattern => (
                <div key={pattern.id} className="quickview-item">
                  <div className="quickview-pattern">
                    <img src={pattern.image} alt={pattern.name} className="quickview-img" />
                  </div>
                  <span className="quickview-name">{pattern.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 主内容区 */}
        <div className="culture-main">
          {/* 当前选中的内容 */}
          {cultureSections.map(section => (
            activeSection === section.id && (
              <div key={section.id} className="culture-content">
                <div className="content-header">
                  <div className="header-icon">{section.icon}</div>
                  <h2>{section.content.title}</h2>
                </div>
                <div className="content-body">
                  {section.content.paragraphs.map((paragraph, idx) => (
                    <p key={idx} className="content-paragraph">{paragraph}</p>
                  ))}
                </div>
              </div>
            )
          ))}

          {/* 纹样图库 */}
          <div className="pattern-gallery-section">
            <h2 className="gallery-title">传统纹样图库</h2>
            <div className="pattern-gallery">
              {patternGallery.map(pattern => (
                <div key={pattern.id} className="pattern-item">
                  <div className="pattern-display">
                    <img src={pattern.image} alt={pattern.name} className="pattern-img" />
                  </div>
                  <div className="pattern-info">
                    <span className="pattern-cat">{pattern.category}</span>
                    <h4>{pattern.name}</h4>
                    <p>{pattern.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 文化时间线 */}
          <div className="timeline-section">
            <h2 className="timeline-title">文化发展时间线</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>古代时期</h3>
                  <p>彝族先民创造了独特的服饰文化，火焰纹等传统纹样开始形成</p>
                  <span className="timeline-date">公元前</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>唐宋时期</h3>
                  <p>彝族服饰文化发展成熟，纹样体系更加完善</p>
                  <span className="timeline-date">618-1279</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>明清时期</h3>
                  <p>传统纹样达到艺术高峰，工艺技法精湛</p>
                  <span className="timeline-date">1368-1912</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>现代时期</h3>
                  <p>传统纹样与现代设计结合，文化传承与创新并重</p>
                  <span className="timeline-date">20世纪至今</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>数字时代</h3>
                  <p>AR技术赋能，数字化传承开启新篇章</p>
                  <span className="timeline-date">21世纪</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Culture

