---
title: claude code的settings
date: 2025-11-24
tags:
    - Claude Code
    - AI
description: claude code的設定蠻多的，而且有很多重要的東西在裡面，做個研究跟紀錄
---

## 前言
claude code的設定蠻多的，而且有很多重要的東西在裡面，做個研究跟紀錄，[官方文件連結](https://code.claude.com/docs/en/settings)



## settings的參數列表

主要分幾塊：
- `基本設定`
- `環境變量設定`
- `權限設定`
- `hooks設定`
- `statusLine設定`
- `outputStyle設定`
- `sandbox設定`

格式大概如下
```json
{
  // 基本設定
  "A":{},
  "B":{},
  ...,
  "env": { // 環境變量設定
    ...
  },
  "permissions": { // 權限設定
    ...
  },
  "hooks": { // hooks設定
    ...
  },
  "statusLine": { // statusLine設定
    ...
  },
  "outputStyle": "Default", // outputStyle設定
  "sandbox": { // sandbox設定
    ...
  }
}
```

### 基本設定

```json
{
  // 自定義腳本來生成api key, 比較特殊的情況，需要動態產生key的才會用到
  "apiKeyHelper": "/path/to/your/auth-script.js",
  // 聊天記錄保留天數 (預設: 30)
  "cleanupPeriodDays": 30,
  // 啟動時顯示的公告訊息
  "companyAnnouncements": "歡迎使用 Claude Code！記得定期更新設定檔。",
  // 在 commit 中包含 co-authored-by Claude(預設: true)，通常會設成false
  "includeCoAuthoredBy": false,
  // 關閉所有hooks，預設是false
  "disableAllHooks": false,
  // 覆蓋預設模型
  "model": "claude-sonnet-4-5-20250929",
  // 限制登入方法，有claudeai(subscription)跟console(API usage billing)，沒填就是沒限制
  "forceLoginMethod": "claudeai",
  // 登入時自動選擇的組織 UUID, 企業方式使用
  "forceLoginOrgUUID": "your-org-uuid-here",
  // 是否啟動project level所有的MCP, 預設是false
  // project level mcp設定檔在專案根目錄的.mcp.json檔案
  // 注意！.mcp.json只能放在project level
  // 格式跟.claude.json一樣（mcpServers部分）
  "enableAllProjectMcpServers": true,
  // project level的mcp的白名單(不影響user level)
  "enabledMcpjsonServers": ["memory", "github"],
  // project level的mcp的黑名單(不影響user level)
  "disabledMcpjsonServers": ["serena"],
  // enterprise-managed MCP configurations的白名單, 全域的
  "allowedMcpServers": [{ "serverName": "github" }],
  // enterprise-managed MCP configurations的黑名單, 全域的
  "deniedMcpServers": [{ "serverName": "github" }],
  // aws登入的scripts
  "awsAuthRefresh": "aws sso login --profile myprofile",
  // 一樣跟aws登入相關的
  "awsCredentialExport": "/bin/generate_aws_grant.sh",
}
```

### 環境變量設定

可以設定的環境變量也是超多，三大雲相關的就不列了，分成：
- `API認證設定`
- `model設定`
  - `ANTHROPIC_MODEL`設定可以用`alias`，如下
    - `sonnet`, `opus`, `default`, `haiku` , `opusplan` (計劃用opus, 執行用sonet)
    - 也可以用這樣的方式，設定全局的執行的model，[說明文件](https://code.claude.com/docs/en/model-config#setting-your-model)
    - `優先級最高`，會蓋掉下面細分的model
  - `plan`, `subagent`, `background`等細分的model要填`full model name`，這邊[查閱](https://platform.claude.com/docs/en/about-claude/models/overview#model-names)
- `bash設定`
  - `CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR`: "1"
    - 會在執行bash指令之後，回到working dir，蠻重要的，不然AI有時會迷路
- `Claude Code 核心設定`
  - `DISABLE_BUG_COMMAND`、`DISABLE_ERROR_REPORTING`、`DISABLE_TELEMETRY`都是官方debug的監控，可以關掉
  - `CLAUDE_CODE_MAX_OUTPUT_TOKENS`最大值是`32000`(從github issue推測得知)
  - `DISABLE_NON_ESSENTIAL_MODEL_CALLS`，跟一些體驗相關的，可以不用關，設成`"0"`
- `網路設定`
  - 這邊的proxy通常是為了監控、過濾、audit
- `MCP設定`
  - `MAX_MCP_OUTPUT_TOKENS`最大值就是`25000`，沒設定就是`最大值`
- `效能與優化設定`
  - `MAX_THINKING_TOKENS`:"64000"
    - 預設是`關閉`的，但是可以透過`ultrathink`等觸發詞去臨時啟動
    - 最大值是`64000`
    - `ultrathinkn`的預算是`32000`，ultrathink是一個`觸發詞`
    - 可以明確指定`extended thinking`，然後使用`64000`token
    - 或是在system prompt設定一個`觸發詞`，例如：`deepthinking`去觸發`64000`token的`extended thinking`
    - `extended thinking`是`ultrathink`、`think hard`、`think harder`的統稱
  - `USE_BUILTIN_RIPGREP`:"1"
    - 預設值是1，使用`claude code`的`RIPGREP`

```json
{
  "env": {

    /** ========== API認證設定 ========== */

    // Claude SDK 的 API key (以 X-Api-Key header發送)
    "ANTHROPIC_API_KEY": "your-api-key",
    // 跟API_KEY的差異是在JWT Token的產生可自帶metadata, 可以解釋出來角色跟權限
    // 自定義 Authorization 標頭的值 (會自動加上 "Bearer " 前綴)
    "ANTHROPIC_AUTH_TOKEN": "your-auth-token",
    // 要添加到請求中的自定義header (格式: "Name: Value")
    "ANTHROPIC_CUSTOM_HEADERS": "Name: Value",

    /** ========== model設定 ========== */

    // 優先級最高，沒細分功能，可寫alias
    "ANTHROPIC_MODEL": "sonet",
    // 主要執行工作的模型，預設的 Sonnet 模型名稱
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "claude-sonnet-4-5-20250929",
    // 執行plan mode的模型，預設的 Opus 模型名稱
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "claude-opus-4-1-20250805",
    // 執行sub agent的模型
    "CLAUDE_CODE_SUBAGENT_MODEL": "claude-sonnet-4-5-20250929",
    // 執行background task的模型，預設的 Haiku 模型
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "claude-haiku-4-5-20251001",

    /** ========== bash設定 ========== */

    // bash 指令的預設超時時間 (毫秒)
    "BASH_DEFAULT_TIMEOUT_MS": "15000",
    // bash 輸出最大字元數
    "BASH_MAX_OUTPUT_LENGTH": "5000",
    // bash 允許的最大超時時間 (毫秒)，當執行時有額外設定timeout是多少的時候
    "BASH_MAX_TIMEOUT_MS": "30000",
    // 在每個 Bash 指令執行後是否回到原始工作目錄, 預設是0表示否定, 1表示肯定
    "CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR": "1",

    /** ========== Claude Code 核心設定 ========== */

    // 使用 apiKeyHelper 時，刷新憑證的間隔時間 (毫秒)
    "CLAUDE_CODE_API_KEY_HELPER_TTL_MS": "60000",
    // mTLS 認證用的客戶端憑證檔案路徑
    "CLAUDE_CODE_CLIENT_CERT": "/path/to/client/cert.pem",
    // 加密的 CLAUDE_CODE_CLIENT_KEY 密碼 (可選)
    "CLAUDE_CODE_CLIENT_KEY_PASSPHRASE": "your-passphrase",
    // mTLS 認證用的客戶端私鑰檔案路徑
    "CLAUDE_CODE_CLIENT_KEY": "/path/to/client/key.pem",
    // 設為 '1' 以停用 Anthropic API 專用的 'anthropic-beta' 標頭
    // 避免第三方的LLM gateway報錯
    "CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS": "1",
    // 等同於同時設定 DISABLE_AUTOUPDATER, DISABLE_BUG_COMMAND, 
    // DISABLE_ERROR_REPORTING, DISABLE_TELEMETRY
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1",
    // 設為 '1' 以停用自動更新，預設為0(開啟)
    "DISABLE_AUTOUPDATER": "1",
    // 設為 '1' 以停用 /bug 指令，預設為0(開啟)
    "DISABLE_BUG_COMMAND": "1",
    // 設為 '1' 以停用官方的 Sentry 錯誤回報，預設為0(開啟)
    "DISABLE_ERROR_REPORTING": "1",
    // 設為 '1' 以停用官方的 Statsig telemetry，預設為0(開啟)
    "DISABLE_TELEMETRY": "1",         
    // 設為 '1' 以停用基於對話內容的自動終端機標題更新，預設為0(開啟)
    "CLAUDE_CODE_DISABLE_TERMINAL_TITLE": "1",
    // 跳過 IDE 擴充功能的自動安裝，預設為0(開啟)
    "CLAUDE_CODE_IDE_SKIP_AUTO_INSTALL": "1",
    // 設定該次請求的最大輸出 token 數量，不要設定
    "CLAUDE_CODE_MAX_OUTPUT_TOKENS": "32000",
    // 設為 '1' 以停用成本警告訊息
    "DISABLE_COST_WARNINGS": "1",
    // 設為 '1' 以停用非關鍵路徑的模型呼叫 (如風格文字)
    "DISABLE_NON_ESSENTIAL_MODEL_CALLS": "1",
    // 設為 '1' 以停用所有模型的提示快取 (優先級高於各模型設定)
    "DISABLE_PROMPT_CACHING": "1",
    // 設為 '1' 以停用 Haiku 模型的提示快取
    "DISABLE_PROMPT_CACHING_HAIKU": "1",
    // 設為 '1' 以停用 Opus 模型的提示快取
    "DISABLE_PROMPT_CACHING_OPUS": "1",
    // 設為 '1' 以停用 Sonnet 模型的提示快取
    "DISABLE_PROMPT_CACHING_SONNET": "1",

    /** ========== 網路設定 ========== */

    // 指定網路連線的 HTTP 代理伺服器
    "HTTP_PROXY": "http://proxy.example.com:8080",
    // 指定網路連線的 HTTPS 代理伺服器
    "HTTPS_PROXY": "https://proxy.example.com:8080",
    // 不經過proxy的domain list
    "NO_PROXY": "localhost,127.0.0.1",

    /** ========== MCP設定 ========== */

    // MCP 工具回應中允許的最大 token 數量 (預設: 25000，超過 10000 token 時會顯示警告)
    "MAX_MCP_OUTPUT_TOKENS": "25000",
    // MCP 伺服器啟動的超時時間 (毫秒)
    "MCP_TIMEOUT": "120000",
    // MCP 工具執行的超時時間 (毫秒)
    "MCP_TOOL_TIMEOUT": "60000",

    /** ========== 效能與優化設定 ========== */

    // 啟用擴展思考並設定思考過程的 token 預算
    // 擴展思考可提升複雜推理和編碼任務的效能，但會影響提示快取效率，預設停用
    "MAX_THINKING_TOKENS": "64000",
    // SlashCommand 工具顯示的斜線指令元資料最大字元數 (預設: 15000)
    "SLASH_COMMAND_TOOL_CHAR_BUDGET": "15000",
    // 設為 '0' 以使用系統安裝的 rg 而非 Claude Code 內建的 rg，預設值1
    "USE_BUILTIN_RIPGREP": "1",
  }
}
```
---

### 權限設定

分成：
- allow
- ask
- deny
- additionalDirectories
  - 可以在cc使用`/add-dir`去臨時新增
- defaultMode
  - `default`
    - 首次使用每個工具時會`提示授權`
  - `acceptEdits`
    - 自動接受該會話的`檔案編輯`權限
    - `讀取`、`bash`、`工具`、`網路`都需要確認
  - `plan`
    - 可以`分析檔案`，但無法`修改檔案`或`執行指令`
    - plan mode預設會掃`整個專案結構`，確保正確性，bypassPermissions不會
    - 跟專案相關且複雜的任務，可以先用plan mode去做規劃，產生prd
  - `bypassPermissions`
    - 跳過所有許可提示
- disableBypassPermissionsMode
  - 預設值是允許上面的`bypassPermissions`
  - 設成"disableBypassPermissionsMode":"disable"，就不能切換到`bypassPermissions` mode
    - `shift + tab`可以切換mode



```json
{
  "permissions": {
    // 允許的權限規則陣列
    "allow": [ "Bash(git diff:*)" ],
    // 需要確認的權限規則陣列
    "ask": [ "Bash(git push:*)" ],
    // 拒絕的權限規則陣列
    "deny": [ "WebFetch", "Bash(curl:*)", "Read(./.env)", "Read(./secrets/**)" ],
    // 額外的工作目錄
    "additionalDirectories": [
      "/path/to/another/project",
      "/shared/workspace"
    ],
    // 有`default`、`acceptEdits`、`plan`、`bypassPermissions`
    "defaultMode": "bypassPermissions",
    // 禁止bypassPermissions mode, 沒射就是允許
    "disableBypassPermissionsMode": "disable"
  },
}
```
---

### hooks設定

[官方文件在這](https://code.claude.com/docs/en/hooks)，超長，還沒找到很好地應用，以後有心得，會再寫一篇blog

---
### statusLine設定

可以利用`/statusline`去幫忙產生，或是直接用社群的工具，像[ccstatusline](https://github.com/sirmalloc/ccstatusline)

---
### outputStyle設定

內建三種可以選，預設是Default，也可以`自定義`，在CC中使用`/output-style`去切換
- `Default`
  - 標準的`軟體工程任務`模式 
- `Explanatory`
  - 提供`教育性見解`，幫助`理解`實現選擇和程式碼庫模式
  - 日常可以用這個
- `Learning`
  - `協作學習模式`，Claude 會分享見解並要求你貢獻程式碼片段

自定義在`.claude/output-styles`目錄下面創建md文件，格式如下

```markdown
---
name: My Custom Style
description:
  A brief description of what this style does, to be displayed to the user
keep-coding-instructions: true
---

# Custom Style Instructions

You are an interactive CLI tool that helps users with software engineering
tasks. [Your custom instructions here...]

## Specific Behaviors

[Define how the assistant should behave in this style...]

```
---

### sandbox設定

大部分都跟權限相關的，理論上不常用

```json
{
  "sandbox": {
    // 啟用 bash 沙盒 (預設: false)
    "enabled": true,
    // 如果在沙盒中，自動允許 bash (預設: true)
    "autoAllowBashIfSandboxed": true,
    // sandbox外可執行的指令
    "excludedCommands": ["git", "docker"],
    // 允許未沙盒化的命令 (預設: true)
    "allowUnsandboxedCommands": false,
    // 網路設定
    "network": {
      // 可存取的 Unix sockets
      "allowUnixSockets": ["~/.ssh/agent-socket"],
      // 允許綁定本地主機 (預設: false)
      "allowLocalBinding": true,
      // 自定義 HTTP 代理埠號
      "httpProxyPort": 8080,
      // 自定義 SOCKS5 代理埠號
      "socksProxyPort": 8081,
      // 啟用較弱的沙盒以支援非特權的 Docker 環境, 預設false
      "enableWeakerNestedSandbox":true
    }
  },
}
```

## 推薦的設定值

推薦的設定值如下

```json
{
  "includeCoAuthoredBy": false,
  "env": {
    "CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR": "1",
    "DISABLE_BUG_COMMAND": "1",
    "DISABLE_ERROR_REPORTING": "1",
    "DISABLE_TELEMETRY": "1",
    "MAX_THINKING_TOKENS": "64000",
  },
  "permissions": {
    "defaultMode": "bypassPermissions",
  },
  "outputStyle": "Explanatory",
}

```




<Comment />