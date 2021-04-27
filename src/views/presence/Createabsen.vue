<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Add Absen</h5>
     <form class="row g-3" @submit.prevent="store">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Waktu Absen</label>
    <input type="time" class="form-control" id="inputEmail4" 
    v-model="absens.waktu" />
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
    <button type="submit" class="btn btn-primary">Add</button>
  </div>
</form>
  </div>
</div>
 
</template>
<script>
import { ref } from 'vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router'
import axios from 'axios'
export default {
  setup() {

    const absens = reactive({
      waktu: '',
      mhs_id: '',
      mk_id: '',
      kehadiran: ''
      
    })

    const validation = ref([])

    const router = useRouter()

    function store(){
      let waktu = presences.waktu
      let mhs_id = presences.mhs_id
      let mk_id = presences.mk_id
      let kehadiran = presences.kehadiran

      axios.post('http://127.0.0.1:8000/api/presence', {
        waktu: waktu,
        mhs_id: mhs_id,
        mk_id: mk_id,
        kehadiran: kehadiran
        
      }).then(() => {
        router.push({
          name:'Absen'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      presences,
      validation,
      router, 
      store
    }
  },
}
</script>
