<template>
<v-layout row>
    <v-dialog v-model="loading" persistent fullscreen>
        <v-container fill-height>
          <v-layout row justify-center align-center>
            <v-progress-circular indeterminate :size="70" :width="7" color="secondary"></v-progress-circular>
          </v-layout>
        </v-container>
    </v-dialog>
</v-layout>

</template>
<script>
export default {
  props: ['loading'],
  data () {
    return {

    }
  }
}
</script>

