<template>
  <form-dialog
    :title="editData.type==='add'?'新增服务器':'修改服务器'"
    :is-show="show"
    width="600px"
    new-class="small"
    @update:isShow="updateIsShow"
    @resetForm="resetForm"
  >
    <form-items
      ref="form"
      :label-width="'60px'"
      :is-grid="false"
      :item-span="24"
      :model="form"
      :rules="rules"
      :items-datas="itemsDatas"
      :form-datas="form"
      @keyup.enter.native="confirmClose"
    />

    <span slot="footer" class="dialog-footer">
      <el-button :loading="isLoading" type="primary" @click="confirm">
        <i v-if="!isLoading" class="iconfont icon-xitong" />保存
      </el-button>
      <el-button class="btn-dark" @click="close">
        <i class="iconfont icon-close" />取消
      </el-button>
    </span>
  </form-dialog>
</template>

<script>
import { addHostsConfig, updateHostsConfig } from '@/api/apiUrl'
export default {
  name: 'Edit',
  props: {
    show: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    editData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      itemsDatas: [
        {
          label: '主机名',
          prop: 'a',
          type: 'input',
          placeholder: '请输入主机IP'
        },
        {
          label: '端口',
          prop: 'b',
          type: 'input',
          placeholder: '请输入域名',
          disabled: this.editData.type === 'modify'
        },
        {
          label: 'CPU',
          prop: 'c',
          type: 'input',
          placeholder: '请输入域名',
          disabled: this.editData.type === 'modify'
        },
        {
          label: '内存',
          prop: 'c',
          type: 'input',
          placeholder: '请输入域名',
          disabled: this.editData.type === 'modify'
        },
        {
          label: '磁盘',
          prop: 'c',
          type: 'input',
          placeholder: '请输入域名',
          disabled: this.editData.type === 'modify'
        },
        {
          label: 'SSH用户',
          prop: 'c',
          type: 'input',
          placeholder: '请输入域名'
        },
        {
          label: 'SSH密码',
          prop: 'c',
          type: 'input',
          placeholder: '请输入域名'
        }
      ],
      form: {
        groupId: '',
        hostIp: '',
        domain: ''
      },
      rules: {
        hostIp: [
          { required: true, message: '请输入', trigger: 'change' },
          {
            pattern: /^((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))$/,
            message: '请输入正确的IP',
            trigger: 'change'
          }
        ],
        domain: [
          { required: true, message: '请输入', trigger: 'change' },
          {
            pattern: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}(\/{0,1})/,
            message: '请输入正确的域名',
            trigger: 'change'
          }
        ]
      },
      isLoading: false
    }
  },
  watch: {
    editData: {
      handler(val) {
        Object.assign(this.$data.itemsDatas, this.$options.data.call(this).itemsDatas)
        if (val.type === 'modify') {
          this.form = JSON.parse(JSON.stringify(val.data))
        }
      },
      deep: true
    }
  },
  methods: {
    updateIsShow(v) {
      this.$emit('update:show', 'serveVisible', v)
    },
    resetForm() {
      this.$refs.form.elForm.resetFields()
      this.form = {
        groupId: '',
        hostIp: '',
        domain: ''
      }
    },
    close() {
      this.resetForm()
      this.updateIsShow(false)
    },
    confirm() {
      this.$refs.form.elForm.validate((valid) => {
        if (valid) {
          this.isLoading = true
          if (this.form.configId) {
            updateHostsConfig(this.form).then(res => {
              this.isLoading = false
              this.$emit('getConfigTableData')
              this.$msgSuccess('修改成功')
              this.close()
            }).catch(() => {
              this.isLoading = false
            })
          } else {
            addHostsConfig(this.form).then(res => {
              this.isLoading = false
              this.$emit('getConfigTableData')
              this.$msgSuccess('新增成功')
              this.close()
            }).catch(() => {
              this.isLoading = false
            })
          }
        } else {
          return false
        }
      })
    }
  }
}
</script>
