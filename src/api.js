
const baseUrl = process.env.REACT_APP_SERVICES_BASE_URL || '';

const getPath = (resource) => baseUrl + resource;

export default getPath ;
