# Portfolio — Frontend Engineer

DMMのプロジェクトマネージャー職への応募用ポートフォリオサイト。  
**「曖昧な課題を整理し、チームで前進する。」** をコンセプトに、Next.js + Tailwind CSS で実装。

---

## Tech Stack

| 項目 | 詳細 |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Fonts | Syne（英字見出し） + Noto Sans JP（本文） |
| Deploy | Vercel |

---

## Design System — 🐢 Turtle UI Kit

[DMM Turtle UI Kit (Figma)](https://www.figma.com/community/file/1564449938298937268) のカラートークン・コンポーネント仕様を参照して実装。

### Color Tokens

Turtle UI Kit の **Global Token → Alias Token** の2層構造を Tailwind CSS v4 の `@theme` で定義している。

```css
/* src/app/globals.css */

@theme {
  /* Neutral / Text */
  --color-ink:          #1a1a1a;   /* Turtle gray/900 相当 */
  --color-ink-muted:    #6b7280;   /* Turtle gray/500 相当 */
  --color-ink-faint:    #9ca3af;   /* Turtle gray/400 相当 */

  /* Background */
  --color-surface:      #ffffff;   /* White */
  --color-surface-alt:  #f7f8fa;   /* Turtle gray/50 相当 */

  /* Primary — Turtle Blue */
  --color-accent-warm:       #4766f4;   /* Turtle primary blue */
  --color-accent-warm-hover: #3655e8;   /* Hover state */
  --color-accent-warm-light: #eef2ff;   /* Tinted background */

  /* Secondary — Turtle Teal */
  --color-accent-cool:       #10b981;   /* Turtle success green */
  --color-accent-cool-light: #ecfdf5;

  /* Semantic (Turtle UI Alert パレット準拠) */
  --color-turtle-success:    #10b981;   /* Success */
  --color-turtle-success-bg: #ecfdf5;
  --color-turtle-warning:    #f59e0b;   /* Warning */
  --color-turtle-warning-bg: #fff7ed;
  --color-turtle-danger:     #ef4444;   /* Danger */
  --color-turtle-danger-bg:  #fef2f2;
  --color-turtle-info:       #4766f4;   /* Info (= primary) */
  --color-turtle-info-bg:    #eef2ff;

  /* Border */
  --color-turtle-border: #e5e7eb;   /* Turtle Alias Token/border/border 相当 */
}
```

### Badge Variants

Turtle UI の Tag コンポーネントに対応する `Badge` を実装。

| variant | 用途 | 色 |
|---|---|---|
| `primary` | 主要ラベル（featured） | Turtle Blue |
| `success` | 完了・達成 | Green |
| `warning` | 注意 | Amber |
| `danger` | 削除・エラー | Red |
| `default` | 汎用 | Gray |

```tsx
<Badge variant="primary">主要プロジェクト</Badge>
<Badge variant="success">完了</Badge>
<Badge variant="warning">進行中</Badge>
<Badge variant="danger">注意</Badge>
```

### Button Style

Turtle UI の Button v2.0（pill型）に準拠。

```tsx
// Primary CTA
<button className="px-6 py-3 rounded-full bg-accent-warm text-white hover:bg-accent-warm-hover">
  Projects を見る
</button>

// Secondary / Outline
<button className="px-6 py-3 rounded-full border border-turtle-border text-ink hover:bg-surface-alt">
  About me
</button>
```

### Component 対応表

| ポートフォリオ | Turtle UI Kit |
|---|---|
| `Badge` | Tag |
| `ProjectCard` (featured) | — (Primary Blue card) |
| Nav Contact ボタン | Button v2.0 / Primary |
| Hero CTA ボタン | Button v2.0 / Primary |
| Alert 系表示 | Alert |

---

## Site Map

```
/ (Home)
├── /about
├── /experience
├── /projects
│   ├── /projects/hackathon-2025
│   ├── /projects/hackathon-2024
│   ├── /projects/requirements-organization
│   ├── /projects/team-collaboration
│   └── /projects/state-management
├── /learning
├── /thoughts
└── /contact
```

---

## Getting Started

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) で確認。

```bash
npm run build   # 本番ビルド確認
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # 共通レイアウト（Nav + Footer）
│   ├── globals.css         # Tailwind v4 @theme カラートークン
│   ├── page.tsx            # Home
│   ├── about/page.tsx
│   ├── experience/page.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── learning/page.tsx
│   ├── thoughts/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/Nav.tsx
│   ├── layout/Footer.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── StrengthItem.tsx
│   │   ├── ProcessStrip.tsx
│   │   ├── FeaturedProjects.tsx
│   │   └── LearningStrip.tsx
│   ├── projects/
│   │   ├── ProjectCard.tsx
│   │   └── ProjectDetail.tsx
│   └── ui/
│       ├── Badge.tsx
│       └── SectionHeader.tsx
└── data/
    ├── projects.ts         # プロジェクトデータ（後で記入）
    └── profile.ts          # プロフィールデータ（後で記入）
```

---

## Content を埋める

`src/data/profile.ts` と `src/data/projects.ts` 内の `（後で記入）` を実際の内容に置き換える。

```ts
// src/data/profile.ts
export const profile = {
  name: '実名を記入',
  initials: 'TM',
  email: 'your@email.com',
  twitter: 'https://x.com/yourhandle',
  linkedin: 'https://linkedin.com/in/yourprofile',
  qiita: 'https://qiita.com/yourhandle',
}
```

---

## Deploy

```bash
# Vercel CLI
npx vercel

# または GitHub 連携でオートデプロイ
# vercel.com → Add New Project → このリポジトリを選択
```
