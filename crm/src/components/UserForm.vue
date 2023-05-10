<template>
    <div class="contactForm w-80 mt-4">
        <h1 class="w-50 mx-auto text-center">Create User</h1>
        <form class="w-50 mx-auto" @submit.prevent="onSubmit" id="contact">
            <div class="my-4">
                <input type="text" v-model="userForm.name" class="form-control" placeholder="Name" id="contactName" />
            </div>
            <div class="my-4">
                <input type="text" v-model="userForm.password" class="form-control" placeholder="Password"
                    id="contactEmail" />
            </div>
            <div class="my-4">
                <select v-model="userForm.role" class="form-select">
                    <option disabled value="">Select Roles</option>
                    <option v-for="option in options" v-bind:value="option.value">
                        {{ option.text }}
                    </option>
                </select>
            </div>
            <div class="d-flex my-4 justify-content-between">

                <div class="form-check " v-for="permission in permissions">
                    <input class="form-check-input" v-model="userForm.permissions" type="checkbox" v-bind:value="permission"
                        id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        {{ permission }}
                    </label>
                </div>
            </div>

            <button type="submit" class="btn btn-primary w-100">{{ currentAction }}</button>
        </form>
    </div>
</template>
     
<script>
import { getDetail, add, update } from "@/service";

export default {
    props: {
        action: String,
    },
    data: function () {
        return {
            userForm: {
                name: "",
                password: "",
                role: "",
                permissions: [],
            },
            currentAction: this.action,
            options: [
                { text: 'One', value: '0' },
                { text: 'Two', value: '1' },
                { text: 'Three', value: '2' }

            ],
            permissions: [
                "Manage User", "Manage Company", "Manage USer"
            ],
            id: "",
            user: null
        }
    },
    watch: {
        currentAction: {
            handler(newData) {
                console.log(newData)
                if (newData === "Update") {
                    this.id = this.$route.params.id;
                    // console.log(newData);
                    this.getDetailUser();
                }
            },
            // force eager callback execution
            immediate: true
        }

    },
    methods: {
        updateForm: function (data) {
            console.log(this.user);
            for (const property in data) {
                this.userForm[property] = this.user[property];
            }

        },

        getDetailUser: function () {
            getDetail("users", this.id).then(item => {
                console.log(item);
                this.User = item;
                this.updateForm(this.user)
            })
        },
        addUser: function (data) {
            add("users", data).then(item => {
                console.log(item);
            })
        },
        updateUser: function (data) {
            update("users", data, this.id).then(item => {
                console.log(item);
            })
        },



        onSubmit: function () {
            if (this.currentAction == "Update") {
                this.updateUser(this.userForm)
            }
            else {
                this.addUser(this.userForm)
            }
        }
    }
};
</script>
     