# 贡献指南：为词条补充「程序员语境」

感谢你愿意帮这个项目把词条从“英汉词典”升级成“概念映射 + 场景锚定”。
单纯背 `stack = 栈` 意义有限；把 stack 还原成“一摞盘子”和“函数调用栈帧的压入弹出”，才是程序员需要的母语语境。

## 一次只做一件事

推荐流程：**先拿一个你最熟的词做样板 →  maintainers 确认颗粒度 → 再批量铺开。**
不要一次给几百个词手写意象，质量比数量重要。

## 数据在哪、怎么改

所有内容都在 `data/content.js`，结构是一个 `computerEnglishData.categories` 数组。
新增/修改词条时只改对应条目；不要改变已有 `id`（SRS 复习记录和收藏都按 id 存储）。

批量新增分类可以用脚本（会自动校验 id 唯一性）：

```bash
node scripts/add-categories.js my-new-categories.json
node scripts/validate-data.js
node scripts/test-srs.js
```

## 字段规范

必填字段保持不变：`id` / `english` / `chinese` / `pronunciation` / `example` / `category`。

下面 4 个字段**全部可选**，但一旦出现，`scripts/validate-data.js` 会检查类型；CI 会拦下格式错误：

| 字段 | 类型 | 要求 | 写作提示 |
|------|------|------|----------|
| `imagery` | string | 非空 | 用一句生活化比喻解释“动作或形态”。先写画面，再写术语。不要只是把中文释义换个说法。 |
| `scenarios` | `[{ "name": string, "text": string }]` | 至少 1 项，`name`/`text` 均非空 | 列出该词在不同技术层级的含义；至少覆盖一个“日常义 vs 计算机义”或易混淆点。 |
| `codeContext` | string | 非空 | 一行代码、一段报错或一条命令，让用户看到这个词在屏幕上长什么样。`\n` 换行即可。 |
| `wordFamily` | `[string]` | 至少 1 项 | 同根词 / 高频搭配，帮用户一次记一串，例如 stack frame、stack trace、stack overflow。 |

## 样板：stack

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

## 质量检查清单

- [ ] 意象是**画面**，不是中文翻译的复述
- [ ] 场景区分了不同层级（语法层 / 运行时层 / 系统层），没有把同名概念混为一谈（例如堆内存 vs 堆排序）
- [ ] 代码或报错示例能真实出现（最好来自常见运行时：Node/Java/Python/GCC）
- [ ] `wordFamily` 里的词确实和主词同源或高频共现
- [ ] 修改后运行 `node scripts/validate-data.js` 通过
- [ ] 如果改了 `index.html` 引用的静态文件，记得递增 `sw.js` 里的 `CACHE_NAME`

## 已覆盖的样板词条

`alg009` stack、`alg010` queue、`alg005` recursion、`alg007` hash table、
`p028` heap、`p029` pointer、`e011` null pointer exception、`e012` / `p027` stack overflow、
`bd020` call stack、`bd028` stack trace、`s012` memory、`s022` cache、
`s003` daemon、`dg043` bus protocol、`e035` bus error。

欢迎按同样格式继续补充：buffer、fork、socket、token、stream、commit、rollback、index、lock 都是很好的候选。
