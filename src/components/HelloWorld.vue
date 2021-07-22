<template>
    <ul>
        <li>
            {{ msg }}
        </li>
    </ul>
</template>

<script>
export default {
  name: 'list',
  props: ['msg']
}
</script>
