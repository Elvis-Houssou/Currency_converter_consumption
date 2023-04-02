<script>
const API_URL = 'http://localhost:8000/api';
// const userToken = "Api_Token";

    export default {
        data() {
            return {
                email : undefined,
                password : undefined,
            }
        },
        methods: {
            async submit() {
                const res = await(await fetch(`${API_URL}/user/login`, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: JSON.stringify({
                        email : this.email,
                        password : this.password
                    })
                })).json();
                // const test = await(res).json();
                // if (!res.ok) {
                //     throw new Error(res.statusText);
                // }

                console.log(res);
                if (res.status == 'done') {
                    window.localStorage.setItem(this.storageName, res.Token);
                    
                //    window.localStorage.setItem(this.storageName, `${res.userId}_${res.token}`);
                //    this.currentUser = {
                //                         token: res.Token
                //                     };
                   this.$router.push({name: 'admin.add'});
                }
                else {
                    console.error(res.error);
                }
            }
        }
    }
</script>
<template>
    <h1>Connectez-vous</h1>
    <form>
        <div class="form-field">
            <label for="email">Email</label>
            <input type="text" v-model="email" name="email" id="email">
        </div>
        <div class="form-field">
            <label for="password">Mot de passe</label>
            <input type="password" v-model="password" name="password" id="password">
        </div>
        <div class="form-field">
            <input type="submit" @click.prevent="submit()" value="Se connecter">
        </div>
    </form>
    <!-- <p>Pas encore inscrit ? <router-link :to="{name: 'admin.register'}">Inscrivez-vous</router-link></p> -->
</template>