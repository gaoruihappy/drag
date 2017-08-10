
<template>
  <div class="hello">
    <div class="drag">
    <draggable v-model="myArray" :options="{group:'people'}" @start="drag=true" @end="drag=false">
       <div v-for="element in myArray">{{element.name}}</div>
    </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import breadcrumb from './breadcrumb'
import button from './button'
export default {
  name: 'hello',
  components: {
            draggable,
        },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      myArray:[breadcrumb,button]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
