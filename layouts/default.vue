<template>
  <div id="layout-default">
    <div id="path">
      今のページ: {{ route.path }}
    </div>
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { useRouteStore } from '@/store/route'

const route = useRouteStore()

</script>
