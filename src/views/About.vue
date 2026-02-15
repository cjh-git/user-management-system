<template>
  <div class="about-page">
    <div class="card">
      <h2>关于系统</h2>
      
      <div class="about-content">
        <h3>用户管理系统</h3>
        <p>版本：1.0.0</p>
        <p>技术栈：Vue 3 + Vue Router + Pinia + Axios</p>
        
        <h4>系统功能</h4>
        <ul>
          <li>用户列表展示</li>
          <li>用户信息添加</li>
          <li>用户信息编辑</li>
          <li>用户删除</li>
          <li>用户搜索</li>
          <li>响应式设计</li>
        </ul>
        
        <h4>开发环境</h4>
        <ul>
          <li>Node.js</li>
          <li>npm/yarn</li>
          <li>Vite</li>
          <li>ESLint</li>
          <li>Prettier</li>
        </ul>
        
        <h4>运行指南</h4>
        <pre class="code-block">
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
        </pre>
      </div>
    </div>
  </div>
</template>

<script setup>
// About组件
</script>

<style scoped>
.about-page {
  max-width: 800px;
  margin: 0 auto;
}

.about-content {
  line-height: 1.6;
}

.about-content h3 {
  color: #1890ff;
  margin-top: 20px;
}

.about-content h4 {
  margin-top: 16px;
  color: #333;
}

.about-content ul {
  margin-left: 20px;
  margin-bottom: 16px;
}

.about-content li {
  margin-bottom: 8px;
}

.code-block {
  background-color: #f5f5f5;
  padding: 16px;
  border-radius: 4px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  overflow-x: auto;
  margin-top: 16px;
}
</style>