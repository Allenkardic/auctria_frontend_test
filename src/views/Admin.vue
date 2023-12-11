<template>
  <div class="flex items-center justify-center">
    <div class="w-full pt-10 pl-4 pr-4 md:pl-0 md:pr-0 sm:w-60">
      <div class="pb-8 text-primary font-bold text-xl text-">
        Create a new ticket
      </div>
      <form @submit.prevent="handleSubmit">
        <TextInput
          label="Ticket Name"
          name="ticketName"
          v-model="formData.ticketName"
          :error="errors.ticketName" />

        <Textarea
          label="Description"
          name="description"
          v-model="formData.description"
          :error="errors.description"
          placeholder="Enter description" />

        <TextInput
          label="Price"
          type="number"
          name="price"
          v-model="formData.price"
          :error="errors.price" />

        <TextInput
          label="Quantity count"
          type="number"
          name="count"
          v-model="formData.count"
          :error="errors.count" />

        <CheckboxInput
          label="Accept Terms"
          name="isVip"
          v-model="formData.isVip" />

        <div class="flex justify-center mt-10 w-full">
          <Button type="secondary">Submit</Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import * as yup from "yup";
import { defineComponent, reactive } from "vue";
import { useForm, useField } from "vee-validate";
import { useStore } from "vuex";
import { v4 as uuidv4 } from "uuid";

import router from "../router";
import TextInput from "../components/TextInput.vue";
import CheckboxInput from "../components/CheckboxInput.vue";
import Textarea from "../components/Textarea.vue";
import Button from "../components/Button.vue";

export default defineComponent({
  components: {
    TextInput,
    Textarea,
    CheckboxInput,
    Button,
  },
  setup() {
    const store = useStore();

    const { handleSubmit, errors } = useForm({
      validationSchema: yup.object({
        ticketName: yup
          .string()
          .required("Ticket name is required")
          .min(3, "Ticket name must be at least 3 characters long"),
        price: yup.number().required("Price is required"),
        count: yup.number().required("Product count is required"),
        description: yup.string().required("Description is required"),

        // Add more validation rules as needed
      }),
    });

    const { value: ticketName } = useField("ticketName");
    const { value: price } = useField("price");
    const { value: description } = useField("description");
    const { value: count } = useField("count");
    const { value: isVip } = useField("isVip");

    const formData = reactive({
      ticketName,
      price,
      count,
      description,
      isVip: isVip,
    });

    const submitForm = (formValues: any) => {
      const { ticketName, price, count, description, isVip } = formValues;
      const payload = {
        id: uuidv4(),
        ticketName,
        description,
        price,
        count,
        isVip: isVip === undefined ? false : isVip,
      };

      // add this product to the list of products
      store.dispatch("addProduct", payload);

      router.push("/");
    };

    return {
      formData,
      handleSubmit: handleSubmit(submitForm),
      errors,
    };
  },
});
</script>
