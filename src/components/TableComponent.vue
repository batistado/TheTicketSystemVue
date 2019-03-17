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
        :data="data"
        stripe
        border
        @sort-change="sortChange"
        @row-click="rowClicked"
        style="width: 100%">
        <el-table-column
                v-for="field in ticketSummaryFields"
                :key="field"
                :label="field"
                :prop="ticketSummaryMapping[field]"
                sortable="custom"
                />
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
import { ticketSummaryFields, ticketSummaryMapping } from '../constants/utils';

export default {
  name: 'TableComponent',
  data() {
      return {
          data: [],
          search: '',
          orderBy: 'ticket',
          pageSize: 10,
          pageNo: 0,
          total: 0,
          isAscending: true,
          ticketSummaryFields,
          ticketSummaryMapping
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
      rowClicked(row) {
          console.log(row);
          this.$emit('rowClicked', row.ticket);
      },
      
      sortChange({column, order, prop}) {
            this.isAscending = order === "ascending" ? true : false;
            this.orderBy = prop;
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
