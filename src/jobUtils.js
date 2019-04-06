const formatCurrency = (amount) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 6
  });
  return formatter.format(amount);
}

const formatDate = (date) => new Date(date).toLocaleDateString()

const dateSorter = (a,b) => Date.parse(b.submittedAt) - Date.parse(a.submittedAt)

export default {
  formatCurrency,
  formatDate,
  dateSorter
};
