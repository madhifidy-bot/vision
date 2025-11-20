<template>
    <div class="login-wrapper">
        <form @submit.prevent="handleLogin">
            <h2>LOGIN HERE</h2>
            <input v-model="username" placeholder="Enter your Username" required />
            <input type="email" placeholder="Enter your Email" required />
            <input v-model="password" type="password" placeholder="Enter your Password" required />
          <button type="submit" @click="goToLandingPage">LOGIN</button>
            <label>
                <input type="checkbox" v-model="isAdult" required />
               <strong>18 years and above</strong> 
            </label>
            <p><b>Don't have an account? </b> <router-link to = "landingpage.vue"><strong>Sign up</strong></router-link></p>
        </form>
    </div>

</template>

<script>
export default {
    name: "LoginForm",
    data() {
        return {
            username: "",
            email: "",
            password: "",
            isAdult: false,
            
        };
    },
    methods: {
         goToLandingPage() {
      this.$router.push('/landingpage');
    },
        handleLogin() {
            if (!this.isAdult) {
                alert("You must be 18 years or older to log in.");
                return;
            }
            alert(`Username: ${this.username}\n Email: ${this.email}\nPassword: ${this.password}`);
        }
    }
};
</script>
<style scoped>
.login-wrapper {
    height: 100vh;
    width: 100%;
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRte4uowmym_JKzB9doZgks0mg42mxnEGwc6g&s");    
    background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}

form{
border-block: 2px solid black;
border-inline: 2px solid black;
    display: flex;
    width:20%;
    flex-direction: column;
    gap:10px; 
    height:fit-content;
    padding:20px; 
   
}
h2{
    text-align: center;
}
button{
    background-color: rgb(76, 14, 221);
    border:none;
    padding:10px;
    border-radius:5px;
    font-family: sans-serif;
}
input{
    padding:10px;
    border-radius:5px;
    border:1px solid gray;
}
body {
    background-image: url("data:image/jpeg;base64,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");
    
}
</style>