<!-- 表格 穿梭框 树结构 - 表格 -->
<template>
  <div class="tableTransfer-wrapper">
    <div class="table-box table-left-wrapper">
      <div class="box">
        <box-title title-name="未选择考试对象" />
        <div class="box-body">
          <div class="box-body tab-box">
            <div class="bg" />
            <el-tabs v-model="activeName" type="card">
              <el-tab-pane label="医疗/药机构" name="medical-institution">
                <el-tree
                  :data="data"
                  show-checkbox
                  node-key="id"
                  :default-expanded-keys="[2, 3]"
                  :default-checked-keys="[5]"
                  :props="defaultProps"
                />
              </el-tab-pane>
              <el-tab-pane label="中心用户" name="center-user">2</el-tab-pane>
              <el-tab-pane label="长护机构" name="long-institutions">3</el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>

    <div class="button-wrapper">
      <div>
        <el-button
          type="primary"
          size="small"
          icon="el-icon-arrow-right"
          :disabled="leftSelectRows.length <= 0"
          @click="leftToRightClick"
        />
      </div>
      <i class="button-margin" />
      <div>
        <el-button
          type="primary"
          size="small"
          icon="el-icon-arrow-left"
          :disabled="rightSelectRows.length <= 0"
          @click="rightToLeftClick"
        />
      </div>
    </div>

    <div class="table-box table-right-wrapper">
      <div class="box">
        <box-title title-name="已选择考试对象" />
        <div class="box-body">
          <my-table-view
            :columns="rightCloumns"
            :data="rightTableData"
            @handleSelectionChange="rightHandleSelect"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BoxTitle from '@/views/components/PageLayers/box-title'
export default {
  components: {
    BoxTitle
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    businessId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      activeName: 'medical-institution',
      type_options: [],

      leftLoadding: false,
      leftCloumns: [],
      leftTableData: [],

      rightCloumns: [
        { type: 'selection' },
        { type: 'index', label: '序号', width: '60px' },
        { prop: 'xxx', label: '用户名/账户' },
        { prop: 'xxx', label: '类型', width: '80px' }
      ],
      rightTableData: [{ xxx: 'hello' }],

      leftSelectRows: [],
      rightSelectRows: [],

      allPageSize: 10,
      leftTotal: 0,
      leftPageNo: 1,
      rightPageNp: 1,
      rightTotal: 0,
      data: [
        { id: 1, label: '一级 1', children:
          [
            { id: 4, label: '二级 1-1', children: [
              { id: 9, label: '三级 1-1-1' },
              { id: 10, label: '三级 1-1-2' }]
            }
          ]
        },
        { id: 2, label: '一级 2', children:
         [{ id: 5, label: '二级 2-1' },
           { id: 6, label: '二级 2-2' }]
        },
        { id: 3, label: '一级 3', children:
         [{ id: 7, label: '二级 3-1' },
           { id: 8, label: '二级 3-2' }]
        }
      ]
    }
  },
  watch: {
    isShow(newVal, oldVal) {
      console.log(newVal)
      if (newVal) {
        // this.getLeftTableData()
        this.rightTableData = []
        this.getOptionsData()
      } else {
        this.leftTableData = []
        this.rightTableData = []
        this.leftSelectRows = []
        this.rightSelectRows = []
      }
    }
  },
  methods: {
    /**
      左侧列表事件 start
    */
    getLeftTableData() {},
    searchHandle() {
      this.leftPageNo = 1
      this.getLeftTableData()
    },
    letfHandleSelectionChange(val) {
      this.leftSelectRows = val
    },
    leftToRightClick() {
      const tempArr = [...this.leftSelectRows]
      this.rightTableData = [...tempArr, ...this.rightTableData]
      this.leftSelectRows = []
      this.getLeftTableData()
    },
    leftHandleCurrentChange(val) {
      this.pageSize = val
    },
    leftHandleSelect(rows) {
      this.leftSelectRows = JSON.parse(JSON.stringify(rows))
    },
    /** end */

    /**
      右侧列表事件 start
    */
    rightHandleSelectionChange(val) {
      this.rightSelectRows = val
    },
    rightToLeftClick() {
      const tempArr = [...this.rightSelectRows]
      this.rightSelectRows = []
      this.removeRowsInTableDatas(tempArr, this.rightTableData)
      this.getLeftTableData()
    },
    rightHandleSelect(rows) {
      this.rightSelectRows = JSON.parse(JSON.stringify(rows))
    },
    /** end */

    handleSizeChange(val) {
      this.allPageSize = val
    },
    removeRowsInTableDatas(arr, allDatas) {
      if (!arr || arr.length <= 0) {
        return
      }
      if (!allDatas || allDatas.length <= 0) {
        return
      }
      arr.forEach(item => {
        allDatas.forEach(subItem => {
          if (item.id === subItem.id) {
            const index = allDatas.indexOf(item)
            allDatas.splice(index, 1)
          }
        })
      })
      return allDatas
    },
    submit() {
      if (this.rightTableData.length <= 0) {
        this.$message('Please select')
      } else {
        const selectedDataArr = []
        this.rightTableData.forEach(item => {
          selectedDataArr.push({
            id: item.id
          })
        })
        // const params = {
        //   businessId: this.businessId,
        //   cartons: selectedDataArr
        // }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/.el-tabs {
  height: 100%;
  .el-tabs__nav-scroll {
    .el-tabs__item:not(.is-active) {
      background: #f0f2f5 !important;
    }
  }
  .el-tabs__nav {
    margin-left: 0 !important;
    border: none !important;
  }
  .el-tabs__item {
    height: 40px !important;
  }

  .el-tabs__content {
    height: calc(100% - 36px);

    .el-tab-pane {
      height: 100%;
    }
  }
}
.tableTransfer-wrapper {
  display: flex;
  width: 100%;
  height: 350px;
  justify-content: flex-start;
  align-items: flex-start;
  .table-box {
    min-width: 200px;
    height: 100%;
    flex: 1;
  }
  .tab-box {
    padding: 0 !important;
    position: relative;
    border: 1px solid #dfe6ec;
  }
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 40px;
    color: #fafafa;
    background-color: #f0f2f5;
    border-bottom: 1px solid #e4e7ed;
  }
  .button-wrapper {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    margin: 10px;
    width: 45px;
    height: 100%;
    .button-margin {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
