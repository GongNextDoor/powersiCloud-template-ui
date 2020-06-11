<!-- 表格 穿梭框 -->
<template>
  <div class="tableTransfer-wrapper">
    <div class="table-box table-left-wrapper">
      <div class="box">
        <box-title title-name="未选择列表" title-need-handle>
          <search-input @output="leftSearch" />
        </box-title>
        <div class="box-body">
          <my-table-view
            :columns="leftCloumns"
            :data="leftTableData"
            :multiple-selection.sync="leftSelectRows"
          />
          <el-pagination
            :current-page="letCurrentPage"
            :page-size="10"
            layout="total, prev, pager, next"
            :total="40"
          />
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
        <box-title title-name="已选择列表" />
        <div class="box-body">
          <my-table-view
            :columns="rightCloumns"
            :data="rightTableData"
            :multiple-selection.sync="rightSelectRows"
          />
          <el-pagination
            :current-page="rightCurrentPage"
            :page-size="10"
            layout="total, prev, pager, next"
            :total="rightTableData.length"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { leftCloumns, rightCloumns } from './tableCloumns'
import BoxTitle from '@/views/components/PageLayers/box-title'
import SearchInput from '@/components/SearchInput'
export default {
  components: {
    BoxTitle,
    SearchInput
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
      type_options: [],

      leftLoadding: false,
      letCurrentPage: 1,
      leftCloumns: leftCloumns,
      leftTableData: [{
        name: '专家1',
        mobil: '13313131313'
      }, {
        name: '专家2',
        mobil: '13313131313'
      }],

      rightCurrentPage: 1,
      rightCloumns: rightCloumns,
      rightTableData: [],

      leftSelectRows: [],
      rightSelectRows: [],

      allPageSize: 10,
      leftTotal: 0,
      leftPageNo: 1,
      rightPageNp: 1,
      rightTotal: 0
    }
  },
  watch: {
    isShow(newVal, oldVal) {
      console.log(newVal)
      if (newVal) {
        // this.getLeftTableData();
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
    leftSearch(val) {
      console.log('search')
    },
    getLeftTableData() {

    },
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
    /** end */

    handleSizeChange(val) {
      this.allPageSize = val
    },
    removeRowsInTableDatas(arr, allDatas) {
      if (!arr || arr.length <= 0) { return }
      if (!allDatas || allDatas.length <= 0) { return }
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
            'id': item.id
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
	.tableTransfer-wrapper{
		display: flex;
		width: 100%;
		height: 350px;
		justify-content: flex-start;
		align-items: flex-start;
		.table-box{
			min-width: 200px;
			height: 100%;
			flex: 1;
		}
		.button-wrapper{
			display: flex;
			justify-content: center;
			align-content: center;
			flex-wrap: wrap;
			margin: 10px;
			width: 45px;
			height: 100%;
			.button-margin{
				width: 20px;
				height: 20px;
			}
		}
	}
</style>
