// 触摸工具函数
export const preventScroll = (e) => {
  // 防止默认滚动行为（如果需要）
  if (e.touches.length > 1) {
    e.preventDefault();
  }
};

// 添加触摸反馈
export const addTouchFeedback = (element) => {
  if (!element) return;

  const handleTouchStart = (e) => {
    element.style.transition = 'transform 0.1s, opacity 0.1s';
    element.style.transform = 'scale(0.98)';
    element.style.opacity = '0.8';
  };

  const handleTouchEnd = (e) => {
    element.style.transition = 'transform 0.2s, opacity 0.2s';
    element.style.transform = 'scale(1)';
    element.style.opacity = '1';
  };

  element.addEventListener('touchstart', handleTouchStart, { passive: true });
  element.addEventListener('touchend', handleTouchEnd, { passive: true });
  element.addEventListener('touchcancel', handleTouchEnd, { passive: true });

  return () => {
    element.removeEventListener('touchstart', handleTouchStart);
    element.removeEventListener('touchend', handleTouchEnd);
    element.removeEventListener('touchcancel', handleTouchEnd);
  };
};

// 检测滑动方向
export const getSwipeDirection = (touchStart, touchEnd) => {
  const deltaX = touchEnd.clientX - touchStart.clientX;
  const deltaY = touchEnd.clientY - touchStart.clientY;
  const absX = Math.abs(deltaX);
  const absY = Math.abs(deltaY);

  if (absX > absY && absX > 50) {
    return deltaX > 0 ? 'right' : 'left';
  }
  if (absY > absX && absY > 50) {
    return deltaY > 0 ? 'down' : 'up';
  }
  return null;
};

