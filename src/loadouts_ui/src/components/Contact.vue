<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
         <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Send us a message:" label-for="input-3">
       <b-form-textarea
      id="textarea"
      v-model="form.message"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <!-- Shouldn't need reset button!! -->
      <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
    </b-form>
    <!-- To display user-entered form data -->
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
  export default {
    name: 'Contact',
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        this.form.email = ''
        this.form.name = ''
        this.form.message = ''
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    //   onReset(event) {
    //     event.preventDefault()
    //     // Reset form values
    //     this.form.email = ''
    //     this.form.name = ''
    //     this.form.message = ''

    //     this.show = false
    //     this.$nextTick(() => {
    //       this.show = true
    //     })
    //   }
    }
  }
</script>

<style scoped>
/* div {
  border-top: 1px solid black;
} */
</style>