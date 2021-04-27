<template>
  <div class="absen">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
    <hr class="my-3">
    <router-link class="btn btn-primary" to="/createabsen">Add Absen</router-link>
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Waktu Absen</th>
      <th scope="col">Nama Mahasiswa</th>
      <th scope="col">Nama Matakuliah</th>
      <th scope="col">Keterangan</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
   <tbody>
    <tr v-for="(presences, index) in absen" :key="index">
      <td>{{ presences.id }}</td>
      <td>{{ presences.waktu }}</td>
      <td>{{ presences.mhs_id }}</td>
      <td>{{ presences.mk_id }}</td>
      <td>{{ presences.kehadiran }}</td>
      <td>
        <router-link class="btn btn-success" :to="{name:'Editabsen', params:{id:presences.id}}">Edit</router-link>
        <button @click.prevent="absenDelete(presences.id)" class="btn btn-danger">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import { ref, onMounted } from 'vue';

export default {
 
   setup(){
    let presence = ref([])

    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/presence')
      .then(response => {
        presence.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    function absenDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/presence/${id}`)
      .then(()=>{
        let z = this.presence.map(presence => presence.id).indexOf(id);
        this.presence.splice(z, 1)
      }).catch(error => {
        console.log(error)
      })
    }

      return {
      presence,
      absenDelete
    }
  }
}; 
</script>

