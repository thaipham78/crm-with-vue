<template>
    <div class="companyForm w-80 mt-4">
        <h1 class="w-50 mx-auto text-center">{{ action }} company</h1>
        <form @submit.prevent="onSubmit" class="w-50 mx-auto" id="company">
            <div class="my-4">
                <input type="text" v-model="companyForm.name" class="form-control" placeholder="Name" id="companyName" />
            </div>
            <div class="mb-4">
                <input type="text" v-model="companyForm.phone" class="form-control" placeholder="Phone" id="companyPhone" />
            </div>
            <div class="my-4">
                <input type="text" v-model="companyForm.email" class="form-control" placeholder="Email" id="companyEmail" />
            </div>
            <button type="submit" class="btn btn-primary w-100">{{ action }}</button>
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
            companyForm: {
                name: "",
                phone: "",
                email: "",
            },
            currentAction: this.action,
            id: "",
            company: null
        }
    },
    watch: {
        currentAction: {
            handler(newData) {
                console.log(newData)
                if (newData === "Update") {
                    this.id = this.$route.params.id;
                    console.log(newData);
                    this.getDetailCompany();
                    // this.updateForm()
                }
            },
            // force eager callback execution
            immediate: true
        }

    },
    methods: {
        updateForm: function (data) {
            console.log(this.company);
            for (const property in data) {
                this.companyForm[property] = this.company[property];
            }
          
        },

        getDetailCompany: function () {
            getDetail("companies", this.id).then(item => {
                console.log(item);
                this.company = item;
                this.updateForm( this.company )
            })
        },
        addCompany: function (data) {
            add("companies", data).then(item => {
                console.log(item);
            })
        },
        updateCompany: function (data) {
            update("companies", data, this.id).then(item => {
                console.log(item);
            })
        },



        onSubmit: function () {
            if (this.currentAction == "Update") {
                this.updateCompany(this.companyForm)
            }
            else {
                this.addCompany(this.companyForm)
            }
        }
    },
    mounted: function () {

    }
};
</script>
    