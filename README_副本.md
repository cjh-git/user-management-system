# 用户管理系统

基于Vue 3框架的用户管理系统，具备用户列表展示、用户信息添加、编辑、删除以及搜索功能。

## 技术栈

- **前端框架**: Vue 3
- **路由管理**: Vue Router 4
- **状态管理**: Pinia
- **HTTP请求**: Axios
- **构建工具**: Vite
- **代码规范**: ESLint
- **代码格式化**: Prettier

## 项目结构

```
user-management-system/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── main.css         # 全局样式
│   ├── components/          # 组件目录
│   ├── views/               # 页面视图
│   │   ├── UserList.vue     # 用户列表页面
│   │   ├── AddUser.vue      # 添加/编辑用户页面
│   │   └── About.vue        # 关于系统页面
│   ├── router/
│   │   └── index.js         # 路由配置
│   ├── stores/
│   │   └── user.js          # 用户状态管理
│   ├── utils/               # 工具函数
│   ├── api/                 # API请求
│   ├── App.vue              # 根组件
│   └── main.js              # 入口文件
├── .eslintrc.cjs            # ESLint配置
├── .prettierrc              # Prettier配置
├── .gitignore               # Git忽略文件
├── index.html               # HTML模板
├── package.json             # 项目配置
├── vite.config.js           # Vite配置
└── README.md                # 项目说明
```

## 核心功能

1. **用户列表展示**: 展示所有用户信息，支持分页和排序
2. **用户搜索**: 根据用户名或邮箱进行实时搜索
3. **添加用户**: 创建新用户并设置相关信息
4. **编辑用户**: 修改现有用户的详细信息
5. **删除用户**: 移除不需要的用户
6. **响应式设计**: 适配桌面端、平板和移动设备

## 环境要求

- Node.js: v16.0.0 或更高版本
- npm: v8.0.0 或更高版本

## 安装和运行

### 1. 克隆项目

```bash
git clone <repository-url>
cd user-management-system
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

### 4. 构建生产版本

```bash
npm run build
```

### 5. 预览生产构建

```bash
npm run preview
```

## 开发工具配置

### ESLint

项目已配置ESLint代码规范检查，运行以下命令检查代码：

```bash
npx eslint .
```

### Prettier

项目已配置Prettier代码格式化工具，运行以下命令格式化代码：

```bash
npx prettier --write .
```

## 功能使用说明

### 用户列表页面
- **搜索**: 在搜索框中输入用户名或邮箱，系统会实时过滤结果
- **编辑**: 点击用户行的"编辑"按钮，进入编辑页面修改用户信息
- **删除**: 点击用户行的"删除"按钮，确认后删除用户
- **添加**: 点击页面上方的"添加用户"按钮，进入添加页面

### 添加/编辑用户页面
- **表单填写**: 填写用户的基本信息（用户名、邮箱、电话、角色、状态）
- **提交**: 点击"添加用户"或"更新用户"按钮保存信息
- **取消**: 点击"取消"按钮返回用户列表页面

### 关于系统页面
- 查看系统版本、技术栈和功能说明
- 查看运行指南和开发环境配置

## 响应式设计

- **桌面端**: 完整显示导航栏、侧边栏和主内容区
- **平板端**: 侧边栏可折叠，主内容区自适应宽度
- **移动端**: 侧边栏默认隐藏，可通过按钮展开/收起

## 模拟数据

由于是演示项目，系统使用了模拟数据，实际使用时需要替换为真实的API接口。

在 `src/stores/user.js` 文件中，可修改以下代码块替换为真实API：

```javascript
// 实际API请求示例
// const response = await axios.get('/api/users')
// this.users = response.data
```

## 注意事项

1. 本项目使用的是Vue 3的Composition API
2. 所有表单提交都有基本的验证
3. 操作结果会有相应的消息提示
4. 响应式设计确保在不同设备上的良好体验

## 许可证

MIT License

## 联系方式

如有问题或建议，请联系项目维护者。