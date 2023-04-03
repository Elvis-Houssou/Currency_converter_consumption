<script>
    const API_URL = 'http://localhost:8000/api';
    // const id = ;

    export default {
        data() {
            return {
                pairsList: [],
                value: 0,
                result: 0,
                selected: "",
            }
        },
        methods: {
            async getData() {

                const res = await(await fetch(`${API_URL}/get/pair/`, {})).json();

                console.log(res);

                if (res.status == 'done') {
                    this.pairsList = res.data;
                    console.log(res);
                }
                else {
                    console.error(res.error);
                }
            },

            async calculer() {
                this.pairsList.forEach(() => {
                    
                    this.result = this.value * this.selected;
                });
            },
        },
        created() {
            this.getData();
        }
    }
</script>
<template>
  <div>
    <h1>Convertisseur de Devise</h1>
    <form action="" class="convert">
            <div class="field_column">
                <label for="">Montant</label>
                <div>
                    <input type="text" name="convertion_rates" id="convertion_rates" v-model="value">
                </div>
            </div>

            <!-- <div class="field_column">
                <label for="">De</label>
                <div>
                  <select name="" id="">
                    <option v-for='(data, index) in pairsList' :key="index" :value="data.id">{{ data.firstCurrency }}</option>
                  </select>
                </div>
            </div> -->

            <div class="field_column">
                <label for="">Vers</label>
                <div>
                  <select name="" id="" v-model="selected">
                    <option v-for='(data, index) in pairsList' :key="index" :value="data.convertion_rate.value">{{ data.firstCurrency + "->" + data.secondCurrency  }}</option>
                  </select>
                </div>
            </div>
        
            <div class="field_column">
                <input type="submit" @click.prevent="calculer()" value="Calculer">
            </div>
        </form>
  </div>

  <!-- {{ pairsList }} -->
  <h2 id="result">{{ result }}</h2>
</template>

<style scoped>
.convert {
    display: flex;
    text-align: center;
    align-items: center;
}



.field_column  {
    padding: 2rem;
}
</style>