# 中文独立博客公约

[zhblog.org](https://zhblog.org) 的源代码仓库。

《中文独立博客公约》是一份面向中文独立博客创作者的公共倡议与参考指南，由所有人共同编辑、自愿遵守。

- 阅读公约：[zhblog.org/guidelines](https://zhblog.org/guidelines)
- 修订记录：[zhblog.org/history](https://zhblog.org/history)

## 参与贡献

不论是否懂开发，都可以参与公约的修订，详见[修订与贡献](https://zhblog.org/contribute)。

- 修订建议、问题反馈：[议题](https://github.com/zhblogorg/zhblog/issues)
- 开放性讨论：[讨论](https://github.com/zhblogorg/zhblog/discussions)
- 直接修改：编辑 `src/content/guidelines.md` 并提交 Pull Request

## 本地开发

站点基于 [Astro](https://astro.build) 构建，纯静态输出。

```bash
npm install      # 安装依赖
npm run dev      # 启动开发服务器（http://localhost:4321）
npm run build    # 构建静态站点至 dist/
npm run preview  # 本地预览构建结果
```

## 目录结构

- `src/content/`：全部页面内容（Markdown），以内容集合管理
- `src/pages/`：路由，包含网页版与 Markdown 源文件版（`/<页面>.md`）
- `src/layouts/`：页面布局
- `src/components/`：页头等组件
- `public/llms.txt`：面向 AI 的站点说明
- `site.config.ts`：站点标题、描述与导航配置

## 授权

公约正文以 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans) 授权。