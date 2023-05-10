<template>
    <div>
        <div class="Update">
            <button v-on:click="goTo" type="button" class="btn btn-primary">
                Update {{ currentEntity }}
            </button>
        </div>
        <div class="card mt-3">
            <div class="card-body">
                <h5 class="card-title">{{ currentEntity }} Detail</h5>
                <p class="card-text" v-for="(item, key, index) in detailData">{{ key }} : <Strong>{{ item }}</Strong></p>

            </div>
        </div>
    </div>
</template>
    
<script>
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
import { getDetail } from "@/service";
export default {
    props: {
        entity: String,
    },

    data() {
        return {
            detailData: {},
            currentEntity: this.entity,
            id: this.$route.params.id,
        };
    },
    watch: {
        currentEntity: {
            handler(newData) {
                switch (newData) {
                    case "company":
                        this.getDetail("companies")

                        break;
                    case "contact":
                        this.getDetail("contacts")
                        break;
                    case "user":
                        this.getDetail("users")

                        break;
                    default:
                        break;
                }
                console.log(this.detailData);
            },
            // force eager callback execution
            immediate: true
        }
    },
    methods: {
        getDetail: function (data) {
            getDetail(data, this.id).then(item => {
                console.log(item);
                this.detailData = item;
            })
        },
        goTo: function () {
            this.$router.push({ path: `/${this.currentEntity}/update/${this.id}` })
        }
    }
};
</script>
    