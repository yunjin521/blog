# NotionNext 博客搭建指南 — 方案 A

## 你需要准备的

- Notion 账号（notion.so 免费注册）
- GitHub 账号（github.com 免费注册）
- Vercel 账号（vercel.com，用 GitHub 一键登录）

## 步骤一：在 Notion 创建博客数据库

1. 登录 notion.so，点击左上角「+」新建一个页面
2. 命名页面为「我的博客」
3. 在页面内输入 `/table` 创建一个表格数据库
4. 给数据库添加以下属性：
   - `title` — 标题（默认就有）
   - `slug` — Text 类型（网址后缀，比如 hello-world）
   - `status` — Select 类型（选项：Idea / Published）
   - `tags` — Multi-select 类型（标签：生活随笔、读书笔记、探店记录、创作分享）
   - `date` — Date 类型（发布日期）
   - `summary` — Text 类型（文章摘要）

## 步骤二：公开分享 Notion 页面

1. Notion 右上角点击「Share」→ 切换到「Publish」标签
2. 点击「Publish to web」按钮
3. 复制公开链接，格式类似：
   ```
   https://yourname.notion.site/abc123def4567890
   ```
4. **记下 URL 中最后那段字符**（`abc123def4567890`），这就是你的页面 ID

## 步骤三：部署 NotionNext 到 Vercel

1. 打开 vercel.com，用 GitHub 账号登录
2. Dashboard 点击「New Project」
3. 搜索 `tangly1024/NotionNext`，选中
4. 点击「Deploy」，等待 1-2 分钟
5. 获得访问地址如 `your-blog.vercel.app`

## 步骤四：连接 Notion 到博客

1. 访问 `your-blog.vercel.app/settings`
2. 在「Notion Page ID」填入之前的页面 ID
3. 点击保存，刷新首页即可看到 Notion 文章

## 步骤五：配置主题

1. 访问 `your-blog.vercel.app/settings`
2. 推荐主题：`NEXT` 或 `HEO`
3. 自定义颜色参考：
   - 背景色：#faf7f0
   - 主文字：#4a3b2f
   - 强调色：#9b7a5e
   - 点缀色：#7a9a6e

## 国内访问说明

- Vercel 的 `vercel.app` 域名在国内**已被墙**
- 绑了自定义域名后通过 Cloudflare CDN 可正常访问
- 临时方案：用手机 4G/5G（不走 WiFi）测试

## 后续优化

1. 绑域名（约 60 元/年）：在域名 DNS 添加 CNAME 记录指向 `cname.vercel-dns.com`
2. 可迁移到 Cloudflare Pages（国内更好）

## 常见问题

**Q: Notion 改了文章，博客多久更新？**  
A: NotionNext 自动同步，通常 1-5 分钟。

**Q: 可以换主题吗？**  
A: 可以，NotionNext 内置 10+ 种主题，在 `/settings` 切换。

**Q: 文章里的图片怎么办？**  
A: 直接拖到 Notion 文章里，自动显示在博客。

**Q: 以后不想用了能迁移吗？**  
A: Notion 支持一键导出 Markdown，内容零丢失。
