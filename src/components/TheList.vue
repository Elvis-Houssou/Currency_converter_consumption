<script>
    const API_URL = 'http://localhost:8000/api';
    // const id = ;

    export default {
        data() {
            return {
                pairsList: [],
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

            async del(index) {
                const res = await(await fetch(`${API_URL}/delete/pair/${index}`, {
                    method: 'DELETE',
                })).json();

                if (res.status == 'done') {
                    window.location.reload();
                }
                else {
                    console.error(res.error);
                }
            },

            async redirect() {
                this.$router.push({name: 'admin.add'});
            },
        },
        created() {
            this.getData();
        }
    }
</script>

<template>
    <div class="container">

<div class="row">
    <div class="col-lg-12 margin-tb text-end">
        <div class="pull-right">
            <a @click.prevent="redirect"> Create New Categories</a>
        </div>
    </div>
</div>

<br>

<table class="table">
    {{ pairsList }}
    <tr>
        <th>ID</th>
        <th>Devises</th>
        <th>Taux de Conversion</th>
        <th>update</th>
    </tr>

    <tr v-for='(data, index) in pairsList' :key="index">
         <td>{{ index + 1 }}</td>
        <td>{{ data.firstCurrency + "->" + data.secondCurrency }}</td>
        <td >{{ data.convertion_rate.value }}</td>
        <td>
            <form action="">
                <span class="edit">
                    <a  href="">Edit</a>
                </span>
                
            </form>
        </td>
        <td>
            <button @click="del(data.id)">Delete</button>
        </td>
    </tr>
</table>

</div>
</template>

<style>
.table tr{
    text-align: center;
}

.table tr th{
    padding: 2rem;
}
</style>