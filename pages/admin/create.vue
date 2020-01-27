<template>
    <el-form 
            :model="controls" 
            :rules="rules" 
            ref="form"
            @submit.native.prevent="onSubmit"
    >
    <h3 class="mb">Create new Post</h3>
        <el-form-item label="Enter Title" prop="title">
            <el-input v-model="controls.title" />
        </el-form-item>
        <el-form-item label="Text in .md or .html format" prop="text">
            <el-input type="textarea" resize="none" :rows="10" v-model="controls.text" />
        </el-form-item>

        <el-button class="mb" type="success" plain @click="previewDialog = true">Preview</el-button>

        <el-dialog title="Pre Preview" :visible.sync="previewDialog">
            <div :key="controls.text">
                <vue-markdown>{{controls.text}}</vue-markdown>
            </div>
        </el-dialog>

        <el-upload
        class="mb"
        drag
        ref="upload"
        :on-change="handleImageChange"
        :auto-upload="false"
        action="https://jsonplaceholder.typicode.com/posts/">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
            <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
        </el-upload>
        
        <el-form-item>
            <el-button 
                type="primary"
                native-type="submit"
                round
                :loading="loading"
            >
                Creat Post
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        layout: 'admin',
        middleware: ['admin-auth'],
        head: {
            title: `New Post | ${process.env.appName}`
        },
        data() {
            return {
                img: null,
                previewDialog: false,
                loading: false,
                controls: {
                    text: '',
                    title: ''
                },
                rules: {
                    text: [
                        { required: true, message: 'Text cannot be empty ', trigger: 'blur' }
                    ],
                    title: [
                        { required: true, message: 'Title cannot be empty ', trigger: 'blur' }
                    ],
                }
            }
        },
        methods: {
            onSubmit() {
                this.$refs.form.validate(async valid => {
                    if (valid && this.img) {
                        this.loading = true;
                        const formData = {
                            title: this.controls.title,
                            text: this.controls.text,
                            image: this.img
                        }
                        try {
                            await this.$store.dispatch('post/create', formData)
                            this.controls.text = '';
                            this.controls.title = '';
                            this.img = null;
                            this.$refs.upload.clearFiles()
                            this.$message.success('Post Created!');
                            this.loading = false;
                        } catch (e) {} finally {
                            this.loading = false;
                        }
                    } else {
                        this.$message.warning('The form is not valid')
                    }
                })
            },
            handleImageChange(file, fileList) {
               this.img = file.raw
            }
        }
    }
</script>

<style lang="scss" scoped>
    form {
        width: 600px
    }
</style>
