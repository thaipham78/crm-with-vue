<template>
    <div>
        <div class="create">
            <button v-on:click="goTo" type="button" class="btn btn-primary">Add {{ currentEntity }}</button>
        </div>
        <vue-good-table :columns="columns" :rows="rows" />
    </div>
</template>
    
<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';
import { getLists } from "@/service";
import VueRouter from "vue-router";


const CompanyColumns = [
    {
        label: "Id",
        field: "id"
    },
    {
        label: "Name",
        field: "name"
    },
    {
        label: "Phone",
        field: "phone"
    },
    {
        label: "Email",
        field: "email"
    },
    {
        label: "Created By",
        field: "createdBy"
    },
];

const ContactColumns = [
    {
        label: "Id",
        field: "id"
    },
    {
        label: "First Name",
        field: "fName"
    },
    {
        label: "Last Name",
        field: "lName"
    },
    {
        label: "Phone",
        field: "phone"
    },
    {
        label: "Email",
        field: "email"
    },
    {
        label: "Created BY",
        field: "createdBy"
    },
];

const UserColumns = [
    {
        label: "Id",
        field: "id"
    },
    {
        label: "Role",
        field: "role"
    },
];

let COMPANIES = [
    {
        id: "1",
        name: "Russia",
        phone: "f/f3/Flag_of_Russia.svg",
        email: "f/f3/Flag_of_Russia.svg",
        createdBY: "",
    },
    {
        id: "2",
        name: "Russia",
        phone: "f/f3/Flag_of_Russia.svg",
        email: "f/f3/Flag_of_Russia.svg",
        createdBY: "",
    },
    {
        id: "3",
        name: "Russia",
        phone: "f/f3/Flag_of_Russia.svg",
        email: "f/f3/Flag_of_Russia.svg",
        createdBY: "",
    },
    {
        id: "4",
        name: "Russia",
        phone: "f/f3/Flag_of_Russia.svg",
        email: "f/f3/Flag_of_Russia.svg",
        createdBY: "",
    },
    {
        id: "5",
        name: "Russia",
        phone: "f/f3/Flag_of_Russia.svg",
        email: "f/f3/Flag_of_Russia.svg",
        createdBY: "",
    },
    {
        id: "6",
        name: "Russia",
        phone: "f/f3/Flag_of_Russia.svg",
        email: "f/f3/Flag_of_Russia.svg",
        createdBY: "",
    },
    {
        id: "7",
        name: "Russia",
        phone: "f/f3/Flag_of_Russia.svg",
        email: "f/f3/Flag_of_Russia.svg",
        createdBY: "",
    },
    {
        id: "8",
        name: "Russia",
        phone: "f/f3/Flag_of_Russia.svg",
        email: "f/f3/Flag_of_Russia.svg",
        createdBY: "",
    },
    {
        id: "9",
        name: "Russia",
        phone: "f/f3/Flag_of_Russia.svg",
        email: "f/f3/Flag_of_Russia.svg",
        createdBY: "",
    },
    {
        id: "10",
        name: "Russia",
        phone: "f/f3/Flag_of_Russia.svg",
        email: "f/f3/Flag_of_Russia.svg",
        createdBY: "",
    },
    {
        id: "11",
        name: "Russia",
        phone: "f/f3/Flag_of_Russia.svg",
        email: "f/f3/Flag_of_Russia.svg",
        createdBY: "",
    },
    {
        id: "12",
        name: "Russia",
        phone: "f/f3/Flag_of_Russia.svg",
        email: "f/f3/Flag_of_Russia.svg",
        createdBY: "",
    },
    {
        id: "13",
        name: "Russia",
        phone: "f/f3/Flag_of_Russia.svg",
        email: "f/f3/Flag_of_Russia.svg",
        createdBY: "",
    },
];

