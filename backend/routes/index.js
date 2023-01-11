import express from 'express';
import { Login } from '../controller/Users.js';
import { getJobList, getJobDetail } from '../controller/GetJob.js';
import { VerifyToken } from '../middleware/VerifyToken.js';

const router = express.Router();

router.post('/login', Login);
router.get('/get-job-list', VerifyToken, getJobList);
router.get('/get-job-detail', VerifyToken, getJobDetail);

export default router;