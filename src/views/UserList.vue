<template>
  <div class="user-list-page">
    <div class="card">
      <h2>用户列表</h2>
      
      <!-- 搜索和添加按钮 -->
      <div class="search-box">
        <input 
          v-model="searchQuery" 
          type="text" 
          class="form-control" 
          placeholder="搜索用户名或邮箱..."
        />
        <router-link to="/add" class="btn btn-primary">添加用户</router-link>
      </div>
      
      <!-- 消息提示 -->
      <div v-if="message" :class="['message', messageType]">
        {{ message }}
      </div>
      
      <!-- 用户列表表格 -->
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>用户名</th>
            <th>邮箱</th>
            <th>电话</th>
            <th>角色</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in filteredUsers" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.role }}</td>
            <td>
              <span :class="['status-badge', user.status]">
                {{ user.status === 'active' ? '活跃' : '禁用' }}
              </span>
            </td>
            <td>
              <div class="btn-group">
                <router-link :to="`/edit/${user.id}`" class="btn">编辑</router-link>
                <button class="btn btn-danger" @click="deleteUser(user.id)">
                  删除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      
      <!-- 空状态 -->
      <div v-if="filteredUsers.length === 0" class="loading">
        {{ searchQuery ? '没有找到匹配的用户' : '暂无用户数据' }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'

const router = useRouter()
const userStore = useUserStore()

const searchQuery = ref('')
const message = ref('')
const messageType = ref('')

// 过滤用户列表
const filteredUsers = computed(() => {
  if (!searchQuery.value) {
    return userStore.users
  }
  
  const query = searchQuery.value.toLowerCase()
  return userStore.users.filter(user => 
    user.name.toLowerCase().includes(query) ||
    user.email.toLowerCase().includes(query) ||
    user.phone.includes(query)
  )
})

// 删除用户
const deleteUser = (id) => {
  if (confirm('确定要删除这个用户吗？')) {
    userStore.deleteUser(id)
    message.value = '用户删除成功'
    messageType.value = 'message-success'
    
    // 3秒后清除消息
    setTimeout(() => {
      message.value = ''
    }, 3000)
  }
}

// 组件挂载时加载用户数据
onMounted(() => {
  if (userStore.users.length === 0) {
    userStore.fetchUsers()
  }
})
</script>

<style scoped>
.user-list-page {
  max-width: 1200px;
  margin: 0 auto;
}

.status-badge {
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.status-badge.active {
  background-color: #f6ffed;
  color: #52c41a;
  border: 1px solid #b7eb8f;
}

.status-badge.inactive {
  background-color: #fff2f0;
  color: #ff4d4f;
  border: 1px solid #ffccc7;
}

.btn-danger {
  background-color: #ff4d4f;
  border-color: #ff4d4f;
  color: white;
}

.btn-danger:hover {
  background-color: #ff7875;
  border-color: #ff7875;
  color: white;
}
</style>