<template>
    <div class="loginForm w-80 mt-5">
        <h1 class="w-50 mx-auto text-center">Login to the CRM</h1>
        <form @submit.prevent="onSubmit" class="w-25 mx-auto">
            <div class="my-4">
                <input type="text" v-model="loginForm.name" class="form-control" placeholder="Account" id="accounName">
            </div>
            <div class="mb-4">
                <input type="password" v-model="loginForm.password" class="form-control" placeholder="Password"
                    id="exampleInputPassword1">
            </div>
            <button type="submit" class="btn btn-primary w-100">Submit</button>
        </form>
    </div>
</template>
    
<script>

export default {
    data: function () {
        return {
            loginForm: {
                name: "",
                password: ""
            }
        }
    },
    methods: {


        onSubmit: function () {
            console.log(this.loginForm);
        }
    }
};
</script>
    