<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Add Mahasiswa</h5>
     <form class="row g-3" @submit.prevent="store">
  
   <div class="col-md-6">
    <label for="inputEmail4" class="form-label">NIM</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="students.nim" />
      <div class="alert alert-danger" v-if="validation.nim">
        {{ validation.nim[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Nama Mahasiswa</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="students.nama_mhs" />
      <div class="alert alert-danger" v-if="validation.nama_mhs">
        {{ validation.nama_mhs[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Alamat</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="students.alamat" />
      <div class="alert alert-danger" v-if="validation.alamat">
        {{ validation.alamat[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Nomor Telepon</label>
    <input type="number" class="form-control" id="inputPassword4"
    v-model="students.notlp"/>
    <div class="alert alert-danger" v-if="validation.notlp">
        {{ validation.notlp[0] }}
      </div>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Email</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Masukkan Email"
    v-model="students.email" />
    <div class="alert alert-danger" v-if="validation.email">
        {{ validation.email[0] }}
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

    const students = reactive({
      nim: '',
      nama_mhs: '',
      alamat: '',
      notlp: '',
      email: ''
      
    })

    const validation = ref([])

    const router = useRouter()

    function store(){
      let nim = students.nim
      let nama_mhs: '', = students.nama_mhs: '',
      let alamat = students.alamat
      let no_tlp = students.no_tlp
      let email = students.email

      axios.post('http://127.0.0.1:8000/api/mahasiswa', {
        nim: nim,
        nama_mhs: nama_mhs,
        alamat: alamat,
        notlp: notlp,
        email: email
        
      }).then(() => {
        router.push({
          name:'Home'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      students,
      validation,
      router, 
      store
    }
  },
}
</script>
