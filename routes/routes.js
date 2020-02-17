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

const postCategory = require('./categories/postCategory');
const putCategory = require('./categories/putCategory');
const getCategories = require('./categories/getCategories');
const getCategoryId = require('./categories/getCategoryId');
const deleteCategory = require('./categories/deleteCategory');

const postProfession = require('./professions/postProfession');
const putProfession = require('./professions/putProfession');
const getProfessions = require('./professions/getProfessions');
const getProfessionId = require('./professions/getProfessionId');
const deleteProfession = require('./professions/deleteProfession');

const postSkill = require('./skills/postSkill');
const putSkill = require('./skills/putSkill');
const getSkills = require('./skills/getSkills');
const getSkillId = require('./skills/getSkillId');
const deleteSkill = require('./skills/deleteSkill');

const postSphere = require('./spheres/postSphere');
const putSphere = require('./spheres/putSphere');
const getSpheres = require('./spheres/getSphere');
const getSphereId = require('./spheres/getSphereId');
const deleteSphere = require('./spheres/deleteSphere');

const postVacancyTemplate = require('./vacancyTemplate/postVacancyTemplate');
const putVacancyTemplate = require('./vacancyTemplate/putVacancyTemplate');
const getVacancyTemplates = require('./vacancyTemplate/getVacancyTemplates');
const getVacancyTemplateId = require('./vacancyTemplate/getVacancyTemplateId');
const deleteVacancyTemplate = require('./vacancyTemplate/deleteVacancyTemplate');

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
    getOneCompany(app);

    postCategory(app);
    putCategory(app);
    getCategories(app);
    getCategoryId(app);
    deleteCategory(app);

    postProfession(app);
    putProfession(app);
    getProfessions(app);
    getProfessionId(app);
    deleteProfession(app);

    postSkill(app);
    putSkill(app);
    getSkills(app);
    getSkillId(app);
    deleteSkill(app);

    postSphere(app);
    putSphere(app);
    getSpheres(app);
    getSphereId(app);
    deleteSphere(app);

    postVacancyTemplate(app);
    putVacancyTemplate(app);
    getVacancyTemplates(app);
    getVacancyTemplateId(app);
    deleteVacancyTemplate(app);
};