<template>
  <div id="layout-hoge">
    <div id="path">
      今のページ: {{ route.path }} & hoge
    </div>
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { useRouteStore } from '@/store/route'

const route = useRouteStore()

</script>
