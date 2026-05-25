<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'

const props = defineProps<{ lang?: string }>()

const open = ref(false)
const loading = ref(false)
const input = ref('')
const bottomRef = ref<HTMLElement | null>(null)
const inputRef = ref<HTMLInputElement | null>(null)

const initMsg = () =>
  props.lang === 'es'
    ? '¡Hola! Soy el asistente de David. ¿En qué te puedo ayudar?'
    : "Hi! I'm David's assistant. What would you like to know?"

const messages = ref([{ role: 'assistant', content: initMsg() }])

const SUGGESTIONS = ["What's your main stack?", 'Tell me about UMI', 'Are you available for hire?']

function renderMd(text: string) {
  return text
    .split('\n')
    .map((line) => {
      const bullet = line.match(/^[\*\-]\s+(.*)/)
      if (bullet) return `<li>${inlineMd(bullet[1] ?? '')}</li>`
      if (line.trim() === '') return '<br>'
      return `<p>${inlineMd(line)}</p>`
    })
    .join('')
    .replace(/(<li>.*<\/li>)+/g, (m) => `<ul>${m}</ul>`)
}

function inlineMd(str: string) {
  return str.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
}

async function scrollBottom() {
  await nextTick()
  bottomRef.value?.scrollIntoView({ behavior: 'smooth' })
}

watch(messages, scrollBottom)

watch(open, async (val) => {
  if (val) {
    await nextTick()
    setTimeout(() => inputRef.value?.focus(), 100)
  }
})

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') open.value = false
}
onMounted(() => document.addEventListener('keydown', onKey))
onUnmounted(() => document.removeEventListener('keydown', onKey))

async function send(text: string) {
  const content = text.trim()
  if (!content || loading.value) return
  input.value = ''
  const next = [...messages.value, { role: 'user', content }]
  messages.value = next
  loading.value = true
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: next }),
    })
    const data = await res.json()
    messages.value = [...next, { role: 'assistant', content: data.text }]
  } catch {
    messages.value = [...next, { role: 'assistant', content: 'Something went wrong. Try again.' }]
  } finally {
    loading.value = false
  }
}

function onSubmit(e: Event) {
  e.preventDefault()
  send(input.value)
}
</script>

