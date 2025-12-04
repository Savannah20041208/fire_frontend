import React, { useState } from 'react'
import design1 from '../assets/design1.jpg'
import design2 from '../assets/design2.jpg'
import design3 from '../assets/design3.jpg'
import design4 from '../assets/design4.jpg'
import design5 from '../assets/design5.jpg'
import design6 from '../assets/design6.jpg'
import './Community.css'

function Community() {
  const [activeTab, setActiveTab] = useState('explore')

  // 精选作品
  const featuredWorks = [
    {
      id: 1,
      title: '传统火焰纹现代演绎',
      author: '李设计师',
      avatar: '👨‍🎨',
      likes: 256,
      comments: 42,
      views: 1280,
      image: design1,
      tags: ['传统', '现代', '热门']
    },
    {
      id: 2,
      title: '火焰纹数字服饰AR体验',
      author: '王设计师',
      avatar: '👩‍🎨',
      likes: 189,
      comments: 35,
      views: 980,
      image: design2,
      tags: ['AR', '数字', '创新']
    },
    {
      id: 3,
      title: '几何化火焰纹设计',
      author: '张设计师',
      avatar: '👨‍💼',
      likes: 312,
      comments: 58,
      views: 1560,
      image: design3,
      tags: ['几何', '简约', '热门']
    }
  ]

  // 最新作品
  const latestWorks = [
    {
      id: 1,
      title: '火焰纹T恤设计',
      author: '用户A',
      avatar: '👤',
      likes: 45,
      comments: 8,
      date: '2小时前',
      image: design1
    },
    {
      id: 2,
      title: '现代火焰纹连衣裙',
      author: '用户B',
      avatar: '👤',
      likes: 67,
      comments: 12,
      date: '5小时前',
      image: design2
    },
    {
      id: 3,
      title: '抽象火焰纹配饰',
      author: '用户C',
      avatar: '👤',
      likes: 34,
      comments: 6,
      date: '1天前',
      image: design3
    },
    {
      id: 4,
      title: '传统火焰纹外套',
      author: '用户D',
      avatar: '👤',
      likes: 89,
      comments: 15,
      date: '1天前',
      image: design4
    },
    {
      id: 5,
      title: '火焰纹定制款',
      author: '用户E',
      avatar: '👤',
      likes: 123,
      comments: 23,
      date: '2天前',
      image: design5
    },
    {
      id: 6,
      title: '复合火焰纹设计',
      author: '用户F',
      avatar: '👤',
      likes: 56,
      comments: 9,
      date: '2天前',
      image: design6
    }
  ]

  // 热门话题
  const hotTopics = [
    { id: 1, title: '如何设计现代火焰纹？', replies: 128, views: 2560 },
    { id: 2, title: 'AR试穿体验分享', replies: 89, views: 1890 },
    { id: 3, title: '传统火焰纹的文化意义', replies: 156, views: 3200 },
    { id: 4, title: '数字服饰制作技巧', replies: 67, views: 1450 }
  ]

  return (
    <div className="community">
      <div className="page-header">
        <h1>社区互动</h1>
        <p>分享作品，交流设计，共同创造彝族火焰纹数字服饰文化</p>
      </div>

      {/* 标签页 */}
      <div className="community-tabs">
        <button
          className={`community-tab ${activeTab === 'explore' ? 'active' : ''}`}
          onClick={() => setActiveTab('explore')}
        >
          🔍 发现
        </button>
        <button
          className={`community-tab ${activeTab === 'featured' ? 'active' : ''}`}
          onClick={() => setActiveTab('featured')}
        >
          ⭐ 精选
        </button>
        <button
          className={`community-tab ${activeTab === 'topics' ? 'active' : ''}`}
          onClick={() => setActiveTab('topics')}
        >
          💬 话题
        </button>
        <button
          className={`community-tab ${activeTab === 'designers' ? 'active' : ''}`}
          onClick={() => setActiveTab('designers')}
        >
          👨‍🎨 设计师
        </button>
      </div>

      <div className="community-content">
        {activeTab === 'explore' && (
          <div className="explore-section">
            {/* 筛选栏 */}
            <div className="filter-bar">
              <div className="filter-tags">
                <span className="filter-label">筛选：</span>
                <button className="filter-tag active">全部</button>
                <button className="filter-tag">传统</button>
                <button className="filter-tag">现代</button>
                <button className="filter-tag">AR</button>
                <button className="filter-tag">热门</button>
              </div>
              <button className="upload-btn">+ 发布作品</button>
            </div>

            {/* 作品网格 */}
            <div className="works-grid">
              {latestWorks.map(work => (
                <div key={work.id} className="work-card">
                  <div className="work-image">
                    <img src={work.image} alt={work.title} className="work-img" />
                    <div className="work-overlay">
                      <button className="view-btn">👁️ 查看</button>
                    </div>
                  </div>
                  <div className="work-info">
                    <div className="work-author">
                      <span className="author-avatar">{work.avatar}</span>
                      <span className="author-name">{work.author}</span>
                    </div>
                    <h4 className="work-title">{work.title}</h4>
                    <div className="work-stats">
                      <span className="stat-item">❤️ {work.likes}</span>
                      <span className="stat-item">💬 {work.comments}</span>
                      <span className="stat-item">🕒 {work.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'featured' && (
          <div className="featured-section">
            <h2 className="section-title">精选作品</h2>
            <div className="featured-works">
              {featuredWorks.map(work => (
                <div key={work.id} className="featured-card">
                  <div className="featured-image">
                    <img src={work.image} alt={work.title} className="featured-img" />
                    <div className="featured-badge">⭐ 精选</div>
                  </div>
                  <div className="featured-content">
                    <div className="featured-header">
                      <div className="featured-author">
                        <span className="author-avatar-large">{work.avatar}</span>
                        <div>
                          <div className="author-name-large">{work.author}</div>
                          <div className="author-title">认证设计师</div>
                        </div>
                      </div>
                      <button className="follow-btn">+ 关注</button>
                    </div>
                    <h3 className="featured-title">{work.title}</h3>
                    <div className="featured-tags">
                      {work.tags.map((tag, idx) => (
                        <span key={idx} className="tag">{tag}</span>
                      ))}
                    </div>
                    <div className="featured-stats">
                      <button className="stat-btn">❤️ {work.likes}</button>
                      <button className="stat-btn">💬 {work.comments}</button>
                      <button className="stat-btn">👁️ {work.views}</button>
                      <button className="stat-btn">📤 分享</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'topics' && (
          <div className="topics-section">
            <div className="topics-header">
              <h2 className="section-title">热门话题</h2>
              <button className="new-topic-btn">+ 发起话题</button>
            </div>
            <div className="topics-list">
              {hotTopics.map(topic => (
                <div key={topic.id} className="topic-card">
                  <div className="topic-icon">🔥</div>
                  <div className="topic-content">
                    <h3>{topic.title}</h3>
                    <div className="topic-stats">
                      <span>💬 {topic.replies} 回复</span>
                      <span>👁️ {topic.views} 浏览</span>
                    </div>
                  </div>
                  <button className="topic-btn">参与讨论 →</button>
                </div>
              ))}
            </div>

            {/* 最新讨论 */}
            <div className="discussions-section">
              <h2 className="section-title">最新讨论</h2>
              <div className="discussions-list">
                {[1, 2, 3, 4].map(id => (
                  <div key={id} className="discussion-item">
                    <div className="discussion-avatar">👤</div>
                    <div className="discussion-content">
                      <div className="discussion-header">
                        <span className="discussion-author">用户{id}</span>
                        <span className="discussion-time">2小时前</span>
                      </div>
                      <p className="discussion-text">
                        这个火焰纹设计真的很棒！请问是怎么想到将传统元素与现代设计结合的？
                      </p>
                      <div className="discussion-actions">
                        <button className="discussion-btn">👍 赞同</button>
                        <button className="discussion-btn">💬 回复</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'designers' && (
          <div className="designers-section">
            <h2 className="section-title">认证设计师</h2>
            <div className="designers-grid">
              {[
                { name: '李设计师', title: '传统纹样专家', works: 45, followers: 1280, avatar: '👨‍🎨' },
                { name: '王设计师', title: 'AR技术先锋', works: 32, followers: 980, avatar: '👩‍🎨' },
                { name: '张设计师', title: '现代设计大师', works: 67, followers: 2560, avatar: '👨‍💼' },
                { name: '赵设计师', title: '数字艺术创作', works: 28, followers: 890, avatar: '👩‍💻' }
              ].map((designer, idx) => (
                <div key={idx} className="designer-card">
                  <div className="designer-avatar-large">{designer.avatar}</div>
                  <div className="designer-badge">✓ 认证</div>
                  <h3>{designer.name}</h3>
                  <p className="designer-title">{designer.title}</p>
                  <div className="designer-stats">
                    <div className="designer-stat">
                      <span className="stat-value">{designer.works}</span>
                      <span className="stat-label">作品</span>
                    </div>
                    <div className="designer-stat">
                      <span className="stat-value">{designer.followers}</span>
                      <span className="stat-label">粉丝</span>
                    </div>
                  </div>
                  <button className="follow-designer-btn">+ 关注</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Community

