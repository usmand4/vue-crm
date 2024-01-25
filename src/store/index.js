import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        storedUsers: [],
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
    },
    mutations: {
        setStoredUsers(state, users) {
            state.storedUsers = users;
        },
        addUser(state, newUser) {
            state.storedUsers.push(newUser);
        },
    },
    actions: {

        async signUp({ commit }, newUser) {
            try {
                if (!newUser.username || !newUser.email || !newUser.password || !newUser.userType) {
                    alert("Please fill in all required fields");
                    return;
                }

                const response = await axios.post('http://localhost:3000/storedUsers', newUser);
                commit('addUser', newUser);
                console.log('SignUp successful:', response.data);
            } catch (error) {
                console.error('SignUp failed:', error);
                alert('SignUp failed. Please try again.');
            }
        },
        async signIn({ state }, { email, password }) {
            const user = state.storedUsers.find(u => u.email === email && u.password === password);
                console.log('user value', user);
            if (user) {
                alert('Login successful!');
            } else {
                alert('Invalid email or password');
            }
        },
    },
});
