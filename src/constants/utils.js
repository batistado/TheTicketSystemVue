const ticketDetailsFields = ['Ticket Number', 'Requestor', 'IT Owner', 'Filed Against', 'Ticket type', 'Severity', 'Priority', 'Satisfaction',
'Requestor Seniority', 'Days Open', 'Ticket Creation Date']


const ticketDetailsMapping = {
    'Ticket Number': 'ticket',
    Requestor: 'Requestor',
    'IT Owner': 'ITOwner',
    'Filed Against': 'FiledAgainst',
    'Ticket type': 'TicketType',
    Severity: 'Severity',
    Priority: 'Priority',
    Satisfaction: 'Satisfaction',
    'Requestor Seniority': 'RequestorSeniority',
    'Days Open': 'daysOpen',
    'Ticket Creation Date': 'Ticket Creation Date',
}

const ticketSummaryFields = ticketDetailsFields.slice(0, 8);


const ticketSummaryMapping = {};

for (let field of ticketSummaryFields){
    ticketSummaryMapping[field] = ticketDetailsMapping[field];
}

export {
    ticketDetailsFields,
    ticketDetailsMapping,
    ticketSummaryFields,
    ticketSummaryMapping
}