<template>
  <button class="chat-fab" @click="open = !open" aria-label="Open chat">
    <svg v-if="open" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
      <line x1="3" y1="3" x2="15" y2="15"/><line x1="15" y1="3" x2="3" y2="15"/>
    </svg>
    <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  </button>

  <div v-if="open" class="chat-panel" @wheel.stop>
    <div class="chat-header">
      <div class="chat-header-info">
        <strong>David's AI Assistant</strong>
        <span>Ask me anything about his work</span>
      </div>
    </div>

    <div class="chat-messages">
      <div
        v-for="(m, i) in messages"
        :key="i"
        :class="['chat-msg', `chat-msg--${m.role}`]"
      >
        <span v-if="m.role === 'assistant'" v-html="renderMd(m.content)" />
        <span v-else>{{ m.content }}</span>
      </div>
      <div v-if="loading" class="chat-msg chat-msg--assistant chat-typing">
        <span /><span /><span />
      </div>
      <div ref="bottomRef" />
    </div>

    <div v-if="messages.length === 1" class="chat-suggestions">
      <button
        v-for="s in SUGGESTIONS"
        :key="s"
        class="chat-suggestion"
        @click="send(s)"
      >{{ s }}</button>
    </div>

    <form class="chat-form" @submit="onSubmit">
      <input
        ref="inputRef"
        class="chat-input"
        v-model="input"
        :placeholder="lang === 'es' ? 'Escribe aquí...' : 'Ask anything...'"
        :disabled="loading"
      />
      <button class="chat-send" type="submit" :disabled="loading || !input.trim()">→</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.chat-fab {
  position: fixed;
  bottom: 28px;
  right: 28px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--color-accent-400, var(--color-orange-400));
  color: var(--color-accent-text-400, #fff);
  border: none;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 9999;
  transition: background .1s ease-in-out, transform .2s var(--ease-power2-out);

  &:hover {
    background: var(--color-hover, var(--color-black-400));
    color: var(--color-hover-text, #fff);
    transform: scale(1.06);
  }
  &:active { transform: scale(0.95); }
}

.chat-panel {
  position: fixed;
  bottom: 96px;
  right: 28px;
  width: 360px;
  max-height: 520px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(45, 42, 36, 0.18);
  background: #fff;
  z-index: 9998;
  font-family: inherit;

  @media (max-width: 480px) {
    width: calc(100vw - 32px);
    right: 16px;
    bottom: 90px;
  }
}

.chat-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 18px;
  background: var(--color-accent-400, var(--color-orange-400));
  color: var(--color-accent-text-400, #fff);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0;

  &-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(255,255,255,0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    flex-shrink: 0;
  }

  &-info {
    display: flex;
    flex-direction: column;
    gap: 1px;
    line-height: 1;

    span {
      font-size: 11px;
      font-weight: 400;
      opacity: .85;
    }
  }
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: var(--color-background-400);
}

.chat-msg {
  max-width: 82%;
  padding: 10px 14px;
  font-size: 13.5px;
  line-height: 1.55;
  word-break: break-word;

  &--user {
    align-self: flex-end;
    background: var(--color-accent-400, var(--color-orange-400));
    color: var(--color-accent-text-400, #fff);
    font-weight: 600;
    border-radius: 18px 18px 4px 18px;
  }

  &--assistant {
    align-self: flex-start;
    background: #fff;
    color: var(--color-text-400);
    border-radius: 18px 18px 18px 4px;
    box-shadow: 0 2px 8px rgba(45,42,36,0.08);

    :deep(p), :deep(ul), :deep(li) {
      font-size: 13.5px;
      line-height: 1.55;
      margin: 0 0 4px;
    }
    :deep(ul) { padding-left: 16px; list-style: disc; }
    :deep(p:last-child), :deep(ul:last-child) { margin-bottom: 0; }
    :deep(strong) { font-weight: 700; }
  }
}

.chat-typing {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 12px 14px;

  span {
    width: 7px;
    height: 7px;
    background: var(--color-gray-400);
    border-radius: 50%;
    animation: cv3d-bounce .9s infinite ease-in-out;
  }
  span:nth-child(2) { animation-delay: .15s; }
  span:nth-child(3) { animation-delay: .3s; }
}

@keyframes cv3d-bounce {
  0%, 60%, 100% { transform: translateY(0); }
  30% { transform: translateY(-6px); }
}

.chat-suggestions {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 4px 16px 12px;
  background: var(--color-background-400);
}

.chat-suggestion {
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 600;
  background: #fff;
  border: 1.5px solid var(--color-beige-700);
  color: var(--color-text-400);
  border-radius: 20px;
  cursor: pointer;
  transition: background .15s, border-color .15s, color .15s;

  &:hover {
    background: var(--color-accent-400, var(--color-orange-400));
    border-color: var(--color-accent-400, var(--color-orange-400));
    color: var(--color-accent-text-400, #fff);
  }
}

.chat-form {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  background: #fff;
  border-top: 1px solid var(--color-beige-600);
}

.chat-input {
  flex: 1;
  padding: 9px 14px;
  font-size: 13px;
  background: var(--color-background-400);
  border: 1.5px solid var(--color-beige-700);
  border-radius: 20px;
  outline: none;
  color: var(--color-text-400);
  font-family: inherit;
  transition: border-color .15s;

  &:focus { border-color: var(--color-cyan-400); }
  &::placeholder { color: var(--color-gray-400); }
}

.chat-send {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--color-accent-400, var(--color-orange-400));
  color: var(--color-accent-text-400, #fff);
  border: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: background .15s, transform .1s;

  &:hover:not(:disabled) {
    background: var(--color-hover, var(--color-black-400));
    transform: scale(1.05);
  }
  &:disabled { opacity: .35; cursor: default; }
}
</style>
