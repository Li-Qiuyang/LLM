<template>
  <div class="home-page">
    <div class="header">
      <div class="left">
        <h3>LLM Chat</h3>
      </div>
      <div class="right">
        <div class="search-container">
          <div class="search-input">
            <el-icon class="search-icon"><Search /></el-icon>
            <input placeholder="搜索" readonly clearable v-model="inputValue" />
          </div>
        </div>
      </div>
    </div>

    <!-- 主要内容区域 -->
    <main class="content">
      <div class="hero-section">
        <h1 class="title">LLM Chat</h1>
        <p class="subtitle">基于大语言模型的智能对话助手</p>
        <p class="description">
          体验先进的大语言模型技术，获得智能、准确、富有洞察力的回答。
          无论是学习、工作还是日常生活中的问题，LLM Chat
          都能为您提供有价值的帮助。
        </p>

        <div class="features">
          <div class="feature-item">
            <el-icon class="feature-icon"><ChatLineRound /></el-icon>
            <h3>自然对话</h3>
            <p>流畅自然的对话体验，理解上下文，提供连贯的回答</p>
          </div>

          <div class="feature-item">
            <el-icon class="feature-icon"><Document /></el-icon>
            <h3>知识渊博</h3>
            <p>涵盖广泛领域的知识，为您提供专业、准确的信息</p>
          </div>

          <div class="feature-item">
            <el-icon class="feature-icon"><Setting /></el-icon>
            <h3>个性化定制</h3>
            <p>可自定义的对话参数，满足不同场景需求</p>
            <p style="color: #3f7af1; font-style: italic; font-size: 12px">
              支持 deepseek_r1 模型
            </p>
          </div>
        </div>

        <router-link to="/chat" class="start-button">
          <span class="mirror-text">开始对话</span>
          <div class="liquid"></div>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import {
  Search,
  ChatLineRound,
  Document,
  Setting,
} from "@element-plus/icons-vue";
import { ref } from "vue";

const inputValue = ref("");
</script>

<style lang="scss" scoped>
.home-page {
  min-height: 100vh; // 确保页面至少占满整个视口高度
  background-color: var(--el-bg-color); // 使用 Element Plus 的主题背景色
}

.header {
  height: 64px; // 固定头部高度
  padding: 0 32px; // 左右内边距
  display: flex; // 使用弹性布局
  align-items: center; // 垂直居中
  justify-content: space-between; // 两端对齐
  border-bottom: 1px solid var(--el-border-color); // 底部边框
  background-color: var(--el-bg-color); // 头部背景色

  .left {
    flex-shrink: 0; // 防止logo被压缩
    .logo-text {
      font-size: 20px;
      font-weight: 600;
      color: #171717;
      cursor: pointer;
      user-select: none;
      white-space: nowrap; // 防止文字换行
    }
  }

  .right {
    display: flex; // 使用弹性布局
    align-items: center; // 垂直居中对齐
    gap: 16px; // 子元素之间的间距
    flex: 1; // 占据剩余空间
    justify-content: flex-end; // 右对齐

    .search-container {
      flex: 1; // 搜索框容器占据剩余空间
      max-width: 280px; // 最大宽度限制
      min-width: 40px; // 减小最小宽度
      margin-left: 16px; // 与logo保持距离

      .search-input {
        display: flex; // 搜索框内部使用弹性布局
        align-items: center; // 搜索框内部元素垂直居中
        // max-width: 240px; // 搜索框最小宽度
        // min-width: 100px; // 搜索框最大宽度

        width: 100%; // 搜索框宽度填充容器
        height: 32px; // 搜索框固定高度
        padding: 0 12px; // 左右内边距
        border-radius: 6px; // 圆角边框
        background-color: #f2f2f2; // Vercel 风格的浅灰色背景

        .search-icon {
          flex-shrink: 0; // 防止图标被压缩
          font-size: 14px; // 搜索图标大小
          color: #8f8f8f; // Vercel 风格的图标颜色
          margin-right: 8px; // 图标右侧间距
        }

        input {
          flex: 1; // 输入框占据剩余空间
          width: 0; // 添加这行，强制输入框从0开始计算宽度
          min-width: 0; // 防止输入框溢出
          border: none; // 移除输入框边框
          outline: none; // 移除输入框轮廓
          background: none; // 移除输入框背景
          font-size: 13px; // 输入框字体大小
          color: #000; // Vercel 风格的文本颜色

          &::placeholder {
            color: #666666; // Vercel 风格的占位符颜色
          }
        }

        .shortcut-key {
          flex-shrink: 0; // 防止快捷键被压缩
          font-size: 12px; // 快捷键文本大小
          color: #171717; // Vercel 风格的快捷键文本颜色
          background-color: #fafafa; // 快捷键白色背景
          padding: 2px 4px; // 快捷键内边距
          border-radius: 4px; // 快捷键圆角
          border: 1.5px solid #dfdfdf; // Vercel 风格的边框
        }
      }
    }

    .github-link {
      display: flex; // 使用弹性布局
      align-items: center; // 垂直居中对齐
      height: 32px; // 与搜索框保持相同高度
      flex-shrink: 0; // 防止github图标被压缩
    }

    .github-icon {
      width: 22px; // 图标宽度
      height: 22px; // 图标高度
      cursor: pointer; // 鼠标指针样式
      opacity: 1; // 不透明度
    }
  }
}

