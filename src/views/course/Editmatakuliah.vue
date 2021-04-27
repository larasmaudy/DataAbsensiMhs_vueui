<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Edit Matakuliah</h5>
     <form class="row g-3" @submit.prevent="update">
  
   <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Kode</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="courses.kode" />
      <div class="alert alert-danger" v-if="validation.kode">
        {{ validation.kode[0] }}
      </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Nama Matakuliah</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="courses.nama_mk" />
      <div class="alert alert-danger" v-if="validation.nama_mk">
        {{ validation.nama_mk[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">SKS</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="courses.sks" />
      <div class="alert alert-danger" v-if="validation.sks">
        {{ validation.sks[0] }}
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

    const courses = reactive({
      kode: '',
      nama: '',
      sks: ''
    })

    const validation = ref([]);

    const router = useRouter();

    const route = useRoute()

    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/course/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.kode)

        courses.kode = response.data.data.kode
        courses.nama_mk = response.data.data.nama_mk
        courses.sks = response.data.data.sks
      }).catch(error =>{
        console.log(error.response.data)
      })
    })

    function update(){
      let nama_mk = courses.nama_mk
      let sks = courses.sks

      axios.put(`http://127.0.0.1:8000/api/course/${route.params.id}`, {
        kode: kode,
        nama_mk: nama_mk,
        sks: sks
      })
      .then(() => {
        router.push({
          name:'Index'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      courses,
      validation,
      router, 
      update,
      route
    }
  },
}
</script>
