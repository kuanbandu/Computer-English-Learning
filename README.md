# Computer English Learning

一个专为程序员设计的计算机英语词汇学习工具，帮助你在日常开发中熟悉常用英语表达。

🌐 **在线访问**: https://twt1978.github.io/computer-english-learning/

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![PWA](https://img.shields.io/badge/PWA-Supported-green.svg)

## 📱 特点

- **纯前端应用** - 无需后端，打开即用
- **PWA 支持** - 可添加到手机主屏幕，离线使用
- **语音朗读** - 集成 Web Speech API，点击即可听发音
- **分类学习** - 15个分类，750个常用词条
- **进度追踪** - 自动记录学习进度和连续学习天数
- **收藏功能** - 收藏重点内容，方便复习
- **响应式设计** - 完美适配手机、平板、电脑

## 📚 内容涵盖

| 分类 | 词条数 | 说明 |
|------|--------|------|
| Terminal Commands | 50 | 终端常用命令 |
| Git Commands | 50 | Git版本控制 |
| Error Messages | 50 | 常见错误信息 |
| Programming Terms | 50 | 编程基础术语 |
| Web Development | 50 | Web开发相关 |
| System Terms | 50 | 操作系统术语 |
| Code Comments | 50 | 代码注释常用语 |
| Daily Dev Phrases | 50 | 日常开发用语 |
| Docker & Kubernetes | 50 | 容器与编排 |
| Database & SQL | 50 | 数据库与SQL |
| Algorithms | 50 | 算法与数据结构 |
| Networking | 50 | 网络与协议 |
| Code Review | 50 | 代码审查用语 |
| AI & ML | 50 | 人工智能术语 |
| Agile Development | 50 | 敏捷开发 |

**总计：750个词条**

## 🚀 使用方法

### 在线使用
直接访问：https://twt1978.github.io/computer-english-learning/

### 本地使用
```bash
git clone https://github.com/twt1978/computer-english-learning.git
cd computer-english-learning
# 用浏览器打开 index.html
```

### 添加到手机主屏幕
1. 用手机浏览器打开网站
2. 点击菜单（分享按钮）
3. 选择"添加到主屏幕"
4. 现在可以像 App 一样使用

## 📁 项目结构

```
computer-english-learning/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── app.js          # 核心逻辑
├── data/
│   └── content.js      # 学习内容数据
├── manifest.json       # PWA 配置
├── sw.js              # Service Worker
└── README.md          # 项目说明
```

## 🎯 功能说明

### 学习模式
- 卡片式学习，点击翻转查看中文翻译
- 🔊 按钮朗读英文发音
- ⭐ 按钮收藏内容
- ➡️ 按钮切换下一个
- 支持按分类筛选学习

### 浏览模式
- 查看所有词条内容
- 分类标签快速筛选
- 搜索功能（支持英文、中文）
- 点击卡片查看详情

### 收藏功能
- 收藏感兴趣的词条
- 在收藏页面快速复习
- 数据保存在浏览器本地

### 进度追踪
- 显示已学习词条数
- 计算完成百分比
- 记录连续学习天数
- 按分类统计进度

## 🛠️ 技术栈

- **HTML5** - 页面结构
- **CSS3** - 样式设计（Flexbox/Grid）
- **Vanilla JavaScript** - 无框架，原生实现
- **Web Speech API** - 语音合成
- **LocalStorage** - 本地数据存储
- **Service Worker** - PWA 离线支持

## 📝 数据来源

所有词条均为计算机领域常用英语，包含：
- 英文原文
- 中文翻译
- 音标标注
- 实用例句
- 分类标签

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
      "category": "子分类"
    }
  ]
}
```

## 📄 License

MIT License - 自由使用和修改

## 🤝 贡献

欢迎提交 Issue 和 Pull Request：
- 补充更多计算机英语词条
- 改进 UI/UX 设计
- 修复 bug
- 添加新功能

## 💡 使用建议

1. **每日学习** - 利用碎片时间，每天学习5-10个词条
2. **边学边用** - 在实际开发中使用这些英语表达
3. **收藏重点** - 把常用但记不住的词条加入收藏
4. **坚持打卡** - 保持连续学习，养成习惯

---

Made with ❤️ for developers
