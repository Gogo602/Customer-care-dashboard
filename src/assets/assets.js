import logo from './logo.png'



export const assets = {
    logo
}



export const mockTicketsData = [
  {
    id: 'ticket1',
    agent: 'PaxfulAgent001',
    status: 'Urgent',
    totalmsg: "5 messages",
    chatMessages: [
      { sender: 'Customer', text: 'My transaction was not successfull but were deducted', time: 'May 12, 10:45 AM (1h 53m ago)' },
      { sender: 'Support Agent', text: 'I understand your concern. Let me check the transaction details. Could you please provide your account email?', time: 'May 12, 10:45 AM (2h ago)' },
      { sender: 'Customer', text: 'My email is user@example.com', time: 'May 12, 10:45 AM (1h 53m ago)' },
    ],
    tradeDetails: {
      ticketId: 'PAX-12345',
      platform: 'Paxful',
      paidBy: 'Aisha Vendor',
      coinType: 'Bitcoin',
      amount: '₦1,550,000',
      offerRate: '₦1750 NGN/USD',
      paymentMethod: 'Bank Transfer',
      status: 'Paid',
      tradeLink: "AFYzaQA8stc",
      timeline: ' May 12, 2025 - 10:35 AM',
      fundsStatus: 'Funded',
      transactionType: "Funds Deposited"
    },
  },
  {
    id: 'ticket2',
    agent: 'SpeedyPay',
    status: 'Warning',
    totalmsg: "5 messages",
    chatMessages: [
      { sender: 'Support Agent', text: 'Hello, your transaction has been flagged for review.', time: 'May 11, 09:30 AM (1d ago)' },
      { sender: 'System', text: 'Please upload a proof of payment.', time: 'May 11, 09:35 AM (1d ago)' },
      { sender: 'Customer', text: 'Okay, I have uploaded the receipt.', time: 'May 11, 10:00 AM (1d ago)' },
      { sender: 'Support Agent', text: 'Thank you. We are reviewing it now.', time: 'May 11, 10:05 AM (1d ago)' },
      { sender: 'System', text: 'Review complete. Transaction cleared.', time: 'May 11, 11:00 AM (1d ago)' }
    ],
    tradeDetails: {
      ticketId: 'SPY-67890',
      platform: 'SpeedyPay',
      paidBy: 'John Doe',
      coinType: 'Ethereum',
      amount: '₦750,000',
      offerRate: '₦1700 NGN/USD',
      paymentMethod: 'Credit Card',
      status: 'Paid',
      tradeLink: "SPYbcD3eFgH",
      timeline: 'May 11, 2025 - 09:20 AM',
      fundsStatus: 'Paid',
      transactionType: "Transaction Cleared"
    },
  },
  {
    id: 'ticket3',
    agent: 'CryptoEx.',
    status: 'Info',
    totalmsg: "3 messages",
    chatMessages: [
      { sender: 'Support Agent', text: 'A new transaction has been initiated.', time: 'May 10, 08:00 PM (2d ago)' },
      { sender: 'System', text: 'Transaction pending confirmation.', time: 'May 10, 08:05 PM (2d ago)' },
      { sender: 'Customer', text: 'I am still waiting for the funds.', time: 'May 10, 09:15 PM (2d ago)' }
    ],
    tradeDetails: {
      ticketId: 'CRY-54321',
      platform: 'ctxe',
      paidBy: 'Jane Smith',
      coinType: 'Litecoin',
      amount: '₦2,500,000',
      offerRate: '₦1850 NGN/USD',
      paymentMethod: 'Bank Transfer',
      status: 'Info',
      tradeLink: "CRYklM2nOpQ",
      timeline: 'May 10, 2025 - 08:00 PM',
      fundsStatus: 'Pending',
      transactionType: "Pending Confirmation"
    },
  },
 {
    id: 'ticket4',
    agent: 'QuickTrade',
    status: 'Warning',
    totalmsg: "1 messages",
    chatMessages: [
      { sender: 'Customer', text: 'My funds are frozen. Please assist.', time: 'May 09, 11:30 AM (3d ago)' }
    ],
    tradeDetails: {
      ticketId: 'QTR-11223',
      platform: 'QuickTrade',
      paidBy: 'David Williams',
      coinType: 'Tether',
      amount: '₦820,000',
      offerRate: '₦1780 NGN/USD',
      paymentMethod: 'PayPal',
      status: 'Paid',
      tradeLink: "QTRqrS6tUvW",
      timeline: 'May 09, 2025 - 11:25 AM',
      fundsStatus: 'Frozen',
      transactionType: "Funds Frozen"
    },
  },
  {
    id: 'ticket5',
    agent: 'PaxfulAgent001',
    status: 'Urgent',
    totalmsg: "8 messages",
    chatMessages: [
      { sender: 'Customer', text: 'Hi, I need assistance with a large transaction.', time: 'May 10, 09:00 AM (4d ago)' },
      { sender: 'Support Agent', text: 'Hello, I can help. Can you provide the transaction ID?', time: 'May 10, 09:05 AM (4d ago)' },
      { sender: 'Customer', text: 'The ID is 987654321.', time: 'May 10, 09:10 AM (4d ago)' },
      { sender: 'Support Agent', text: 'Thank you. I see the transaction is pending verification. This can take up to 24 hours.', time: 'May 10, 09:15 AM (4d ago)' },
      { sender: 'Customer', text: 'Okay, thanks for the update.', time: 'May 10, 09:20 AM (4d ago)' },
      { sender: 'System', text: 'Ticket has been updated with new information.', time: 'May 10, 09:25 AM (4d ago)' },
      { sender: 'Customer', text: 'The funds are now available. Thank you!', time: 'May 11, 09:00 AM (3d ago)' },
      { sender: 'Support Agent', text: 'You’re welcome! Feel free to reach out if you have any more questions.', time: 'May 11, 09:05 AM (3d ago)' },
    ],
    tradeDetails: {
      ticketId: 'PAX-33445',
      platform: 'Paxful',
      paidBy: 'Emily White',
      coinType: 'USD Coin',
      amount: '₦3,250,000',
      offerRate: '₦1800 NGN/USD',
      paymentMethod: 'Wire Transfer',
      status: 'Funded',
      tradeLink: "PAXdeF7gHiJ",
      timeline: 'May 10, 2025 - 08:55 AM',
      fundsStatus: 'Verified',
      transactionType: "Funds Verified"
    },
  },
  {
    id: 'ticket6',
    agent: 'Binance',
    status: 'Urgent',
    totalmsg: "6 messages",
    chatMessages: [
      { sender: 'Support Agent', text: 'Welcome to Binance support. How can I assist you?', time: 'May 10, 05:00 PM (4d ago)' },
      { sender: 'Customer', text: 'My account is locked. I can\'t access my funds.', time: 'May 10, 05:05 PM (4d ago)' },
      { sender: 'Support Agent', text: 'I understand. Please provide your username and a description of the last activity on your account.', time: 'May 10, 05:10 PM (4d ago)' },
      { sender: 'Customer', text: 'Username: binanceUser01. I was trying to withdraw funds.', time: 'May 10, 05:15 PM (4d ago)' },
      { sender: 'Support Agent', text: 'Thank you. I have submitted a request to unlock your account. It may take up to 48 hours.', time: 'May 10, 05:20 PM (4d ago)' },
      { sender: 'System', text: 'Account unlock request has been submitted successfully.', time: 'May 10, 05:25 PM (4d ago)' },
    ],
    tradeDetails: {
      ticketId: 'BIN-99001',
      platform: 'Binance',
      paidBy: 'Carlos Gonzalez',
      coinType: 'Binance Coin',
      amount: '₦5,850,000',
      offerRate: '₦1900 NGN/USD',
      paymentMethod: 'Bank Transfer',
      status: 'Funded',
      tradeLink: "BINmnO8pQrS",
      timeline: 'May 10, 2025 - 04:58 PM',
      fundsStatus: 'Acc. Locked',
      transactionType: "Account Unlocking"
    },
  },
];
