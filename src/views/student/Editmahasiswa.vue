<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Edit Mahasiswa</h5>
     <form class="row g-3" @submit.prevent="update">
  
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
    v-model="students.nama_mahasiswa" />
      <div class="alert alert-danger" v-if="validation.nama_mahasiswa">
        {{ validation.nama_mahasiswa[0] }}
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
    v-model="students.no_tlp"/>
    <div class="alert alert-danger" v-if="validation.no_tlp">
        {{ validation.no_tlp[0] }}
      </div>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">email</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Masukkan Email"
    v-model="students.email" />
    <div class="alert alert-danger" v-if="validation.email">
        {{ validation.email[0] }}
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

    const students = reactive({
      nim: '',
      nama: '',
      notlp: '',
      alamat: ''
    })

    const validation = ref([]);

    const router = useRouter();

    const route = useRoute()

    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/students/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama_mhs)
        students.nim = response.data.data.nim
        students.nama_mhs = response.data.data.nama_mhs
        students.alamat = response.data.data.alamat
        students.notlp = response.data.data.no_tlp
        students.email = response.data.data.email
      }).catch(error =>{
        console.log(error.response.data)
      })
    })

    function update(){
      let nim = students.nim
      let nama_mhs = students.nama_mhs
      let alamat = students.alamat
      let no_tlp = students.no_tlp
      let email = students.email

      axios.put(`http://127.0.0.1:8000/api/students/${route.params.id}`, {
        nim: nim,
        nama_mhs: nama_mhs,
        alamat: alamat,
        no_tlp: no_tlp,
        email: email
      })
      .then(() => {
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
      update,
      route
    }
  },
}
</script>