let CONTACTS = [
    {
        id: "1",
        fName: "Russia",
        lName: "Russia",
        phone: "f/f3/Flag_of_Russia.svg",
        email: "f/f3/Flag_of_Russia.svg",
        createdBY: "",
    },
    {
        id: "2",
        firstName: "Russia",
        lastName: "Russia",
        phone: "f/f3/Flag_of_Russia.svg",
        email: "f/f3/Flag_of_Russia.svg",
        createdBY: "",
    },
    {
        id: "3",
        firstName: "Russia",
        lastName: "Russia",
        phone: "f/f3/Flag_of_Russia.svg",
        email: "f/f3/Flag_of_Russia.svg",
        createdBY: "",
    },
    {
        id: "4",
        firstName: "Russia",
        lastName: "Russia",
        phone: "f/f3/Flag_of_Russia.svg",
        email: "f/f3/Flag_of_Russia.svg",
        createdBY: "",
    },
    {
        id: "5",
        firstName: "Russia",
        lastName: "Russia",
        phone: "f/f3/Flag_of_Russia.svg",
        email: "f/f3/Flag_of_Russia.svg",
        createdBY: "",
    },
    {
        id: "6",
        firstName: "Russia",
        lastName: "Russia",
        phone: "f/f3/Flag_of_Russia.svg",
        email: "f/f3/Flag_of_Russia.svg",
        createdBY: "",
    },
    {
        id: "7",
        firstName: "Russia",
        lastName: "Russia",
        phone: "f/f3/Flag_of_Russia.svg",
        email: "f/f3/Flag_of_Russia.svg",
        createdBY: "",
    },
    {
        id: "8",
        firstName: "Russia",
        lastName: "Russia",
        phone: "f/f3/Flag_of_Russia.svg",
        email: "f/f3/Flag_of_Russia.svg",
        createdBY: "",
    },
    {
        id: "9",
        firstName: "Russia",
        lastName: "Russia",
        phone: "f/f3/Flag_of_Russia.svg",
        email: "f/f3/Flag_of_Russia.svg",
        createdBY: "",
    },
    {
        id: "10",
        firstName: "Russia",
        lastName: "Russia",
        phone: "f/f3/Flag_of_Russia.svg",
        email: "f/f3/Flag_of_Russia.svg",
        createdBY: "",
    },
    {
        id: "11",
        firstName: "Russia",
        lastName: "Russia",
        phone: "f/f3/Flag_of_Russia.svg",
        email: "f/f3/Flag_of_Russia.svg",
        createdBY: "",
    },
    {
        id: "12",
        firstName: "Russia",
        lastName: "Russia",
        phone: "f/f3/Flag_of_Russia.svg",
        email: "f/f3/Flag_of_Russia.svg",
        createdBY: "",
    },
    {
        id: "13",
        firstName: "Russia",
        lastName: "Russia",
        phone: "f/f3/Flag_of_Russia.svg",
        email: "f/f3/Flag_of_Russia.svg",
        createdBY: "",
    },
];

let USERS = [
    {
        id: "1",
        name: "Russia",
        role: "Russia",
    },
    {
        id: "2",
        name: "Russia",
        role: "Russia",
    },
    {
        id: "3",
        name: "Russia",
        role: "Russia",
    },
    {
        id: "4",
        name: "Russia",
        role: "Russia",
    },
    {
        id: "5",
        name: "Russia",
        role: "Russia",
    },
    {
        id: "6",
        name: "Russia",
        role: "Russia",
    },
    {
        id: "7",
        name: "Russia",
        role: "Russia",
    },
    {
        id: "8",
        name: "Russia",
        role: "Russia",
    },
    {
        id: "9",
        name: "Russia",
        role: "Russia",
    },
    {
        id: "10",
        name: "Russia",
        role: "Russia",
    },
    {
        id: "11",
        name: "Russia",
        role: "Russia",
    },
    {
        id: "12",
        name: "Russia",
        role: "Russia",
    },
    {
        id: "13",
        name: "Russia",
        role: "Russia",
    },
];

export default {
    props: {
        entity: String,
    },
    data() {
        return {
            columns: [

            ],
            rows: [
            ],
            currentEntity: this.entity
        };
    },

    watch: {
        currentEntity: {
            handler(newData) {
                switch (newData) {
                    case "companies":
                        this.getCompanies()
                        break;
                    case "contacts":
                        this.getContacts()
                        break;
                    case "users":
                        this.getUsers()

                        break;
                    default:
                        break;
                }
                // console.log(this.columns);
            },
            // force eager callback execution
            immediate: true
        }

    },
    methods: {
        getCompanies: function () {
            getLists("companies").then(item => {
                this.company = true;
                this.columns = CompanyColumns;
                this.rows = item[0]
            })
        },
        getContacts: function () {
            getLists("contacts").then(item => {
                this.contact = true;
                this.columns = ContactColumns;
                this.rows = item[0]
            })
        },
        getUsers: function () {
            getLists("users").then(item => {
                this.user = true;
                this.columns = UserColumns;
                this.rows = item[0]
            })
        },
        goTo: function () {
            this.$router.push({ path: `/${this.currentEntity}/create` })
        }
    },

    components: {
        VueGoodTable
    }
};
</script>
    