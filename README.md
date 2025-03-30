# 購物網站前台

一個基於 **Next.js + Redux Toolkit** 的購物網站前台範本。

---

## 📌 主要功能
- **支援後台設定前台版面**：透過 YAML 設定 `token` 讀取不同 Domain 的資訊。
- **資料控管**：使用 Redux 管理資料。
- **伺服端渲染 (SSR)**：使用 Next.js 提升效能與 SEO 表現。

---

## 📦 專案結構

```bash
src/
├── app/
│   ├── _common/
│   │   ├── lib/                        # 共用邏輯
│   │   │   ├── axios.ts                  # call API使用封裝後的 axios
│   │   │   ├── hooks.ts                  # 讀取store、讀取state、調用dispatch
│   │   │   ├── providers.ts
│   │   │   └── store.ts                  # Redux store
│   │   ├── utils/                      # 共用工具
│   │   │   └── log.ts                    # （Server API debug log）
│   │   ├── types/                      # 共用定義型別
│   │   │   └── api.ts                    # 定義 API 回傳共通型別
│   ├── _components/                    # 共用 UI 元件
│   ├── _modules/                       # 功能模組（具備 slice / action / UI）
│   │   ├── main/                         # 全站設定（站台資訊 / 初始資料）
│   │   ├── cart/                         # 購物車
│   │   ├── nav/                          # 導覽列
│   │   ├── products/                     # 商品
│   ├── (pages)/(main)/                 # 首頁 route 與 layout 設定（App Router）
│   │   ├── layout.tsx                    # 全域 layout 設定（含 ReduxProvider）
│   │   ├── page.tsx                      # 首頁進入點
│   │   └── error.tsx                     # 首頁錯誤頁
├── public/                             # 靜態資源（Image、logo 等）
├── .env.local                          # 環境變數設定
├── next.config.js                      # Next.js 設定（含圖片 domain、API rewrite）
├── tailwind.config.js                  # Tailwind 設定（色系、斷點等）
├── tsconfig.json                       # TypeScript 設定（型別範圍與路徑 alias）
├── package.json                        # 專案依賴與腳本
└── README.md                           # 專案說明文件（本檔）
```

---

## 🚀 安裝與運行

### 1️⃣ 環境需求
- **Node.js 18+**

### 2️⃣ 安裝專案
```bash
cd react-19-ecommerce
npm install
```

### 3️⃣ 設定環境變數
在 `.env.local` 檔案中設定 Domain Token，例如：
```env
NEXT_PUBLIC_API_TOKEN=domain-token
```

### 4️⃣ 執行開發伺服器
```bash
npm run dev
```

開啟瀏覽器並訪問 `http://localhost:3000`

---

## 🔧 技術選型
- **Next.js 15**：伺服端渲染 (SSR)。
- **Redux Toolkit**：狀態管理。
- **TypeScript**：提供強型別支援。
- **Tailwind CSS**：快速開發 UI 介面，支援RWD。

---

## 🛠️ 未來規劃
- 增加單元測試與整合測試。
- 優化行動裝置體驗。