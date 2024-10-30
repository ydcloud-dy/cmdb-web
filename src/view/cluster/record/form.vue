<template>
  <div>
    <div ref="player" />
    <div class="dialog-footer " align="center">
      <el-button size="small" type="primary" link icon="VideoPlay" class="VideoPlay" @click="handlePlay">播放</el-button>
      <el-button size="small" type="primary" link icon="VideoPause" @click="handlePause">暂停</el-button>
    </div>
  </div>
</template>
<script>
import * as AsciinemaPlayer from 'asciinema-player'
import 'asciinema-player/dist/bundle/asciinema-player.css'
export default {
  name: 'AsciinemaPlayer',
  props: {
    data: {
      type: String,
      default() {
        return ''
      },
    },
  },
  data() {
    return {
      player: null
    }
  },
  mounted() {
    this.initAsciinema()
  },
  methods: {
    initAsciinema() {
      // 创建 Asciinema Player 实例
      this.player = AsciinemaPlayer.create(
        'data:text/plain;base64,' + this.data,
        this.$refs.player,
        {
          loop: true,
          // theme: 'solarized-dark'
          // terminalFontFamily: 'Bitstream Vera Sans Mono'
          // terminalLineHeight: 2,
          terminalFontSize: 'big'
        }
      )

      // 可以在此设置其他配置选项，如播放速度等
      this.player.play()
    },
    handlePlay() {
      this.player.play()
    },
    handlePause() {
      this.player.pause()
    }
  }
}
</script>
