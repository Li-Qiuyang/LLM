import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { conversation } from "./type";
export const useChatStore = defineStore(
  "chat",
  () => {
    // 当前对话的消息列表
    const currentMessages = computed(
      () => currentConversation.value?.messages || []
    );
    const isLoading = ref(false);

    // 对话列表
    const conversations = ref<conversation[]>([
      {
        id: "1",
        title: "日常问候",
        messages: [],
        createdAt: Date.now(),
      },
    ]);

    // 当前对话ID
    const currentConversationId = ref("1");

    // 获取当前对话
    const currentConversation = computed(() => {
      return conversations.value.find(
        (conv) => conv.id === currentConversationId.value
      );
    });

    // 添加消息到当前对话
    const addMessage = (message: any) => {
      if (currentConversation.value) {
        currentConversation.value.messages.push({
          id: Date.now(),
          timestamp: new Date().toISOString(),
          ...message,
        });
      }
    };

    const updateLastMessage = (
      content?: string,
      reasoning_content?: string,
      completion_tokens?: number,
      speed?: number
    ) => {
      if (currentConversation.value?.messages.length > 0) {
        const lastMessage =
          currentConversation.value?.messages[
            currentConversation.value.messages.length - 1
          ];
        lastMessage.content = content;
        lastMessage.reasoning_content = reasoning_content;
        lastMessage.completion_tokens = completion_tokens;
        lastMessage.speed = speed;
      }
    };

    const getLastMessage = () => {
      if (currentConversation.value?.messages.length > 0) {
        return currentConversation.value?.messages[
          currentConversation.value.messages.length - 1
        ];
      }
      return null;
    };

    // 更新对话标题
    const updateConversationTitle = (
      conversationId: string,
      newTitle: string
    ) => {
      const conversation = conversations.value.find(
        (c) => c.id === conversationId
      );
      if (conversation) {
        conversation.title = newTitle;
      }
    };

    // 创建新对话
    const createConversation = () => {
      const newConversation = {
        id: Date.now().toString(),
        title: "日常问候",
        messages: [],
        createdAt: Date.now(),
      };
      conversations.value.unshift(newConversation);
      currentConversationId.value = newConversation.id;
    };

    // 删除对话
    const deleteConversation = (conversationId: string) => {
      const index = conversations.value.findIndex(
        (c) => c.id === conversationId
      );
      if (index !== -1) {
        conversations.value.splice(index, 1);

        // 如果删除后没有对话了，创建一个新对话
        if (conversations.value.length === 0) {
          createConversation();
        }
        // 如果删除的是当前对话，切换到第一个对话
        else if (conversationId === currentConversationId.value) {
          currentConversationId.value = conversations.value[0]?.id || "";
        }
      }
    };

    return {
      currentMessages,
      isLoading,
      currentConversation,
      currentConversationId,
      conversations,
      createConversation,
      addMessage,
      getLastMessage,
      updateLastMessage,
      updateConversationTitle,
      deleteConversation,
    };
  },
  {
    persist: true,
  }
);
