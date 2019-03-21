<template>
  <div class="ticket-details">
      <b-list-group>
        <b-list-group-item v-for="field in ticketDetailsFields" :key="field">
            <div class="ticket-details-row">
                <div>{{field}}</div>  <div>{{data[ticketDetailsMapping[field]]}}</div>
            </div>
        </b-list-group-item>
      </b-list-group>
  </div>
</template>

<script>
import { http } from '../middleware/http';
import { ticketDetailsFields, ticketDetailsMapping } from '../constants/utils';

export default {
  name: 'ticket-details',
  props: {
      ticketId: Number,
  },
  watch: {
      ticketId: function() {
          this.loadData();
      }
  },
  data() {
      return {
          data: {},
          ticketDetailsFields,
          ticketDetailsMapping,
      }
  },
  computed: {
      queryParams() {
          return {
              ticketId: this.ticketId,
          };
      }
  },
  methods: {
    loadData() {
          http.get('fetchTicketDetails', {params: this.queryParams}).then(response => {
                this.data = response.data.data;
            }).catch(e => {
                // catch error
            });
      },
  },
  created() {
      this.loadData();
  }
}
</script>

<style scoped>
.ticket-details-row {
    display: flex;
    justify-content: space-between;
}
</style>
