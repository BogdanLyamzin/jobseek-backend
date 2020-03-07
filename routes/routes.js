const addHR = require("./hr/addHR");
const putHR = require("./hr/putHR");
const getAllHR = require("./hr/getAllHR");
const getOneHR = require("./hr/getOneHR");
const deleteHR = require("./hr/deleteHR");

const addVacancy = require("./vacancies/addVacancy");
const putVacancy = require("./vacancies/putVacancy");
const getAllVacancy = require("./vacancies/getAllVacancy");
const getOneVacancy = require("./vacancies/getOneVacancy");
const deleteVacancy = require("./vacancies/deleteVacancy");
const vacancyPostSend = require('./vacancies/sentReceived/postSend');
const vacancyPutSend = require('./vacancies/sentReceived/putSend');
const vacancyDeleteSend = require('./vacancies/sentReceived/deleteSend');

const getReviews = require("./reviews/getReviews");
const addReviews = require("./reviews/addReviews");
const editReviews = require("./reviews/editReviews");
const deleteReviews = require("./reviews/deleteReviews");
const getOneReview = require("./reviews/getOneReview");

const getAllReports = require("./reviews/reports/getAllReports");
const addReports = require("./reviews/reports/addReports");
const deleteReports = require("./reviews/reports/deleteReports");
const getOneReports = require("./reviews/reports/getOneReports");

const updateCompany = require("./companies/updateCompany");
const delCompany = require("./companies/delCompany");
const addCompany = require("./companies/addCompany");
const getAllCompany = require("./companies/getAllCompanies");
const getOneCompany = require("./companies/getOneCompany");

const postCategory = require("./categories/postCategory");
const putCategory = require("./categories/putCategory");
const getCategories = require("./categories/getCategories");
const getCategoryId = require("./categories/getCategoryId");
const deleteCategory = require("./categories/deleteCategory");

const postProfession = require("./professions/postProfession");
const putProfession = require("./professions/putProfession");
const getProfessions = require("./professions/getProfessions");
const getProfessionId = require("./professions/getProfessionId");
const deleteProfession = require("./professions/deleteProfession");

const postSkill = require("./skills/postSkill");
const putSkill = require("./skills/putSkill");
const getSkills = require("./skills/getSkills");
const getSkillId = require("./skills/getSkillId");
const deleteSkill = require("./skills/deleteSkill");

const postSphere = require("./spheres/postSphere");
const putSphere = require("./spheres/putSphere");
const getSpheres = require("./spheres/getSphere");
const getSphereId = require("./spheres/getSphereId");
const deleteSphere = require("./spheres/deleteSphere");

const postVacancyTemplate = require("./vacancyTemplate/postVacancyTemplate");
const putVacancyTemplate = require("./vacancyTemplate/putVacancyTemplate");
const getVacancyTemplates = require("./vacancyTemplate/getVacancyTemplates");
const getVacancyTemplateId = require("./vacancyTemplate/getVacancyTemplateId");
const deleteVacancyTemplate = require("./vacancyTemplate/deleteVacancyTemplate");

const addCand = require("./candidates/addCand");
const delCand = require("./candidates/delCand");
const getAllCand = require("./candidates/getAllCand");
const getOneCand = require("./candidates/getOneCand");
const putCand = require("./candidates/putCand");

const addCv = require("./candidates/cv/addCv");
const delCv = require("./candidates/cv/delCv");
const getAllCv = require("./candidates/cv/getAllCv");
const getOneCv = require("./candidates/cv/getOneCv");
const putCv = require("./candidates/cv/putCv");
const cvPostSend = require('./candidates/sentReceived/postSend');
const cvPutSend = require('./candidates/sentReceived/putSend');
const cvDeleteSend = require('./candidates/sentReceived/deleteSend');

const login = require("./auth/login");
const mailConfirm = require("./auth/mailConfirm");
const register = require("./auth/register");
const resetPassport = require("./auth/resetpassword");
const setNewPass = require("./auth/setNewPass");
const socialAuth = require("./auth/socialAuth");
const admin = require("./auth/admin")

const suitableCandidates = require("./candidates/cv/suitableCandidates");
const suitableVacancies = require("./vacancies/suitableVacancies");

module.exports = (app, passport) => {
    addHR(app, passport);
    putHR(app, passport);
    getAllHR(app, passport);
    getOneHR(app, passport);
    deleteHR(app, passport);

    addVacancy(app, passport);
    putVacancy(app, passport);
    getAllVacancy(app, passport);
    getOneVacancy(app, passport);
    deleteVacancy(app, passport);
    vacancyPostSend(app, passport);
    vacancyPutSend(app, passport);
    vacancyDeleteSend(app, passport);

    getReviews(app, passport);
    addReviews(app, passport);
    editReviews(app, passport);
    deleteReviews(app, passport);
    getOneReview(app, passport);

    getAllReports(app, passport); 
    addReports(app, passport); 
    deleteReports(app, passport);
    getOneReports(app, passport);

    updateCompany(app, passport);
    delCompany(app, passport);
    addCompany(app, passport);
    getAllCompany(app, passport);
    getOneCompany(app, passport);

    postCategory(app, passport);
    putCategory(app, passport);
    getCategories(app, passport);
    getCategoryId(app, passport);
    deleteCategory(app, passport);

    postProfession(app, passport);
    putProfession(app, passport);
    getProfessions(app, passport);
    getProfessionId(app, passport);
    deleteProfession(app, passport);

    postSkill(app, passport);
    putSkill(app, passport);
    getSkills(app, passport);
    getSkillId(app, passport);
    deleteSkill(app, passport);

    postSphere(app, passport);
    putSphere(app, passport);
    getSpheres(app, passport);
    getSphereId(app, passport);
    deleteSphere(app, passport);

    postVacancyTemplate(app, passport);
    putVacancyTemplate(app, passport);
    getVacancyTemplates(app, passport);
    getVacancyTemplateId(app, passport);
    deleteVacancyTemplate(app, passport);
    getOneCompany(app, passport);

    addCand(app, passport);
    putCand(app, passport);
    getAllCand(app, passport);
    getOneCand(app, passport);
    delCand(app, passport);

    addCv(app, passport);
    putCv(app, passport);
    getAllCv(app, passport);
    getOneCv(app, passport);
    delCv(app, passport);
    cvPostSend(app, passport);
    cvPutSend(app, passport);
    cvDeleteSend(app, passport);

    login(app);
    mailConfirm(app);
    register(app);
    resetPassport(app);
    setNewPass(app);
    socialAuth(app);
    admin(app)

    suitableCandidates(app, passport);
    suitableVacancies(app, passport);
};
