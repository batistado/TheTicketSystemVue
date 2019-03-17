<template>
  <div class="home">
    <TableComponent @rowClicked="handleRowClick"/>
    <TicketDialog :dialog-visible.sync="dialogVisible" :ticketId="ticketId"/>
  </div>
</template>

<script>
import TableComponent from '@/components/TableComponent.vue'
import TicketDialog from '@/components/TicketDialog.vue'

export default {
  name: 'home',
  components: {
    TableComponent,
    TicketDialog
  },
  data() {
    return {
      dialogVisible: false,
      ticketId: 0,
    }
  },
  methods: {
    handleRowClick(ticketId) {
      this.ticketId = ticketId;
      this.dialogVisible = true;
    }
  }
}
</script>
