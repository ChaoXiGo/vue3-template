<template>
  <image src="../../static/logo.png" mode="scaleToFill" />
  <u-button type="primary" text="确定" @tap="onclick()"></u-button>
</template>

<script setup lang="ts">
import { useMemberStore } from '@/stores/modules/member'
const member = useMemberStore()

member.setProfile('测试pinia')
const onclick = () => {
  console.log('~~~~')

  member.clearProfile()
}
</script>

<style scoped lang="scss"></style>
