<script>
const API_URL = 'http://localhost:8000/api';
    export default {
        data() {
            return {
                name : undefined,
                email : undefined,
                password : undefined,
            }
        },
        methods: {
            async submit() {
                const res = await(await fetch(`${API_URL}/user/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: JSON.stringify({
                        name: this.name,
                        email : this.email,
                        password : this.password
                    })
                })).json();

                console.log(res);
                if (res.status == 'done') {
                //    this.$router.push({name: 'admin.login'});
                }
                else {
                    console.error(res.error);
                }
            }
        }
    }
</script>

<template>
    <h1>Enregistrez-vous</h1>
    <form>
        <div class="form-field">
            <label for="name">Nom & Prénoms</label>
            <input type="text" v-model="name" name="name" id="name">
        </div>
        <div class="form-field">
            <label for="email">Email</label>
            <input type="text" v-model="email" name="email" id="email">
        </div>
        <div class="form-field">
            <label for="password">Mot de passe</label>
            <input type="password" v-model="password" name="password" id="password">
        </div>
        <div class="form-field">
            <input type="submit" @click.prevent="submit()" value="Valider">
        </div>
    </form>
    <!-- <p>Déjà inscrit ? <router-link :to="{name: 'admin.login'}">Connectez-vous</router-link></p> -->
</template>