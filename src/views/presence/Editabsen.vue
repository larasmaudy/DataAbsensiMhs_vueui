<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Edit Absen</h5>
     <form class="row g-3" @submit.prevent="update">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Waktu Absen</label>
    <input type="time" class="form-control" id="inputEmail4" 
    v-model="presences.waktu" />
      <div class="alert alert-danger" v-if="validation.waktu">
        {{ validation.waktu[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Nama Mahasiswa</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="presences.mhs_id" />
      <div class="alert alert-danger" v-if="validation.mhs_id">
        {{ validation.mhs_id[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Nama Matakuliah</label>
    <input type="text" class="form-control" id="inputPassword4"
    v-model="presences.mk_id"/>
    <div class="alert alert-danger" v-if="validation.mk_id">
        {{ validation.mk_id[0] }}
      </div>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Keterangan</label>
    <input type="text" class="form-control" id="inputAddress" 
    v-model="presences.kehadiran" />
    <div class="alert alert-danger" v-if="validation.kehadiran">
        {{ validation.kehadiran[0] }}
      </div>
  </div>
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Edit</button>
  </div>
</form>
  </div>
</div>
 
</template>
<script>
import { onMounted, ref } from 'vue';
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup() {

    const presences = reactive({
      waktu: '',
      mhs_id: '',
      mk_id: '',
      keterangan: ''
    })

    const validation = ref([]);

    const router = useRouter();

    const route = useRoute()

    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/presence/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.mhs_id)

        presences.waktu = response.data.data.waktu
        presences.mhs_id = response.data.data.mhs_id
        presences.mk_id = response.data.data.mk_id
        presences.kehadiran = response.data.data.kehadiran
      }).catch(error =>{
        console.log(error.response.data)
      })
    })

    function update(){
      let waktu = presences.waktu
      let mhs_id = presences.mhs_id
      let mk_id = presences.mk_id
      let kehadiran = presences.kehadiran

      axios.put(`http://127.0.0.1:8000/api/presence/${route.params.id}`, {
        waktu: waktu,
        mhs_id: mhs_id,
        mk_id: mk_id,
        kehadiran: kehadiran
      })
      .then(() => {
        router.push({
          name:'presence'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      absens,
      validation,
      router, 
      update,
      route
    }
  },
}
</script>
