<template>
  <div class="home">
    <SummaryCard/>
    <TableComponent @rowClicked="handleRowClick"/>
    <TicketDialog :dialog-visible.sync="dialogVisible" :ticketId="ticketId"/>
  </div>
</template>

<script>
import TableComponent from '@/components/TableComponent.vue'
import TicketDialog from '@/components/TicketDialog.vue'
import SummaryCard from '@/components/SummaryCard.vue'

export default {
  name: 'home',
  components: {
    TableComponent,
    TicketDialog,
    SummaryCard
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

