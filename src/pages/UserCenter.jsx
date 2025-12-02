import React, { useState } from 'react'
import './UserCenter.css'

function UserCenter() {
  const [activeTab, setActiveTab] = useState('profile')

  // 模拟用户数据
  const userInfo = {
    name: '张小明',
    avatar: '👤',
    email: 'zhangxiaoming@example.com',
    phone: '138****8888',
    level: 'VIP会员',
    points: 1280,
    designs: 12,
    orders: 8,
    favorites: 23
  }

  // 我的设计
  const myDesigns = [
    { id: 1, name: '火焰纹T恤设计', date: '2024-01-15', status: '已完成', likes: 45 },
    { id: 2, name: '现代火焰纹连衣裙', date: '2024-01-12', status: '设计中', likes: 32 },
    { id: 3, name: '传统火焰纹外套', date: '2024-01-10', status: '已完成', likes: 67 },
    { id: 4, name: '抽象火焰纹配饰', date: '2024-01-08', status: '已完成', likes: 28 }
  ]

  // 我的订单
  const myOrders = [
    { id: 'ORD001', name: '火焰纹T恤', date: '2024-01-15', status: '已完成', price: '¥299' },
    { id: 'ORD002', name: '数字服饰AR版', date: '2024-01-12', status: '制作中', price: '¥199' },
    { id: 'ORD003', name: '火焰纹连衣裙', date: '2024-01-10', status: '待发货', price: '¥599' },
    { id: 'ORD004', name: '定制火焰纹外套', date: '2024-01-08', status: '已完成', price: '¥899' }
  ]

  // 收藏夹
  const favorites = [
    { id: 1, name: '经典火焰纹传统服饰', designer: '李设计师', likes: 128 },
    { id: 2, name: '现代火焰纹T恤', designer: '王设计师', likes: 89 },
    { id: 3, name: '火焰纹配饰', designer: '赵设计师', likes: 156 }
  ]

  return (
    <div className="user-center">
      <div className="page-header">
        <h1>用户中心</h1>
        <p>管理您的个人信息、设计和订单</p>
      </div>

      <div className="user-layout">
        {/* 用户信息卡片 */}
        <div className="user-info-card">
          <div className="user-avatar">
            <div className="avatar-circle">{userInfo.avatar}</div>
            <button className="edit-avatar-btn">更换头像</button>
          </div>
          <div className="user-details">
            <h2>{userInfo.name}</h2>
            <p className="user-level">{userInfo.level}</p>
            <div className="user-stats">
              <div className="stat-item">
                <span className="stat-value">{userInfo.designs}</span>
                <span className="stat-label">我的设计</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{userInfo.orders}</span>
                <span className="stat-label">我的订单</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{userInfo.favorites}</span>
                <span className="stat-label">收藏</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{userInfo.points}</span>
                <span className="stat-label">积分</span>
              </div>
            </div>
          </div>
        </div>

        {/* 标签页导航 */}
        <div className="tabs-container">
          <div className="tabs">
            <button
              className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              个人资料
            </button>
            <button
              className={`tab-btn ${activeTab === 'designs' ? 'active' : ''}`}
              onClick={() => setActiveTab('designs')}
            >
              我的设计
            </button>
            <button
              className={`tab-btn ${activeTab === 'orders' ? 'active' : ''}`}
              onClick={() => setActiveTab('orders')}
            >
              我的订单
            </button>
            <button
              className={`tab-btn ${activeTab === 'favorites' ? 'active' : ''}`}
              onClick={() => setActiveTab('favorites')}
            >
              收藏夹
            </button>
          </div>
        </div>

        {/* 内容区域 */}
        <div className="content-area">
          {activeTab === 'profile' && (
            <div className="tab-content">
              <div className="form-section">
                <h3>基本信息</h3>
                <div className="form-group">
                  <label>昵称</label>
                  <input type="text" defaultValue={userInfo.name} />
                </div>
                <div className="form-group">
                  <label>邮箱</label>
                  <input type="email" defaultValue={userInfo.email} />
                </div>
                <div className="form-group">
                  <label>手机号</label>
                  <input type="tel" defaultValue={userInfo.phone} />
                </div>
                <div className="form-group">
                  <label>个人简介</label>
                  <textarea rows="4" placeholder="介绍一下自己..."></textarea>
                </div>
                <button className="save-btn">保存修改</button>
              </div>

              <div className="form-section">
                <h3>账户安全</h3>
                <div className="security-item">
                  <div className="security-info">
                    <h4>登录密码</h4>
                    <p>已设置</p>
                  </div>
                  <button className="security-btn">修改密码</button>
                </div>
                <div className="security-item">
                  <div className="security-info">
                    <h4>手机绑定</h4>
                    <p>{userInfo.phone}</p>
                  </div>
                  <button className="security-btn">更换手机</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'designs' && (
            <div className="tab-content">
              <div className="designs-header">
                <h3>我的设计 ({myDesigns.length})</h3>
                <button className="new-design-btn">+ 新建设计</button>
              </div>
              <div className="designs-list">
                {myDesigns.map(design => (
                  <div key={design.id} className="design-card">
                    <div className="design-image">
                      <div className="thumbnail-placeholder">
                        <div className="flame-preview"></div>
                      </div>
                    </div>
                    <div className="design-card-info">
                      <h4>{design.name}</h4>
                      <div className="design-meta-info">
                        <span className="design-date">{design.date}</span>
                        <span className={`design-status ${design.status === '已完成' ? 'completed' : ''}`}>
                          {design.status}
                        </span>
                      </div>
                      <div className="design-actions">
                        <span className="likes-count">❤️ {design.likes}</span>
                        <button className="action-btn">查看</button>
                        <button className="action-btn">编辑</button>
                        <button className="action-btn danger">删除</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="tab-content">
              <div className="orders-header">
                <h3>我的订单 ({myOrders.length})</h3>
              </div>
              <div className="orders-list">
                {myOrders.map(order => (
                  <div key={order.id} className="order-card">
                    <div className="order-header">
                      <div className="order-info">
                        <span className="order-id">订单号：{order.id}</span>
                        <span className="order-date">{order.date}</span>
                      </div>
                      <span className={`order-status ${order.status === '已完成' ? 'completed' : ''}`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="order-body">
                      <div className="order-product">
                        <div className="product-thumbnail">
                          <div className="thumbnail-placeholder"></div>
                        </div>
                        <div className="product-info">
                          <h4>{order.name}</h4>
                          <p className="product-price">{order.price}</p>
                        </div>
                      </div>
                      <div className="order-actions">
                        <button className="order-btn">查看详情</button>
                        {order.status === '已完成' && (
                          <>
                            <button className="order-btn">评价</button>
                            <button className="order-btn">再次购买</button>
                          </>
                        )}
                        {order.status === '待发货' && (
                          <button className="order-btn">取消订单</button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'favorites' && (
            <div className="tab-content">
              <div className="favorites-header">
                <h3>我的收藏 ({favorites.length})</h3>
              </div>
              <div className="favorites-list">
                {favorites.map(item => (
                  <div key={item.id} className="favorite-card">
                    <div className="favorite-image">
                      <div className="thumbnail-placeholder">
                        <div className="flame-preview"></div>
                      </div>
                    </div>
                    <div className="favorite-info">
                      <h4>{item.name}</h4>
                      <p className="favorite-designer">设计师：{item.designer}</p>
                      <div className="favorite-meta">
                        <span className="favorite-likes">❤️ {item.likes}</span>
                        <div className="favorite-actions">
                          <button className="favorite-btn">查看详情</button>
                          <button className="favorite-btn danger">取消收藏</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default UserCenter

