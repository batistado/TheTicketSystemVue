<template>
  <div class="table">
        <el-table
        :data="filteredData"
        style="width: 100%">
            <el-table-column
                label="Ticket Number"
                prop="ticketId">
            </el-table-column>
            <el-table-column
                label="Requestor"
                prop="requestor">
            </el-table-column>
            <el-table-column
                label="IT Owner"
                prop="itOwner">
            </el-table-column>
            <el-table-column
                label="Filed Against"
                prop="filedAgainst">
            </el-table-column>
            
             <el-table-column
                label="Ticket Type"
                prop="ticketType">
            </el-table-column>
            <el-table-column
                label="Severity"
                prop="severity">
            </el-table-column>
            <el-table-column
                label="Priority"
                prop="priority">
            </el-table-column>
            <el-table-column
                label="Satisfaction"
                prop="satisfaction">
            </el-table-column>
            <el-table-column
                align="right">
                <template slot="header" slot-scope="scope">
                    <el-input
                    v-model="search"
                    size="mini"
                    placeholder="Type to search"
                    clearable/>
                </template>
            </el-table-column>
        </el-table>
  </div>
</template>

<script>
import { http } from '../middleware/http';

export default {
  name: 'TableComponent',
  data() {
      return {
          data: [],
          tableData: [],
          search: '',
          orderBy: '',
          pageSize: 10,
          pageNo: 0,
          isAscending: true,
      }
  },
  computed: {
      filteredData() {
          if (this.search === undefined || this.search.length == 0 || this.search === ''){
              return this.tableData;
          }

          return this.tableData.filter(o => {
              for (let p in o){
                  if (o[p].toLowerCase().includes(this.search.toLowerCase()))
                    return true;
              }

              return false;
          });
      }
  },
  methods: {
      cleanData() {
          this.tableData = this.data.map(o => {
              return {
                ticketId: o.ticket,
                requestor: o.Requestor,
                itOwner: o.ITOwner,
                filedAgainst: o.FiledAgainst,
                ticketType: o.TicketType,
                severity: o.Severity.split(' - ')[1],
                priority: o.Priority.split(' - ')[1],
                satisfaction: o.Satisfaction.split(' - ')[1],
              }
          });
      },
      
      loadData() {
          const req = {
            searchBy: this.search,
            orderBy: this.orderBy,
            pageSize: this.pageSize,
            pageNo: this.pageNo,
            isAscending: this.isAscending,    
          };

          http.post('fetchData', req).then(response => {
                this.data = response.data.data;
                this.cleanData();
            }).catch(e => {
                console.log(e);
            });
      },
  },
  created() {
      this.loadData();
  }
}
</script>


<style scoped>
</style>
