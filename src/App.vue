<template>
  <div class="app-container">
    <!-- 导航栏 -->
    <header class="app-header">
      <div class="logo">用户管理系统</div>
      <div class="header-actions">
        <button class="btn btn-primary" @click="toggleSidebar">
          {{ sidebarOpen ? '收起侧边栏' : '展开侧边栏' }}
        </button>
      </div>
    </header>
    
    <div class="app-body">
      <!-- 侧边栏 -->
      <aside class="app-sidebar" :class="{ 'sidebar-closed': !sidebarOpen }">
        <nav class="sidebar-nav">
          <router-link to="/" class="nav-item">用户列表</router-link>
          <router-link to="/add" class="nav-item">添加用户</router-link>
          <router-link to="/about" class="nav-item">关于系统</router-link>
        </nav>
      </aside>
      
      <!-- 主内容区 -->
      <main class="app-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const sidebarOpen = ref(true)

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}
</script>

<style>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  background-color: #f5f5f5;
}

/* 应用容器 */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* 导航栏 */
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #1890ff;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.logo {
  font-size: 18px;
  font-weight: bold;
}

.header-actions {
  display: flex;
  gap: 10px;
}

/* 应用主体 */
.app-body {
  display: flex;
  flex: 1;
}

/* 侧边栏 */
.app-sidebar {
  width: 200px;
  background-color: white;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease;
}

.app-sidebar.sidebar-closed {
  width: 0;
  overflow: hidden;
}

.sidebar-nav {
  padding: 20px 0;
}

.nav-item {
  display: block;
  padding: 10px 20px;
  color: #333;
  text-decoration: none;
  transition: all 0.3s;
}

.nav-item:hover {
  background-color: #f0f0f0;
  color: #1890ff;
}

.nav-item.router-link-active {
  background-color: #e6f7ff;
  color: #1890ff;
  font-weight: bold;
}

/* 主内容区 */
.app-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

/* 按钮样式 */
.btn {
  padding: 6px 16px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background-color: white;
  color: #333;
  cursor: pointer;
  transition: all 0.3s;
}

.btn:hover {
  border-color: #1890ff;
  color: #1890ff;
}

.btn-primary {
  background-color: #1890ff;
  border-color: #1890ff;
  color: white;
}

.btn-primary:hover {
  background-color: #40a9ff;
  border-color: #40a9ff;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .app-sidebar {
    position: fixed;
    left: 0;
    top: 60px;
    height: calc(100vh - 60px);
    z-index: 100;
  }
  
  .app-sidebar.sidebar-closed {
    left: -200px;
    width: 200px;
  }
  
  .app-content {
    padding: 10px;
  }
}
</style>