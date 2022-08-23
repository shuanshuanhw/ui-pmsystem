<template>
<div>
   <el-form :inline="true" :model="formData" class="demo-form-inline">
   <el-form-item label="关键词">
     <el-input v-model="formData.keyword" placeholder="输入关键词" />
   </el-form-item>

   <el-form-item label="类别">
    <el-select v-model="formData.category" class="m-2" placeholder="Select" size="large">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
   </el-form-item>

   <el-form-item label="范围">
    <el-select v-model="formData.scope" class="m-2" placeholder="Select" size="large">
    <el-option
      v-for="item in options2"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
   </el-form-item>
   <el-form-item>
      <el-button type="primary" @click="onSubmit" plain>搜索</el-button>
    </el-form-item>
   </el-form>


   <el-table 
   :data="tableData" 
   style="width: 100%"
   :default-sort="{ prop: 'defaultTime', order: 'descending' }"
   
   >
    <el-table-column prop="id" label="id" />
    <el-table-column prop="adviseName" label="提议名" />
    <el-table-column prop="state" label="状态" />
    <el-table-column prop="defaultTime" label="日期" sortable  />

        <el-table-column label="操作">
      <template #default="scope">
        <el-button size="small" type="danger" @click="handleEdit(scope.$index, scope.row)"
          >打开</el-button
        >
      </template>
    </el-table-column>


  </el-table>

<div class="example-pagination-block">
    <div class="example-demonstration"></div>
    <el-pagination 
    :page-sizes="[10, 20, 30, 40, 50, 100]"
    layout="prev, pager, next, jumper,sizes, ->, total" 
    :total="page.total"
    :default-page-size = "20"
    @current-change="currentChange"
    @size-change="sizeChange"
     />
  </div>

</div>
</template>


<script>
import {getTableData} from '@/api/advise.js'
export default {
  data() {
    return {
        tableData: [],
        formData: {
        scope: '我的提议 + 其他',
        category: '已经提交',
        keyword: '', 
        },
        page:{
          total: 0,
          pageNumber: 1,
          pageSize: 20
        },
        url: '/u41.png',
		ifAdmin: false,
		permission:'2',
        options : [
  {
    value: '同意提议',
    label: '同意提议',
  },
  {
    value: '已经提交',
    label: '已经提交',
  },
  {
    value: '修改待评',
    label: '修改待评',
  },
  {
    value: '不同意提议',
    label: '不同意提议',
  },
],
        options2 : [
  {
    value: '我的提议 + 其他',
    label: '我的提议 + 其他',
  },
  {
    value: '我的提议',
    label: '我的提议',
  },
]
    };
  },
  methods:{
      currentChange(e)
      {
        console.log('页码变了',e)
this.getTableData(this.formData.keyword,this.formData.category,this.formData.scope,e,this.page.pageSize);
      },
      sizeChange(e)
      {
        console.log(e)
        this.page.pageSize = e
        this.getTableData(this.formData.keyword,this.formData.category,this.formData.scope,1,this.page.pageSize);
      },
    // 从后台取出数据集，根据分页
    getTableData(keyword,category,scope,pageNumber,pageSize)
    {
     
      getTableData(keyword,category,scope,pageNumber,pageSize).then(resp=>{
        console.log(resp)
        if(resp.data.flag)
        {
          this.tableData = resp.data.data.adviseTableData
          this.page.total = resp.data.data.total
        }
      })
    },
    onSubmit(){
this.getTableData(this.formData.keyword,this.formData.category,this.formData.scope,1,this.page.pageSize);
    }
  },
  created(){
        this.getTableData(this.formData.keyword,this.formData.category,this.formData.scope,this.page.pageNumber,this.page.pageSize);
  },
  mounted(){

  }

}
</script>
<style scoped>
.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}
.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
</style>