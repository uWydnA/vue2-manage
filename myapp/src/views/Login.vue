<template>
  <div class="login">
    <el-card class="box-card">
      <h3>登录</h3>
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="用户名">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formLabelAlign.pass"></el-input>
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="success">注册</el-button>
          <el-button type="primary" @click="checkInfo">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-alert
      :title="loginInfo"
      :type="loginflag"
      class="notice"
      v-if="loginClick"
      effect="light"
      show-icon
      center
    ></el-alert>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        pass: ""
      },
      loginInfo: "",
      loginflag: "",
      loginClick: false
    };
  },
  methods: {
    ...mapMutations("userinfo", ["setToken"]),
    open2() {},
    checkInfo() {
      this.$axios
        .post("http://39.99.182.33/api/users/login", {
          tel: this.formLabelAlign.name,
          password: this.formLabelAlign.pass
        })
        .then(res => {
          if (res.data.code == "10008") {
            this.setToken(res.data.data.token);
            // this.loginClick = true;
            // this.loginInfo = "登录成功";
            // this.loginflag = "success";
            if (this.formLabelAlign.name.length < 1) {
              this.$message({
                message: "用户名不能为空",
                type: "error"
              });
            } else if (this.formLabelAlign.pass.length < 1) {
              this.$message({
                message: "密码不能为空",
                type: "error"
              });
            } else {
              this.$message({
                message: "登录成功",
                type: "success"
              });
              setTimeout(() => {
                this.$router.push("/index");
              }, 1000);
            }
          } else {
            this.$message({
              message: "登录失败，请检查用户名",
              type: "error"
            });
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.box-card {
  h3 {
    text-align: center;
  }
}
.login {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .notice {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .name,
  .password {
    padding: 10px 0;
    display: flex;
    span {
      width: 80px;
      font: 16px/40px "";
      text-align: right;
    }
  }
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
}
</style>
