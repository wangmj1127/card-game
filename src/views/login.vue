<template>
  <div>
    <el-card class="box-card abs-center">
      <div class="title">
        Systerm Login
      </div>
      <el-form ref="form"  :model="form" :rules="formRules">
        <el-form-item  prop="username">
          <el-input placeholder="username" v-model="form.username">
            <template slot="prepend"><i class="el-icon-icon-user"></i></template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="password" v-model="form.password">
            <template slot="prepend"><i class="el-icon-icon-lock"></i></template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-button" @click="submitForm('form')">login</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>  
</template>

<script>
import UserService from "../services/user"
export default {
  name:'login',
  data(){
    return {
      form:{
        name:'',
        password:'',
      },
      formRules:{
        username:
          [
            { required: true, message: "username can't be empty!", trigger: 'blur' },
          ],
        password:
          [
            { required: true, message: "password can't be empty!",trigger: 'blur' },
          ]
      }
    }
  },
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loginUser();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    loginUser(){
      let {username,password} = this.form;
      UserService.login(username,password,(res)=>{
        if(res){
          this.$notify.success({
            title: 'success!',
            message: 'Login in'
          });
          this.turnToGame();
        }else{
          this.$notify.error({
            title: 'warning',
            message: 'Please enter the correct username and password!'
          });
        }
      })
    },
    turnToGame(){
      this.$router.push({
        path: "/home",
        query: {}
      })
    }
  },
}
</script>

<style scope>
  .box-card {
    width: 30%;
    min-width: 200px;
  }
  .box-card .title{
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 10px;
    color: #159b9b;
    border-bottom:2px solid #159b9b;
    margin-bottom: 20px;
  }
  .box-card .login-button{
    width: 100%;
    background-color: #159b9b;
    border-color: #159b9b;
  }
</style>
