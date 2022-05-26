<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card class="auth-card">
        <!-- logo -->
        <v-card-title class="d-flex align-center justify-center py-7">
          <router-link to="/" class="d-flex align-center">
            <v-img
              :src="require('@/assets/images/logos/logo.svg')"
              max-height="30px"
              max-width="30px"
              alt="logo"
              contain
              eager
              class="app-logo me-3"
            ></v-img>

            <h2 class="text-2xl font-weight-semibold">AWAL Telecom</h2>
          </router-link>
        </v-card-title>

        <!-- title -->

        <!-- login form -->
        <v-card-text>
          <v-form ref="loginForm" @submit.prevent="handleFormSubmit">
            <v-text-field
              v-model="email"
              outlined
              label="Email"
              placeholder="Email"
              hide-details="auto"
              class="mb-6"
              :error-messages="errorMessages.email"
              :rules="[validators.required, validators.emailValidator]"
            ></v-text-field>

            <v-text-field
              v-model="password"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              label="Password"
              placeholder="············"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              hide-details
              :error-messages="errorMessages.password"
              :rules="[validators.required]"
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>

            <div class="d-flex align-center justify-space-between flex-wrap">
              <v-checkbox label="Remember Me" hide-details class="me-3 mt-1"> </v-checkbox>

              <!-- forgot link -->
              <router-link :to="{ name: 'auth-forgot-password' }" class="mt-1"> Forgot Password? </router-link>
            </div>

            <v-btn block color="primary" class="mt-6" type="submit"> Login </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'
import axios from '@/plugins/axios'
import { required, emailValidator } from '@/@core/utils/validation'
import { useRouter } from '@/@core/utils'

export default {
  setup() {
    // Template Ref
    const loginForm = ref(null)

    const { router } = useRouter()

    const isPasswordVisible = ref(false)

    const email = ref('')
    const password = ref('')
    const errorMessages = ref([])

    const handleFormSubmit = () => {
      const isFormValid = loginForm.value.validate()

      if (!isFormValid) return
      console.log(email)
      axios
        .post('http://127.0.0.1:8000/api/auth/login', { email: email.value, password: password.value })
        .then(response => response)
        .then(res => {
          // console.log(res)
          router.push('/')

          return res
        })
        .catch(error => {
          // TODO: Next Update - Show notification
          console.error('Oops, Unable to login!')
          console.log('error :>> ', error.response)
        })
    }

    return {
      handleFormSubmit,

      isPasswordVisible,
      email,
      password,
      errorMessages,
      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
      },
      validators: {
        required,
        emailValidator,
      },

      // themeConfig

      // Template Refs
      loginForm,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/preset/pages/auth.scss';
</style>
