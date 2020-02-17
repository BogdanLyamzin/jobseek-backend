const addHR = require('./hr/addHR');
const putHR = require('./hr/putHR');
const getAllHR = require('./hr/getAllHR');
const getOneHR = require('./hr/getOneHR');
const deleteHR = require('./hr/deleteHR');

const addVacancy = require('./vacancies/addVacancy');
const putVacancy = require('./vacancies/putVacancy');
const getAllVacancy = require('./vacancies/getAllVacancy');
const getOneVacancy = require('./vacancies/getOneVacancy');
const deleteVacancy = require('./vacancies/deleteVacancy');

const getReviews = require('./reviews/getReviews');
const addReviews = require('./reviews/addReviews');
const editReviews = require('./reviews/editReviews');
const deleteReviews = require('./reviews/deleteReviews');
const getOneReview = require('./reviews/getOneReview');

const updateCompany = require("./companies/updateCompany");
const delCompany = require("./companies/delCompany");
const addCompany = require("./companies/addCompany");
const getAllCompany = require("./companies/getAllCompanies");
const getOneCompany = require("./companies/getOneCompany");

module.exports = (app) => {  
    addHR(app);
    putHR(app);
    getAllHR(app);
    getOneHR(app);
    deleteHR(app);
    
    addVacancy(app);
    putVacancy(app);
    getAllVacancy(app);
    getOneVacancy(app);
    deleteVacancy(app);
    
    getReviews(app);
    addReviews(app);
    editReviews(app);
    deleteReviews(app);
    getOneReview(app);
    
    updateCompany(app);
    delCompany(app);
    addCompany(app);
    getAllCompany(app);
    getOneCompany(app)
};