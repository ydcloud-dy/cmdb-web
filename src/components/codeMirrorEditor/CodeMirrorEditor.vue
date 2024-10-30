<template>
  <div ref="editor" className="editor"></div>
</template>

<script>
import {EditorView, basicSetup} from '@codemirror/basic-setup';
import {EditorState} from '@codemirror/state';
import {keymap} from '@codemirror/view';
import {defaultKeymap} from '@codemirror/commands';
import {python} from '@codemirror/lang-python'; // Python 支持
import {javascript} from '@codemirror/lang-javascript'; // 作为 Shell 的替代
import {oneDark} from '@codemirror/theme-one-dark'; // 黑色主题

export default {
  props: {
    language: {
      type: String,
      default: 'shell', // 默认语言是 shell
    },
    value: {
      type: String,
      default: '',
    },
  },
  emits: ['update:value'],
  mounted() {
    // 根据语言选择高亮语法
    const languageExtension = this.language === 'python' ? python() : javascript({typescript: false});

    this.editor = new EditorView({
      state: EditorState.create({
        doc: this.value,
        extensions: [
          basicSetup,
          languageExtension,
          oneDark,
          keymap.of(defaultKeymap),
          EditorView.updateListener.of((v) => {
            if (v.docChanged) {
              this.$emit('update:value', v.state.doc.toString());
            }
          }),
        ],
      }),
      parent: this.$refs.editor,
    });
  },
  beforeUnmount() {
    if (this.editor) {
      this.editor.destroy();
    }
  },
};
</script>

<style scoped>
.editor {
  border: 1px solid #555;
  border-radius: 4px;
  height: 300px;
  background-color: #2d2d2d; /* 黑色背景 */
  color: white;
}
</style>
