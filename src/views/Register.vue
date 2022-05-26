<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card class="auth-card">
        <!-- logo -->
        <v-card-title class="d-flex align-center justify-center py-7">
          <router-link to="/" class="d-flex flex-column align-center">
            <v-img
              :src="require('@/assets/images/logos/logo.svg')"
              max-height="30px"
              max-width="30px"
              alt="logo"
              contain
              eager
              class="app-logo me-3"
            ></v-img>
            <h2 class="text-2xl font-weight-semibold">Awal Telecom</h2>
          </router-link>
        </v-card-title>

        <!-- title -->
        <v-card-text>
          <p class="text-2xl font-weight-semibold text--primary mb-2">Register user 🚀</p>
        </v-card-text>
        <!-- login form -->
        <v-card-text>
          <v-form ref="registerForm" @submit.prevent="handleFormSubmit">
            <v-text-field
              v-model="username"
              outlined
              label="Name"
              :error-messages="errorMessages.username"
              :rules="[validators.required, validators.alphaValidator]"
              placeholder="Name"
              hide-details="auto"
              class="mb-6"
            ></v-text-field>

            <v-text-field
              v-model="email"
              outlined
              :error-messages="errorMessages.email"
              :rules="[validators.required, validators.emailValidator]"
              label="Email"
              placeholder="Email"
              hide-details="auto"
              class="mb-6"
            ></v-text-field>

            <v-text-field
              v-model="password"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              label="Password"
              :error-messages="errorMessages.password"
              placeholder="Password"
              :rules="[validators.required, validators.passwordValidator]"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              hide-details="auto"
              class="mb-6"
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>

            <v-text-field
              v-model="confirmPassword"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              label="Password"
              :error-messages="errorMessages.password"
              placeholder="Password"
              :rules="[validators.required, validators.passwordValidator]"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              hide-details="auto"
              class="mb-6"
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>
            <v-select
              v-model="roleItem"
              :items="roleItems"
              item-text="name"
              item-value="id"
              label="Role"
              outlined
              dense
              hide-details
              class="mb-2"
            ></v-select>
            <v-btn block color="primary" type="submit" class="mt-6"> Sign Up </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
// eslint-disable-next-line object-curly-newline
import { ref } from '@vue/composition-api'
import { required, emailValidator, passwordValidator, alphaValidator } from '@/@core/utils/validation'
import axios from '@/plugins/axios'
import { useRouter } from '@/@core/utils'

export default {
  setup() {
    // Template Refs
    const roleItem = ''
    const registerForm = ref(null)

    const { router } = useRouter()

    const isPasswordVisible = ref(false)
    const username = ref('')
    const email = ref('')
    const role = ref('')
    const password = ref('')
    const confirmPassword = ref('')
    const errorMessages = ref([])

    // const handleFormSubmit = () => {
    //   const isFormValid = registerForm.value.validate()
    //   console.log(isFormValid)
    //   if (!isFormValid) return

    // }

    return {
      roleItem,
      isPasswordVisible,
      username,
      email,
      role,
      password,
      confirmPassword,
      errorMessages,
      // handleFormSubmit,
      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
      },
      validators: {
        required,
        emailValidator,
        passwordValidator,
        alphaValidator,
      },
      roleItems: {},

      // themeConfig

      // Template Refs
      registerForm,
    }
  },
  mounted() {
    const uri = 'identity/Account/GetRoles'
    axios.get(uri).then(response => {
      this.roleItems = response.data
      console.log('roles', this.roleItems)
    })
  },
  methods: {
    async addCustomer() {
      axios
        .post('CreateUser', {
          name: this.username.value,
          email: this.email.value,
          phoneNumber: 1237,
          role: this.roleItem,
          password: this.password.value,
          confirmPassword: this.password.value,
        })
        .then(res => {
          console.log(res)
          this.router.push('/')

          return res
        })
        .catch(error => {
          // TODO: Next Update - Show notification
          console.error('Oops, Unable to Register!')
          console.log('error :>> ', error.response)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/preset/pages/auth.scss';
</style>
