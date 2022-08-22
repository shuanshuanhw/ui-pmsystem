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


   <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>

<div class="example-pagination-block">
    <div class="example-demonstration"></div>
    <el-pagination 
    :page-sizes="[10, 20, 30, 40, 50, 100]"
    layout="prev, pager, next, jumper,sizes, ->, total" 
    :total="50" />
  </div>

</div>
</template>


<script>
export default {
  data() {
    return {
        tableData: [],
        formData: {
        scope: '',
        category: '',
        keyword: '', 
        },
        url: '/u41.png',
		ifAdmin: false,
		permission:'2',
        options : [
  {
    value: '待评提议',
    label: '待评提议',
  },
  {
    value: '已通过提议',
    label: '已通过提议',
  },
  {
    value: '待修改提议',
    label: '待修改提议',
  },
  {
    value: '不同意提议',
    label: '不同意提议',
  },
  {
    value: 'Option5',
    label: 'Option5',
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
    // 从后台取出数据集，根据分页
    getTableData(keyword,category,scope)
    {

    },
    onSubmit(){
        
    }
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