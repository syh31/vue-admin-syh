<template>
  <div>
    <div style="margin-bottom:15px;">
      当前用户角色： <span v-if="roles[0] === 'admin'">管理员</span><span v-else>普通用户</span>
    </div>
    切换用户角色：
    <el-radio-group v-model="switchRoles">
      <el-radio-button label="editor">切换为普通用户</el-radio-button>
      <el-radio-button label="admin">切换为管理员</el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  computed: {
    roles() {
      return this.$store.getters.roles;
    },
    switchRoles: {
      get() {
        return this.roles[0]
      },
      set(val) {
        this.$store.dispatch('user/changeRoles', val).then(() => {
          this.$emit('change')
        })
      }
    }
  }
}
</script>
