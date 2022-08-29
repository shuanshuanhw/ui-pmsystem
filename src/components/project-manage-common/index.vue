<template>
<div>
  <div class="search">

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
      <el-button  @click="onSubmit" plain>搜索</el-button>
    </el-form-item>
   </el-form>

  </div>

  <div class="button"><el-button  @click="this.$router.push('project-common-newItem')" plain>新建立项</el-button></div>
  <el-divider></el-divider>


     <el-table 
   :data="tableData" 
   style="width: 100%"
   :default-sort="{ prop: 'defaultTime', order: 'descending' }"
   
   >
    <el-table-column prop="id" label="id" />
    <el-table-column prop="projectName" label="项目名" />
    <el-table-column label="状态" >
      <template #default="scope">
      <el-tag class="ml-2" type="info">{{scope.row.state}}</el-tag>
      </template>
    
      </el-table-column>
    <el-table-column prop="state" label="我的工作">
      <template #default="scope">
      <el-tag class="ml-2" type="info">{{scope.row.state}}</el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="defaultTime" label="日期" sortable  />

    <el-table-column label="操作">
      <template #default="scope">
        <el-button @click="pushToItem(scope.$index, scope.row)"
          >打开</el-button>
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
import {getTableData} from '@/api/project.js'
export default{
  data() {
    return {
        tableData: [],
        formData: {
        scope: '我全部的立项',
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
    value: '同意立项',
    label: '同意立项',
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
    value: '不同意立项',
    label: '不同意立项',
  },{
    value: '全部立项',
    label: '全部立项',
  },
],
        options2 : [
  {
    value: '我全部的立项',
    label: '我全部的立项',
  },{
    value: '我负责的立项',
    label: '我负责的立项',
  },{
    value: '我参与的立项',
    label: '我参与的立项',
  },
]
    };
  },
    methods:{
    pushToItem(index, row){
      this.$store.commit('setId',row.id)
      this.$router.push('advise-common-item').catch((e)=>{
                    console.log(e)
                  });
    },
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
          this.tableData = resp.data.data.projectTableData
          this.page.total = resp.data.data.total
        }
      })
    },
    onSubmit(){
this.getTableData(this.formData.keyword,this.formData.category,this.formData.scope,1,this.page.pageSize);
    }
  },
  created(){

  },
  mounted(){
this.getTableData(this.formData.keyword,this.formData.category,this.formData.scope,this.page.pageNumber,this.page.pageSize);
  }
}
</script>
<style scoped>

</style>