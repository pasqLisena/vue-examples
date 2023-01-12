<template>
  <span>{{myMessage}}</span>
</template>

<script>
  export default {
      props: {
         'myMessage': {
           type: String,
           required: true
          }
      }
  }
</script>
