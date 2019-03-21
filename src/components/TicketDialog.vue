<template>
  <div class="ticket-dialog">
    <el-dialog
    title="Ticket Information"
    :visible.sync="dialogVisible"
    width="30%"
    >
    <TicketDetails :ticketId="ticketId"/>
    <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="onClose">Close</el-button>
    </span>
    </el-dialog>
  </div>
</template>

<script>
import TicketDetails from './TicketDetails.vue';

export default {
  name: 'ticket-dialog',
  components: {
      TicketDetails,
  },
  props: {
      dialogVisible: Boolean,
      ticketId: Number,
  },
  methods: {
      onClose() {
          this.$emit('update:dialogVisible', false);
      }
  }
}
</script>