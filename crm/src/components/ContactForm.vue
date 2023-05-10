<template>
    <div class="contactForm w-80 mt-4">
        <h1 class="w-50 mx-auto text-center">{{ currentAction }} contact</h1>
        <form class="w-50 mx-auto" @submit.prevent="onSubmit" id="contact">
            <div class="my-4">
                <input type="text" v-model="contactForm.first_name" class="form-control" placeholder="Name" id="contactName" />
            </div>
            <div class="my-4">
                <input type="text" v-model="contactForm.last_name" class="form-control" placeholder="Name" id="contactName" />
            </div>
            <div class="my-4">
                <select v-model="contactForm.company_id" class="form-select">
                    <option disabled value="">Select Contact</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div class="mb-4">
                <input type="text" v-model="contactForm.phone" class="form-control" placeholder="Phone" id="contactPhone" />
            </div>
            <div class="my-4">
                <input type="text" v-model="contactForm.email" class="form-control" placeholder="Email" id="contactEmail" />
            </div>
            <button type="submit" class="btn btn-primary w-100">
                {{ currentAction }}
            </button>
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
            contactForm: {
                first_name: "",
                last_name: "",
                phone: "",
                email: "",
                company_id: ""
            },
            currentAction: this.action,
            id: "",
            contact: null
        }
    },
    watch: {
        currentAction: {
            handler(newData) {
                console.log(newData)
                if (newData === "Update") {
                    this.id = this.$route.params.id;
                    console.log(newData);
                    this.getDetailContact();
                    // this.updateForm()
                }
            },
            // force eager callback execution
            immediate: true
        }

    },
    methods: {
        updateForm: function (data) {
            console.log(this.contact);
            for (const property in data) {
                this.contactForm[property] = this.contact[property];
            }

        },

        getDetailContact: function () {
            getDetail("contacts", this.id).then(item => {
                console.log(item);
                this.contact = item;
                this.updateForm(this.contact)
            })
        },
        addContact: function (data) {
            add("contacts", data).then(item => {
                console.log(item);
            })
        },
        updateContact: function (data) {
            update("contacts", data, this.id).then(item => {
                console.log(item);
            })
        },



        onSubmit: function () {
            if (this.currentAction == "Update") {
                this.updateContact(this.contactForm)
            }
            else {
                this.addContact(this.contactForm)
            }
        }
    }
};
</script>
     