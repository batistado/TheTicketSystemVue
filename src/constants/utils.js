const ticketDetailsFields = ['Ticket Number', 'Requestor', 'IT Owner', 'Ticket type', 'Severity', 'Priority', 'Satisfaction', 'Ticket Creation Date',
'Requestor Seniority', 'Days Open', 'Filed Against']


const ticketDetailsMapping = {
    'Ticket Number': 'ticket',
    Requestor: 'Requestor',
    'IT Owner': 'ITOwner',
    'Ticket type': 'TicketType',
    Severity: 'Severity',
    Priority: 'Priority',
    Satisfaction: 'Satisfaction',
    'Ticket Creation Date': 'Ticket Creation Date',
    'Requestor Seniority': 'RequestorSeniority',
    'Days Open': 'daysOpen',
    'Ticket Creation Date': 'Ticket Creation Date',
    'Filed Against': 'FiledAgainst',
}

const ticketSummaryFields = ticketDetailsFields.slice(0, 8);


const ticketSummaryMapping = {};
const ticketSummaryWidths = {};
const summaryMapping = {};

for (let field of ticketSummaryFields){
    ticketSummaryMapping[field] = ticketDetailsMapping[field];

    if (field.length > 11){
        ticketSummaryWidths[field] = 215;
    } else {
        ticketSummaryWidths[field] = 150;
    }
}

const summaryFields = ['Filed Against', 'Ticket type', 'Severity', 'Priority', 'Satisfaction',
'Requestor Seniority'];

for (let field of summaryFields){
    summaryMapping[field] = ticketDetailsMapping[field];
}

export {
    ticketDetailsFields,
    ticketDetailsMapping,
    ticketSummaryFields,
    ticketSummaryMapping,
    summaryFields,
    summaryMapping,
    ticketSummaryWidths,
}