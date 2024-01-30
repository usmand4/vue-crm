import { createStore } from 'vuex';
import axios from 'axios';
const apiUrl = 'https://bff4-182-176-157-31.ngrok-free.app';
export default createStore({
    state: {
        storedUsers: [],
        username: "",
        email: "",
        password: "",
        userType: "",
        userTypeOptions: ["company", "freelancer"],
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
        token: null,
        role:''
    },

    mutations: {
        setStoredUsers(state, users) {
            state.storedUsers = users;
            // console.log('Received users:', users);
            // console.log('Updated storedUsers:', state.storedUsers);
        },
        addUser(state, newUser) {
            state.storedUsers.push(newUser);
        },
        setToken(state, token) {
            state.token = token;
          },
          setRole(state,role){
            state.role = role;
          }
    },

    actions: {
        // async fetchUsers({ commit }) {
        //     try {
        //         const response = await axios.get('http://');
        //         commit('setStoredUsers', response.data);
        //     } catch (error) {
        //         console.error('Fetch users failed:', error);
        //     }
        // },

        async signUp({ commit }, newUser) {
            try {
                if (!newUser.username || !newUser.email || !newUser.password || !newUser.userType) {
                    alert("Please fill in all required fields");
                    return;
                }

                const response = await axios.post(`${apiUrl}/api/register`, newUser);
                commit('addUser', newUser);
                console.log('SignUp successful:', response.data);
            } catch (error) {
                console.error('SignUp failed:', error);
                alert('SignUp failed. Please try again.');
            }
        }, 
        async signIn({ commit }, credentials) {
            try {
              const response = await axios.post('http://localhost:3000/login', credentials);
      
              if (response.status === 200 || response.status === 201) {
                console.log('Signin successful!');
      
                const token = response.data.token;
                const role = response.data.role;
      
                
                localStorage.setItem('token', token);
                localStorage.setItem('role', role);
      
                commit('setToken', token);
                commit('setRole', role);
      
                if (role === 'company') {
                  this.$router.push({ name: 'Company' });
                } else if (role === 'freelancer') {
                  this.$router.push({ name: 'Freelancer' });
                }
      
              } else {
                console.error('Signin failed:', response.data);
              }
            } catch (error) {
              console.error('Signin failed:', error.message);
            }
          }
    },
});
