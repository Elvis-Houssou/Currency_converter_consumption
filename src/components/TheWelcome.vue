<script>
    const API_URL = 'http://localhost:8000/api';
    // const id = ;

    export default {
        data() {
            return {
                pairsList: [],
                value: 0,
                result: 0,
                rate: [],
                convertion: [],
                // id: undefined,
            }
        },
        methods: {
            async getData() {

                const res = await(await fetch(`${API_URL}/get/pair/${this.getCurrentUser(this.storageName).token}`, {})).json();

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
              this.pairsList.forEach(e => {
                this.convertion =e.convertion_rate ;
                console.log(e);
              });
                this.result = this.value * this.convertion;
                console.log(this.convertion);

                // this.convertion.forEach(i => {

                // })
            },
        },
        created() {
            this.getData();
        }
    }
</script>
<template>
  <div>
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
                  <select name="" id="">
                    <option v-for='(data, index) in pairsList' :key="index" :value="data.id">{{ data.firstCurrency + "->" + data.secondCurrency  }}</option>
                  </select>
                </div>
            </div>
        
            <div class="field_column">
                <input type="submit" @click.prevent="calculer()" value="Calculer">
            </div>
        </form>
  </div>

  <!-- {{ pairsList }} -->
  {{ result }}
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