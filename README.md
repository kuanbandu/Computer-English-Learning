# Computer English Learning

一个专为程序员设计的计算机英语词汇学习工具，帮助你在日常开发中熟悉常用英语表达。

🌐 **在线访问**: https://kuanbandu.github.io/Computer-English-Learning/
🏷️ **当前版本**: v2.3.0（[Release 记录](https://github.com/kuanbandu/Computer-English-Learning/releases)）

![Version](https://img.shields.io/badge/version-v2.3.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![PWA](https://img.shields.io/badge/PWA-Supported-green.svg)
![CI](https://github.com/kuanbandu/Computer-English-Learning/actions/workflows/lint.yml/badge.svg)
![Words](https://img.shields.io/badge/词汇量-2000+-blueviolet.svg)

## 📱 特点

- **纯前端应用** - 无需后端，打开即用
- **PWA 支持** - 可添加到手机主屏幕，离线使用
- **智能间隔复习（SRS）** - 类似 Anki 的 SM-2 算法，忘记的词自动安排复习
- **三种学习模式** - 卡片翻转 / 听写拼写 / 选择题测验
- **语音朗读** - 集成 Web Speech API，点击即可听发音
- **学习热力图** - GitHub 风格的 365 天学习活动图，坚持打卡一目了然
- **数据备份** - 一键导出/导入全部学习数据，换设备不丢进度
- **深色模式** - 自动记忆主题偏好
- **分类学习** - 42 个分类，2000 个常用词条
- **🧠 意象指引 + 常用场景** - 重点词条用“程序员思维”还原母语语境（生活化意象、不同技术场景、代码/报错语境、同根词族）
- **🔎 报错反查** - 把英文报错粘进浏览页，自动拆词并定位相关术语（支持 `NullPointerException` 这类驼峰标识符）
- **进度追踪** - 自动记录学习进度和连续学习天数
- **收藏功能** - 收藏重点内容，方便复习
- **响应式设计** - 完美适配手机、平板、电脑
- **CI 自动校验** - GitHub Actions 自动检查 JS 语法、数据完整性与 SRS 算法

## 📚 内容涵盖

| 分类 | 词条数 | 说明 |
|------|--------|------|
| Terminal Commands | 50 | 终端常用命令 |
| Git Commands | 50 | Git 版本控制 |
| Error Messages | 50 | 常见错误信息 |
| Programming Terms | 50 | 编程基础术语 |
| Web Development | 50 | Web 开发相关 |
| System Terms | 50 | 操作系统术语 |
| Code Comments | 50 | 代码注释常用语 |
| Daily Dev Phrases | 50 | 日常开发用语 |
| Docker & Kubernetes | 50 | 容器与编排 |
| Database & SQL | 50 | 数据库与 SQL |
| Algorithms & Data Structures | 50 | 算法与数据结构 |
| Networking & Protocols | 50 | 网络与协议 |
| Code Review | 50 | 代码审查用语 |
| AI & Machine Learning | 50 | 人工智能术语 |
| Agile Development | 50 | 敏捷开发 |
| Cloud Computing | 50 | 云计算 |
| CI/CD & DevOps | 50 | 持续集成与运维 |
| Security | 50 | 信息安全 |
| API Design | 50 | API 设计 |
| Microservices & Distributed Systems | 50 | 微服务与分布式 |
| Observability | 50 | 可观测性 |
| Modern Web Development | 50 | 现代 Web 开发 |
| Collaboration & Soft Skills | 50 | 协作与软技能 |
| Technical Writing | 50 | 技术写作 |
| Interview English | 50 | 面试英语 |
| Career Development | 50 | 职业发展 |
| Data Engineering | 50 | 数据工程 |
| Performance Optimization | 50 | 性能优化 |
| Testing & Quality | 50 | 测试与质量 |
| Open Source & Collaboration | 50 | 开源协作 |
| Blockchain & Web3 | 50 | 区块链与 Web3 |
| Game Development | 50 | 游戏开发 |
| Embedded Systems | 50 | 嵌入式系统 |
| Product & UX Design | 50 | 产品与用户体验设计 |
| Data Visualization | 50 | 数据可视化 |
| Browser DevTools & Debugging | 50 | 浏览器调试工具 |
| Mobile Development | 50 | 移动开发 |
| Desktop Development | 50 | 桌面开发 |
| MLOps & Model Lifecycle | 50 | MLOps 机器学习工程 |
| Compilers & Language Theory | 50 | 编译原理 |
| Digital Electronics & FPGA | 50 | 数字电路与 FPGA |
| Math for Developers | 50 | 开发者数学基础 |

**总计：42 个分类，2000 个词条**（每个词条均含音标与实用例句；其中 16 个高频词条已带「意象 + 场景」深度解析，见下方样板）

## 🧠 意象样板：stack

这是「意象 + 场景」的颗粒度样板（已收录在 `data/content.js` 的 `alg009`）。先看这一条，确认方向对不对，再批量生产：

```javascript
{
  "id": "alg009",
  "english": "Stack",
  "chinese": "栈",
  "pronunciation": "/stæk/",
  "example": "Use a stack for LIFO operations",
  "imagery": "一摞盘子：后放上去的盘子压在最上面，取的时候也只能从最上面拿——后进先出（LIFO）。push = 放一个盘子，pop = 拿走最上面那个。",
  "scenarios": [
    { "name": "数据结构栈", "text": "只能在栈顶 push / pop 的线性表，用于括号匹配、表达式求值，以及深度优先搜索（DFS）的显式栈。" },
    { "name": "调用栈", "text": "每次函数调用压入一个栈帧（stack frame），里面保存局部变量、参数和返回地址；函数返回时弹出。递归太深就会 Stack overflow。" },
    { "name": "内存栈区", "text": "线程私有的连续内存，分配与释放只是移动栈指针，速度比堆快但容量有限；超出容量触发 stack overflow。" },
    { "name": "日常义 vs 计算机义", "text": "日常的 stack 只是“一摞、一堆”；计算机里强调“只能从顶端操作”的秩序。" }
  ],
  "codeContext": "stack.push(frame);\nconst top = stack.pop();\n// RangeError: Maximum call stack size exceeded",
  "wordFamily": ["call stack", "stack frame", "stack trace", "stack overflow"],
  "category": "structures"
}
```

目前在卡片背面翻转后、浏览详情弹窗里都能看到这段解析；用「🧠 意象精选」可以只看这 16 个样板词条。

## 🚀 使用方法

### 在线使用
直接访问：https://kuanbandu.github.io/Computer-English-Learning/

### 本地使用
```bash
git clone https://github.com/kuanbandu/Computer-English-Learning.git
cd Computer-English-Learning
python -m http.server 8000
# 浏览器打开 http://localhost:8000
```

### 添加到手机主屏幕
1. 用手机浏览器打开网站
2. 点击菜单（分享按钮）
3. 选择"添加到主屏幕"
4. 现在可以像 App 一样使用

## 📁 项目结构

```
Computer-English-Learning/
├── index.html              # 主页面
├── css/
│   └── style.css           # 样式文件（亮/暗双主题）
├── js/
│   ├── core/
│   │   └── srs.js          # SM-2 间隔重复算法
│   └── app.js              # 核心逻辑
├── data/
│   └── content.js          # 学习内容数据（2000 词条）
├── scripts/
│   ├── validate-data.js    # 数据完整性校验
│   ├── test-srs.js         # SRS 算法单元测试
│   └── add-categories.js   # 批量合并新分类工具
├── .github/workflows/
│   └── lint.yml            # CI：语法检查 + 数据校验 + 算法测试
├── manifest.json           # PWA 配置
├── sw.js                   # Service Worker
└── README.md               # 项目说明
```

## 🎯 功能说明

### 学习模式（卡片翻转）
- 卡片式学习，点击翻转查看中文翻译
- 🔊 按钮朗读英文发音
- ⭐ 按钮收藏内容
- ➡️ 按钮切换下一个
- 支持按分类筛选学习
- 四档评分（忘记 / 困难 / 良好 / 简单）驱动间隔复习

### 听写模式
- 只显示中文释义，键盘输入英文拼写
- 大小写不敏感，实时判分
- 连错自动重排，答错 1.6 秒后自动按"忘记"计分

### 选择题模式
- 4 选 1 测验，干扰项来自同分类
- 答对计"良好"，答错显示正确答案并按"忘记"计分
- 与 SRS 复习计划联动

### 浏览模式
- 查看所有词条内容
- 分类标签快速筛选
- 搜索功能（支持英文、中文、意象文本）
- 点击卡片查看详情（有意象的词条会显示 🧠 标记）

### 🧠 意象 / 场景解析
- 学习模式下翻转卡片后，卡片下方展开「程序员语境」面板：意象指引 → 常用场景 → 代码/报错语境 → 同根词族
- 「🧠 意象精选」按钮可在学习页和浏览页切换，只看带深度解析的词条
- 浏览页点开词条卡片，详情弹窗里同样能看到完整解析

### 🔎 报错反查
- 在浏览页第二个输入框粘贴英文报错（如 `NullPointerException`、`StackOverflowError`、`Bus error (core dumped)`）
- 工具会自动拆分驼峰/下划线/标点，按重合词数给所有术语打分，结果按相关度排序
- 适合“看到报错但不知道该查哪个词”的场景，比按字母表背单词留存率更高

### 收藏功能
- 收藏感兴趣的词条
- 在收藏页面快速复习
- 数据保存在浏览器本地

### 进度追踪
- 显示已学习词条数
- 计算完成百分比
- 记录连续学习天数
- SRS 统计：待复习 / 新词 / 学习中 / 已掌握
- **GitHub 风格学习热力图**：365 天活动记录，越绿越勤

### 数据备份（导出 / 导入）
- **导出**：把收藏、已学、SRS 复习计划、热力图、连续天数、主题设置打包成一个 JSON 文件下载
- **导入**：选择备份文件 → 自动校验格式 → 确认后恢复全部数据，无需刷新页面
- 适用于换浏览器、换设备或定期备份

## 🛠️ 技术栈

- **HTML5** - 页面结构
- **CSS3** - 样式设计（Flexbox/Grid、CSS 自定义属性双主题）
- **Vanilla JavaScript** - 无框架，原生实现（ES6+）
- **Web Speech API** - 语音合成
- **LocalStorage** - 本地数据存储
- **Service Worker** - PWA 离线支持
- **GitHub Actions** - 持续集成（语法/数据/算法三重校验）

## 📝 数据来源

所有词条均为计算机领域常用英语，包含：
- 英文原文
- 中文翻译
- 音标标注
- 实用例句
- 分类标签

高频词条额外带有**可选的**「程序员语境」字段（详见 [CONTRIBUTING.md](CONTRIBUTING.md)）：

| 字段 | 类型 | 含义 |
|------|------|------|
| `imagery` | string | 意象指引：用生活化比喻解释这个词的动作或形态 |
| `scenarios` | [{ name, text }] | 常用场景：区分数据结构/调用栈/内存区等层级，也标注“日常义 vs 计算机义” |
| `codeContext` | string | 代码或报错语境：这个词在屏幕上长什么样 |
| `wordFamily` | [string] | 同根词族 / 相关词，一次记一串 |

## 🔧 自定义内容

如果你想添加自己的学习内容，编辑 `data/content.js`：

```javascript
{
  "id": "分类ID",
  "name": "英文名称",
  "nameCN": "中文名称",
  "items": [
    {
      "id": "唯一ID",
      "english": "英文内容",
      "chinese": "中文翻译",
      "pronunciation": "/音标/",
      "example": "示例句子",
      "category": "子分类",
      "imagery": "可选：生活化意象指引",
      "scenarios": [
        { "name": "场景名", "text": "这个场景下它到底指什么" }
      ],
      "codeContext": "可选：代码 / 报错示例",
      "wordFamily": ["可选", "相关词"]
    }
  ]
}
```

批量添加新分类推荐使用脚本（自动校验 ID 唯一性）：

```bash
node scripts/add-categories.js my-new-categories.json
node scripts/validate-data.js
```

## 🔄 持续集成

每次 Push / PR 自动运行：

1. **语法检查** - `node --check` 校验所有 JS 文件
2. **数据完整性** - 分类数、词条 ID 全局唯一性、必填字段检查
3. **SRS 算法测试** - 间隔重复算法的单元测试

修改 `sw.js` 缓存列表时记得同步递增 `CACHE_NAME` 版本号。

## 📄 License

MIT License - 自由使用和修改

## 🤝 贡献

欢迎提交 Issue 和 Pull Request：
- 为高频词条补充「意象 + 场景」解析（格式见 [CONTRIBUTING.md](CONTRIBUTING.md)，CI 会自动校验）
- 补充更多计算机英语词条（2000 词已达成，迈向 3000）
- 改进 UI/UX 设计
- 修复 bug
- 添加新功能

## 💡 使用建议

1. **先建意象** - 遇到 stack / heap / cache 这类词，先点开「意象指引」在脑子里挂个画面，再记中文
2. **每日学习** - 利用碎片时间，每天学习5-10个词条
3. **间隔复习** - 信任 SRS 排队，到期就复习，别刷量
4. **三模式轮换** - 认识（卡片）→ 会拼（听写）→ 会选（测验），记忆更牢
5. **定期备份** - 每月在进度页导出一次数据，防患未然
6. **坚持打卡** - 保持连续学习，让热力图绿起来

---

Made with ❤️ for developers
