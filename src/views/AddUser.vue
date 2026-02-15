<template>
  <div class="add-user-page">
    <div class="card">
      <h2>{{ isEdit ? '编辑用户' : '添加用户' }}</h2>
      
      <!-- 消息提示 -->
      <div v-if="message" :class="['message', messageType]">
        {{ message }}
      </div>
      
      <!-- 用户表单 -->
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label class="form-label">用户名</label>
          <input 
            v-model="form.name" 
            type="text" 
            class="form-control" 
            placeholder="请输入用户名"
            required
          />
        </div>
        
        <div class="form-group">
          <label class="form-label">邮箱</label>
          <input 
            v-model="form.email" 
            type="email" 
            class="form-control" 
            placeholder="请输入邮箱地址"
            required
          />
        </div>
        
        <div class="form-group">
          <label class="form-label">电话</label>
          <input 
            v-model="form.phone" 
            type="tel" 
            class="form-control" 
            placeholder="请输入电话号码"
          />
        </div>
        
        <div class="form-group">
          <label class="form-label">角色</label>
          <select v-model="form.role" class="form-control">
            <option value="admin">管理员</option>
            <option value="user">普通用户</option>
            <option value="guest">访客</option>
          </select>
        </div>
        
        <div class="form-group">
          <label class="form-label">状态</label>
          <select v-model="form.status" class="form-control">
            <option value="active">活跃</option>
            <option value="inactive">禁用</option>
          </select>
        </div>
        
        <div class="btn-group">
          <button type="submit" class="btn btn-primary">
            {{ isEdit ? '更新用户' : '添加用户' }}
          </button>
          <router-link to="/" class="btn">取消</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '../stores/user'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const isEdit = computed(() => {
  return !!route.params.id
})

const form = ref({
  name: '',
  email: '',
  phone: '',
  role: 'user',
  status: 'active'
})

const message = ref('')
const messageType = ref('')

// 加载用户数据（编辑模式）
onMounted(() => {
  if (isEdit.value) {
    const userId = parseInt(route.params.id)
    const user = userStore.getUserById(userId)
    if (user) {
      form.value = { ...user }
    } else {
      message.value = '用户不存在'
      messageType.value = 'message-error'
    }
  }
})

// 提交表单
const submitForm = () => {
  try {
    if (isEdit.value) {
      // 更新用户
      userStore.updateUser(parseInt(route.params.id), form.value)
      message.value = '用户更新成功'
      messageType.value = 'message-success'
      
      // 3秒后跳转到用户列表
      setTimeout(() => {
        router.push('/')
      }, 1500)
    } else {
      // 添加用户
      userStore.addUser(form.value)
      message.value = '用户添加成功'
      messageType.value = 'message-success'
      
      // 重置表单
      form.value = {
        name: '',
        email: '',
        phone: '',
        role: 'user',
        status: 'active'
      }
    }
  } catch (error) {
    message.value = error.message || '操作失败'
    messageType.value = 'message-error'
  }
}
</script>

<style scoped>
.add-user-page {
  max-width: 600px;
  margin: 0 auto;
}

form {
  margin-top: 20px;
}
</style>