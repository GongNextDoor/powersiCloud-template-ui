<!-- 辅助工具 -->
<template>
  <div class="tcm-catalog-query">
    <section class="layer layer-result">
      <div class="box">
        <div class="box-body">
          <div class="bg">&nbsp;</div>
          <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="孕周计算" name="week-calculation">
              <week-calculation />
            </el-tab-pane>
            <el-tab-pane label="ICD编码查询" name="icd-code-query">
              <icd-code-query />
            </el-tab-pane>
            <el-tab-pane label="异地医院级别查询" name="hospital-leve">
              <hospital-level />
            </el-tab-pane>
            <el-tab-pane label="医保区划代码查询" name="adresss-code-query">
              <adresss-code-query />
            </el-tab-pane>
            <el-tab-pane label="邮政编码查询" name="zip-code-query">
              <zip-code-query />
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </section>

  </div>
</template>

<script type="text/javascript">
import AdresssCodeQuery from './adresssCodeQuery'
import HospitalLevel from './hospitalLevel'
import IcdCodeQuery from './icdCodeQuery'
import WeekCalculation from './weekCalculation'
import ZipCodeQuery from './zipCodeQuery'
export default {
  components: {
    AdresssCodeQuery,
    HospitalLevel,
    IcdCodeQuery,
    WeekCalculation,
    ZipCodeQuery
  },
  data() {
    return {
      activeName: 'week-calculation'
    }
  }
}
</script>

<style lang="scss" scoped>
.tcm-catalog-query {
  height: 100%;
  .layer-result {
    height: 100%;

    & > .box > .box-body {
      padding: 0;
      height: 100%;
      position: relative;

      .bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 35px;
        color: #fafafa;
        background-color: #fafafa;
        border-bottom: 1px solid #E4E7ED;
      }

      /deep/.el-tabs {
        height: 100%;

        .el-tabs__content {
          height: calc(100% - 36px);

          .el-tab-pane {
            height: 100%;
          }
        }
        .el-tabs__nav {
          margin-left: 0 !important;
          border: none !important;
        }
        .el-tabs__item {
          height: 35px !important;
        }
      }
    }
  }
}
</style>