.content {
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;

  .hero-section {
    text-align: center;

    .title {
      font-size: 48px;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 24px;
    }

    .subtitle {
      font-size: 24px;
      color: #4b5563;
      margin-bottom: 24px;
      font-weight: 500;
    }

    .description {
      font-size: 16px;
      color: #6b7280;
      max-width: 600px;
      margin: 0 auto 64px;
      line-height: 1.5;
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 40px;
      margin-bottom: 64px;

      .feature-item {
        padding: 32px;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        transition: transform 0.3s ease;

        &:hover {
          transform: translateY(-4px);
        }

        .feature-icon {
          font-size: 32px;
          color: var(--el-color-primary);
          margin-bottom: 20px;
        }

        h3 {
          font-size: 20px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 12px;
        }

        p {
          font-size: 16px;
          color: #666;
          line-height: 1.5;
        }

        .note {
          font-size: 12px;
          color: #999;
          margin-top: 8px;
          font-style: italic;
        }
      }
    }

    .start-button {
      position: relative;
      display: inline-block;
      padding: 20px 40px;
      font-size: 18px;
      font-weight: 600;
      color: #fff;
      background: var(--el-color-primary);
      border-radius: 12px;
      text-decoration: none;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 6px 30px -10px var(--el-color-primary);

      // 方案3: 镜面文字
      .mirror-text {
        position: relative;
        z-index: 1;
        color: rgba(255, 255, 255, 0.9);
        font-weight: 700;
        text-transform: uppercase;
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 0.8) 50%,
          rgba(255, 255, 255, 0.6) 100%
        );
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        -webkit-text-fill-color: transparent;
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.3));
      }

      // 发光效果
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          120deg,
          transparent,
          rgba(255, 255, 255, 0.3),
          transparent
        );
        transition: 0.5s ease;
      }

      // 液体效果
      .liquid {
        position: absolute;
        top: -80px;
        left: 0;
        width: 200px;
        height: 200px;
        background: var(--el-color-primary-light-3);
        box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.3);
        transition: 0.5s;

        &::before,
        &::after {
          content: "";
          position: absolute;
          width: 200%;
          height: 200%;
          top: 0;
          left: 50%;
          transform: translate(-50%, -75%);
          background: #fff;
        }

        &::before {
          border-radius: 45%;
          animation: animate 5s linear infinite;
        }

        &::after {
          border-radius: 40%;
          animation: animate 10s linear infinite;
        }
      }

      span {
        position: relative;
        z-index: 1;
      }

      // 悬停效果
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 40px -10px var(--el-color-primary);

        &::before {
          left: 100%;
        }

        .liquid {
          top: -120px;
        }

        .mirror-text {
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0.9) 50%,
            rgba(255, 255, 255, 0.7) 100%
          );
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
        }
      }

      // 点击效果
      &:active {
        transform: scale(0.98) translateY(0);
        box-shadow: 0 5px 20px -10px var(--el-color-primary);
      }
    }

    // 液体动画
    @keyframes animate {
      0% {
        transform: translate(-50%, -75%) rotate(0deg);
      }
      100% {
        transform: translate(-50%, -75%) rotate(360deg);
      }
    }
  }
}

.search-dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  z-index: 1000;
}

.search-dialog-container {
  margin-top: 15vh;
  width: 640px;
}

// 过渡动画
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
