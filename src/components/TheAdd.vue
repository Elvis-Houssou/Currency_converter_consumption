<script>
    const API_URL = 'http://localhost:8000/api';

    export default {
        data() {
            return {
                firstCurrency : undefined,
                secondCurrency : undefined,
                convertion_rates : {"value" : undefined},
            }
        },
        methods: {
            async submit() {
                const res = await(await fetch(`${API_URL}/add/pair/${this.getCurrentUser(this.storageName).token}`, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: JSON.stringify({
                        firstCurrency : this.firstCurrency,
                        secondCurrency : this.secondCurrency,
                        convertion_rates : this.convertion_rates
                    })
                })).json();

                if (res.status == 'done') {
                console.log(res);
                   this.$router.push({name: 'admin.list'});
                }
                else {
                    console.error(res.error);
                }
            },
            async redirect() {
                this.$router.push({name: 'admin.list'});
            },
        }
    }
</script>

<template>
    <div>
        <nav class="head">
            <a href="#" id="sur"> <li>Page d'Ajout de Pair</li></a>
            <a href=""> <li @click.prevent="redirect">Liste des Pairs</li></a>
        </nav>
        <form action="" class="convert">
            <div class="field_column">
                <label for="">De</label>
                <div>
                    <input type="text" v-model="firstCurrency" name="firstCurrency" id="firstCurrency">
                </div>
            </div>
            <div class="field_column">
                <label for="">Vers</label>
                <div>
                    <input type="text" v-model="secondCurrency" name="secondCurrency" id="secondCurrency">
                </div>
            </div>
            <div class="field_column">
                <label for="">Taux de conversion</label>
                <div>
                    <input type="text" v-model="convertion_rates.value" name="convertion_rates" id="convertion_rates">
                </div>
            </div>
            <div class="field_column">
                <input type="submit" @click.prevent="submit()" value="Enregistrer">
            </div>
        </form>
    </div>
</template>

<style scoped>
.convert {
    display: flex;
    text-align: center;
    align-items: center;
}

.head {
    display: flex;
}

.head #sur{
    /* text-decoration: underline; */
    text-decoration: overline;
}

.head a{
    margin: 2rem;
}

.head a li{
    list-style: none;
}

.field_column  {
    padding: 2rem;
}
</style>