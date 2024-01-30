<template>
    <v-sheet class="bg-deep-purple pa-12" rounded>
        <v-card class="mx-auto px-6 py-8" max-width="344">
            <v-form>

                <v-text-field class="mb-2" clearable label="Username" v-model="$store.state.username"
                    placeholder="Enter your Username" />
                <v-text-field class="mb-2" clearable label="Email" v-model="$store.state.email"
                    placeholder="Enter your Email" />
                <v-text-field class="mb-2" clearable label="Password" type="password" v-model="$store.state.password"
                    placeholder="Enter your password" />
                <v-select v-model="$store.state.userType" :items="$store.state.userTypeOptions" label="UserType"></v-select>

                <v-if v-if="$store.state.userType === 'company'">
                    <v-text-field class="mb-2" clearable label="Company Name" v-model="$store.state.company_name"
                        placeholder="Enter Company Name" />
                    <v-text-field class="mb-2" clearable label="Business Type" v-model="$store.state.business_type"
                        placeholder="Enter Business Type" />
                    <v-text-field class="mb-2" clearable label="Industry" v-model="$store.state.industry" placeholder="Enter Industry" />
                    <v-text-field class="mb-2" clearable label="Registration Number" v-model="$store.state.registration_number" placeholder="Enter Registration Number" />
                </v-if>

                <v-if v-if="$store.state.userType === 'freelancer'">
                    <v-text-field class="mb-2" clearable label="Freelancer Name" v-model="$store.state.freelancer_name"
                        placeholder="Enter Freelancer Name" />
                    <v-text-field class="mb-2" clearable label="Industry" v-model="$store.state.industry" placeholder="Enter Industry" />
                </v-if>

                <!-- <v-if v-if="$store.state.userType === 'employee'">
                    <v-text-field class="mb-2" clearable label="Employee Name" v-model="$store.state.employee_name"
                        placeholder="Enter Employee Name" />
                    <v-text-field class="mb-2" clearable label="Phone Number" v-model="$store.state.phone_number"
                        placeholder="Enter Phone Number" />
                    <v-text-field class="mb-2" clearable label="Date of Birth" v-model="$store.state.dob"
                        placeholder="Enter Date of Birth" />
                    <v-text-field class="mb-2" clearable label="Gender" v-model="$store.state.gender" placeholder="Enter Gender" />
                    <v-text-field class="mb-2" clearable label="Department ID" v-model="$store.state.department_id"
                        placeholder="Enter Department ID" />
                </v-if> -->

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

    methods: {
        async signup() {
            let newUser = {
                username: this.$store.state.username,
                email: this.$store.state.email,
                password: this.$store.state.password,
                userType: this.$store.state.userType,
            };

            if (this.$store.state.userType === "company") {
                newUser = {
                    ...newUser,
                    company_name: this.$store.state.company_name,
                    business_type: this.$store.state.business_type,
                    industry: this.$store.state.industry,
                    registration_number: this.$store.state.registration_number,
                };
            } else if (this.$store.state.userType === "freelancer") {
                newUser = {
                    ...newUser,
                    freelancer_name: this.$store.state.freelancer_name,
                    industry: this.$store.state.industry,
                };
            }
            //  else if (this.$store.state.userType === "employee") {
            //     newUser = {
            //         ...newUser,
            //         employee_name: this.$store.state.employee_name,
            //         phone_number: this.$store.state.phone_number,
            //         dob: this.$store.state.dob,
            //         gender: this.$store.state.gender,
            //         department_id: this.$store.state.department_id,
            //     };
            // }

            this.$store.dispatch('signUp', newUser);
        },
    },
};
</script>
