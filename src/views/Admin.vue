<template>
  <div class="p-4">
    <form @submit.prevent="formik.handleSubmit">
      <text-input
        id="tickName"
        label="Tick Name"
        type="text"
        v-model="formik.values.tickName"
        :error="formik.errors.tickName" />
      <text-area-input
        id="ticketDescription"
        label="Ticket Description"
        v-model="formik.values.ticketDescription"
        :error="formik.errors.ticketDescription" />
      <number-input
        id="stringCount"
        label="String Count"
        v-model="formik.values.stringCount"
        :error="formik.errors.stringCount" />
      <number-input
        id="price"
        label="Price"
        v-model="formik.values.price"
        :error="formik.errors.price" />
      <checkbox-input label="VIP" v-model="formik.values.isVip" />
      <button type="submit" class="bg-indigo-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { useFormik } from "formik";
import * as yup from "yup";
import TextInput from "../components/TextInput.vue";
import TextAreaInput from "../components/TextAreaInput.vue";
import CheckboxInput from "../components/CheckboxInput.vue";

export default {
  components: {
    TextInput,
    TextAreaInput,
    NumberInput,
    CheckboxInput,
  },
  setup() {
    // ... (Same setup code as in the previous example)
  },
};
</script>

<style scoped>
/* Add your custom CSS here if needed */
</style>
