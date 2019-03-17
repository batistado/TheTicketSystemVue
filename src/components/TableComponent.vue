<template>
  <div class="table">
    <el-card class="box-card">
        <div slot="header" class="table-header">
            <h2>Summary</h2>
            <div>
                <el-input
                        v-model="search"
                        placeholder="Type to search"
                        clearable/>
            </div>
        </div>
         <el-table
        :data="tableData"
        stripe
        border
        @sort-change="sortChange"
        @row-click="rowClicked"
        style="width: 100%">
            <el-table-column
                label="Ticket Number"
                prop="ticketId"
                sortable="custom"
                >
            </el-table-column>
            <el-table-column
                label="Requestor"
                sortable="custom"
                prop="requestor">
            </el-table-column>
            <el-table-column
                label="IT Owner"
                sortable="custom"
                prop="itOwner">
            </el-table-column>
            <el-table-column
                label="Filed Against"
                sortable="custom"
                prop="filedAgainst">
            </el-table-column>
             <el-table-column
                label="Ticket Type"
                sortable="custom"
                prop="ticketType">
            </el-table-column>
            <el-table-column
                label="Severity"
                sortable="custom"
                prop="severity">
            </el-table-column>
            <el-table-column
                label="Priority"
                sortable="custom"
                prop="priority">
            </el-table-column>
            <el-table-column
                label="Satisfaction"
                sortable="custom"
                prop="satisfaction">
            </el-table-column>
        </el-table>

        <div class="pagination">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="total"
                @current-change="pageChanged">
            </el-pagination>
        </div>
    </el-card>
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
          orderBy: 'ticket',
          pageSize: 10,
          pageNo: 0,
          total: 0,
          isAscending: true,
      }
  },
  watch: {
      search: function() {
          this.loadData();
      }
  },
  computed: {
      requestBody() {
          return {
            searchBy: this.search,
            orderBy: this.orderBy,
            pageSize: this.pageSize,
            pageNo: this.pageNo,
            isAscending: this.isAscending,    
          };
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

      rowClicked(row) {
          this.$emit('rowClicked', row.ticketId);
      },
      
      sortChange({column, order, prop}) {
            this.isAscending = order === "ascending" ? true : false;

            if (prop === "ticketId"){
                this.orderBy = "ticket";
            } else if (prop === "requestor") {
                this.orderBy = "Requestor";
            } else if (prop === "itOwner"){
                this.orderBy = "ITOwner";
            } else if (prop === "filedAgainst") {
                this.orderBy = "FiledAgainst";
            } else if (prop === "ticketType") {
                this.orderBy = "TicketType";
            } else if (prop === "severity"){
                this.orderBy = "Severity";
            } else if (prop === "priority") {
                this.orderBy = "Priority";
            } else {
                this.orderBy = "Satisfaction";
            }

            this.loadData();
      },

      pageChanged(newPageNo) {
          this.pageNo = newPageNo - 1;
          this.loadData();
      },

      loadData() {
          http.post('fetchAllTickets', this.requestBody).then(response => {
                this.data = response.data.data;
                this.total = response.data.totalCount;
                this.cleanData();
            }).catch(e => {
                this.$message({
                    message: e,
                    type: 'error',
                });
            });
      },
  },
  created() {
      this.loadData();
  }
}
</script>


<style scoped>
.pagination {
    margin: auto;
    width: 45%;
}

.table-header {
    display: flex;
    justify-content: space-between;
}
</style>
