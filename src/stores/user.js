import { defineStore } from 'pinia'
import axios from 'axios'

// 模拟用户数据
const mockUsers = [
  {
    id: 1,
    name: '张三',
    email: 'zhangsan@example.com',
    phone: '13800138001',
    role: 'admin',
    status: 'active'
  },
  {
    id: 2,
    name: '李四',
    email: 'lisi@example.com',
    phone: '13900139001',
    role: 'user',
    status: 'active'
  },
  {
    id: 3,
    name: '王五',
    email: 'wangwu@example.com',
    phone: '13700137001',
    role: 'user',
    status: 'inactive'
  },
  {
    id: 4,
    name: '赵六',
    email: 'zhaoliu@example.com',
    phone: '13600136001',
    role: 'guest',
    status: 'active'
  }
]

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
    loading: false,
    error: null
  }),

  getters: {
    activeUsers: (state) => {
      return state.users.filter(user => user.status === 'active')
    },
    inactiveUsers: (state) => {
      return state.users.filter(user => user.status === 'inactive')
    }
  },

  actions: {
    // 获取用户列表
    async fetchUsers() {
      this.loading = true
      this.error = null
      
      try {
        // 模拟API请求延迟
        await new Promise(resolve => setTimeout(resolve, 500))
        
        // 使用模拟数据
        this.users = mockUsers
        
        // 实际API请求示例
        // const response = await axios.get('/api/users')
        // this.users = response.data
      } catch (error) {
        this.error = '获取用户列表失败'
        console.error('Error fetching users:', error)
        // 使用模拟数据作为 fallback
        this.users = mockUsers
      } finally {
        this.loading = false
      }
    },

    // 根据ID获取用户
    getUserById(id) {
      return this.users.find(user => user.id === id)
    },

    // 添加用户
    async addUser(userData) {
      try {
        // 模拟API请求延迟
        await new Promise(resolve => setTimeout(resolve, 300))
        
        // 生成新用户ID
        const newId = Math.max(...this.users.map(u => u.id), 0) + 1
        const newUser = {
          id: newId,
          ...userData
        }
        
        // 添加到本地状态
        this.users.push(newUser)
        
        // 实际API请求示例
        // const response = await axios.post('/api/users', userData)
        // this.users.push(response.data)
        
        return newUser
      } catch (error) {
        this.error = '添加用户失败'
        console.error('Error adding user:', error)
        throw error
      }
    },

    // 更新用户
    async updateUser(id, userData) {
      try {
        // 模拟API请求延迟
        await new Promise(resolve => setTimeout(resolve, 300))
        
        // 更新本地状态
        const index = this.users.findIndex(user => user.id === id)
        if (index !== -1) {
          this.users[index] = {
            ...this.users[index],
            ...userData
          }
        }
        
        // 实际API请求示例
        // await axios.put(`/api/users/${id}`, userData)
        
        return this.users[index]
      } catch (error) {
        this.error = '更新用户失败'
        console.error('Error updating user:', error)
        throw error
      }
    },

    // 删除用户
    async deleteUser(id) {
      try {
        // 模拟API请求延迟
        await new Promise(resolve => setTimeout(resolve, 300))
        
        // 从本地状态删除
        this.users = this.users.filter(user => user.id !== id)
        
        // 实际API请求示例
        // await axios.delete(`/api/users/${id}`)
        
        return true
      } catch (error) {
        this.error = '删除用户失败'
        console.error('Error deleting user:', error)
        throw error
      }
    },

    // 搜索用户
    searchUsers(query) {
      if (!query) return this.users
      
      const lowerQuery = query.toLowerCase()
      return this.users.filter(user => 
        user.name.toLowerCase().includes(lowerQuery) ||
        user.email.toLowerCase().includes(lowerQuery) ||
        user.phone.includes(lowerQuery)
      )
    }
  }
})