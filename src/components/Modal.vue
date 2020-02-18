<template>
    <div class="modal" v-on:click="collapseModal()">
        <div class="errorBox">
            <p>Opps... No README found for this repository!</p>
        </div>
        <button id="cancel" v-on:click="collapseModal()">Return</button>
    </div>
</template>

<script>
export default {
  name: 'modal',
  methods: {
    collapseModal: function () {
      this.$emit('clicked')
    }
  }
}
</script>

<style scoped>
.modal {
    z-index: 1;
    left: 0;
    top: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: var(--shadow);
    display: block;
    margin: 0 auto;
}

h2 {
    font-size: calc(15px + 1.1vw)
}

.errorBox {
    margin: 20vh 20vw 2vh 20vw;
    padding: 2vh 4vw 2vh 4vw;
    width: auto;
    height: auto;
    background-color: var(--light-cream);
    border-radius: 10px;
}

button#cancel {
    font-size: calc(9px + 1vw);
    padding: 1vh 2vw 1vh 2vw;
    height: auto;
    background-color: var(--light-green);
    color: var(--dark-grey);
    border: none;
    border-radius: 5px;
}

</style>
