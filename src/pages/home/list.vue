<template lang="pug">

.container
  .header
    .welcome 欢迎 {{title}}
    .items
      .item
        .item_diamand 999
        .item_red_packet 999
  .line
  .category_games
    .category_game
      .title
        .title
        .img


  .topic-wrap
    topicItem(
      v-for="topic of topics",
      :topic="topic"
      :key="topic.id")

</template>

<script>
import wx from 'wx'
import { mapState, mapActions } from 'vuex'
import topicItem from '@/components/topic-item'

export default {
  components: {
    topicItem
  },
  computed: {
    ...mapState([
      'topics'
    ])
  },
  mounted () {
    this.refresh()
  },
  onPullDownRefresh () {
    this.refresh()
  },
  onReachBottom () {
    this.loadmore()
  },
  methods: {
    ...mapActions([
      'getTopics'
    ]),
    async refresh () {
      await this.getTopics(true)
      wx.stopPullDownRefresh()
    },
    loadmore () {
      this.getTopics()
    }
  }
}
</script>

<style lang="less">
</style>
