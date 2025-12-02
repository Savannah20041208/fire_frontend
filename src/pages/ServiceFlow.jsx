import React, { useState } from 'react'
import './ServiceFlow.css'

function ServiceFlow() {
  const [selectedStep, setSelectedStep] = useState(null)

  const flowSteps = [
    {
      id: 1,
      title: '用户注册/登录',
      description: '用户通过平台注册账号，登录进入共创平台',
      icon: '👤',
      details: [
        '支持多种登录方式：手机号、邮箱、社交媒体',
        '完成用户信息填写和偏好设置',
        '获取平台使用权限'
      ]
    },
    {
      id: 2,
      title: '浏览设计库',
      description: '浏览平台提供的彝族火焰纹服饰设计作品',
      icon: '🎨',
      details: [
        '查看传统系列、现代系列、时尚系列等分类',
        '筛选和搜索感兴趣的设计',
        '查看设计详情和设计师信息'
      ]
    },
    {
      id: 3,
      title: '选择/定制设计',
      description: '选择现成设计或参与定制化设计',
      icon: '✂️',
      details: [
        '选择平台提供的设计模板',
        '或参与设计师发起的定制项目',
        '上传个人喜好和需求'
      ]
    },
    {
      id: 4,
      title: 'AR试穿预览',
      description: '使用AR技术实时预览服饰上身效果',
      icon: '📱',
      details: [
        '打开手机摄像头',
        '选择要试穿的服饰',
        '实时查看虚拟试穿效果',
        '调整颜色、尺寸等参数'
      ]
    },
    {
      id: 5,
      title: '确认订单',
      description: '确认设计满意后提交订单',
      icon: '✅',
      details: [
        '确认设计细节和规格',
        '选择制作方式（实体/数字）',
        '填写收货信息（如需要）',
        '提交订单并支付'
      ]
    },
    {
      id: 6,
      title: '制作与交付',
      description: '平台处理订单并完成制作交付',
      icon: '📦',
      details: [
        '设计师/制作团队开始制作',
        '支持数字服饰即时交付',
        '实体服饰按周期制作',
        '物流跟踪和确认收货'
      ]
    },
    {
      id: 7,
      title: '分享与评价',
      description: '分享作品并参与社区互动',
      icon: '💬',
      details: [
        '在平台分享作品照片',
        '参与社区讨论和评价',
        '为设计师和平台提供反馈',
        '获得社区积分和奖励'
      ]
    }
  ]

  return (
    <div className="service-flow">
      <div className="page-header">
        <h1>服务流程图</h1>
        <p>了解从注册到交付的完整服务流程</p>
      </div>

      <div className="flow-container">
        <div className="flow-timeline">
          {flowSteps.map((step, index) => (
            <div
              key={step.id}
              className={`flow-step ${selectedStep === step.id ? 'active' : ''}`}
              onClick={() => setSelectedStep(selectedStep === step.id ? null : step.id)}
            >
              <div className="step-connector">
                {index < flowSteps.length - 1 && <div className="connector-line"></div>}
              </div>
              <div className="step-icon">{step.icon}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {selectedStep === step.id && (
                <div className="step-details">
                  <ul>
                    {step.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flow-summary">
        <div className="summary-card">
          <h3>快速流程概览</h3>
          <div className="summary-steps">
            <div className="summary-step">
              <span className="summary-number">1</span>
              <span>注册登录</span>
            </div>
            <div className="summary-arrow">→</div>
            <div className="summary-step">
              <span className="summary-number">2</span>
              <span>选择设计</span>
            </div>
            <div className="summary-arrow">→</div>
            <div className="summary-step">
              <span className="summary-number">3</span>
              <span>AR试穿</span>
            </div>
            <div className="summary-arrow">→</div>
            <div className="summary-step">
              <span className="summary-number">4</span>
              <span>下单交付</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceFlow

