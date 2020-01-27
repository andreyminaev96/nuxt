<template>
   <el-form 
        :model="controls" 
        :rules="rules" 
        ref="form"
        @submit.native.prevent="onSubmit"
    >
        <h2>Create User</h2>
        <el-form-item label="Login" prop="login">
            <el-input v-model.trim="controls.login" />
        </el-form-item>
        <div class="mb2">
            <el-form-item label="Password" prop="password">
                <el-input v-model.trim="controls.password" type="password" />
            </el-form-item> 
        </div>
        <el-form-item>
            <el-button 
                type="primary"
                native-type="submit"
                :loading="loading"
            >
                Create
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        layout: 'admin',
        middleware: ['admin-auth'],
        head: {
            title: `Create User | ${process.env.appName}`
        },
        data() {
            return {
                loading: false,
                controls: {
                    login: '',
                    password: ''
                },
                rules: {
                    login: [
                        { required: true, message: 'Please input Login', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please input Password', trigger: 'blur' },
                        { min: 6, message: 'password must have min 6 length'}
                    ]
                }
            }
        },
        methods: {
            onSubmit() {
                this.$refs.form.validate(async valid => {
                    if (valid) {
                        console.log('valid')
                        this.loading = true;
                        try {
                            const formData = {
                                login: this.controls.login,
                                password: this.controls.password
                            }

                            await this.$store.dispatch('auth/createUser', formData);
                            this.$message.success('New User added')
                            this.controls.login = '';
                            this.controls.password = '';
                            this.loading = false;

                        } catch (e) {
                            this.loading = false
                        }
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    form {
        width: 600px;
    }
</style>