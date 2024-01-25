<template>
    <v-sheet class="bg-deep-purple pa-12" rounded>
        <v-card class="mx-auto px-6 py-8" max-width="344">
            <v-form>

                <v-text-field class="mb-2" clearable label="Username" v-model="username"
                    placeholder="Enter your Username" />
                <v-text-field class="mb-2" clearable label="Email" v-model="email" placeholder="Enter your Email" />
                <v-text-field class="mb-2" clearable label="Password" v-model="password"
                    placeholder="Enter your password" />
                <v-select v-model="userType" :items="userTypeOptions" label="UserType"></v-select>
                <v-if v-if="userType === 'company'">
                    <v-text-field class="mb-2" clearable label="Company Name" v-model="company_name"
                        placeholder="Enter Company Name" />
                    <v-text-field class="mb-2" clearable label="Business Type" v-model="business_type"
                        placeholder="Enter Business Type" />
                    <v-text-field class="mb-2" clearable label="Industry" v-model="industry" placeholder="Enter Industry" />
                    <v-text-field class="mb-2" clearable label="Registration Number" v-model="registration_number"
                        placeholder="Enter Registration Number" />
                </v-if>

                <v-if v-if="userType === 'freelancer'">
                    <v-text-field class="mb-2" clearable label="Freelancer Name" v-model="freelancer_name"
                        placeholder="Enter Freelancer Name" />
                    <v-text-field class="mb-2" clearable label="Industry" v-model="industry" placeholder="Enter Industry" />
                </v-if>

                <v-if v-if="userType === 'employee'">
                    <v-text-field class="mb-2" clearable label="Employee Name" v-model="employee_name"
                        placeholder="Enter Employee Name" />
                    <v-text-field class="mb-2" clearable label="Phone Number" v-model="phone_number"
                        placeholder="Enter Phone Number" />
                    <v-text-field class="mb-2" clearable label="Date of Birth" v-model="dob"
                        placeholder="Enter Date of Birth" />
                    <v-text-field class="mb-2" clearable label="Gender" v-model="gender" placeholder="Enter Gender" />
                    <v-text-field class="mb-2" clearable label="Department ID" v-model="department_id"
                        placeholder="Enter Department ID" />
                </v-if>

                <v-btn color="success" size="large" type="button" variant="elevated" @click="signup">
                    SignUp
                </v-btn>
            </v-form>
            <router-link to="/">SignIn</router-link>
        </v-card>
    </v-sheet>
</template>

<script>
export default {
    name: 'SignUp',
    data() {
        return {
            username: "",
            email: "",
            password: "",
            userType: "",
            userTypeOptions: ["company", "freelancer", "employee"],
            company_name: "",
            business_type: "",
            industry: "",
            registration_number: "",
            freelancer_name: "",
            employee_name: "",
            phone_number: "",
            dob: "",
            gender: "",
            department_id: "",
        };
    },
    methods: {
        async signup() {
            let newUser = {
                username: this.username,
                email: this.email,
                password: this.password,
                userType: this.userType,
            };
            if (this.userType === "company") {
                newUser = {
                    ...newUser,
                    company_name: this.company_name,
                    business_type: this.business_type,
                    industry: this.industry,
                    registration_number: this.registration_number,
                };
            } else if (this.userType === "freelancer") {
                newUser = {
                    ...newUser,
                    freelancer_name: this.freelancer_name,
                    industry: this.industry,
                };
            } else if (this.userType === "employee") {
                newUser = {
                    ...newUser,
                    employee_name: this.employee_name,
                    phone_number: this.phone_number,
                    dob: this.dob,
                    gender: this.gender,
                    department_id: this.department_id,
                };
            }

            this.$store.dispatch('signUp', newUser);
        },
    },
};
</script>
