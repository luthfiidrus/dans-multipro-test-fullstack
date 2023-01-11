import axios from 'axios';

export const getJobList = async (req, res) => {
    const description  = req.query.description;
    const location = req.query.location;
    const full_time = req.query.full_time;
    const page = req.query.page ? req.query.page : 1;
    console.log(req.query);
    let url = `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?`;
    if (description) {
        url += `&description=${description}`;
    }
    if (location) {
        url += `&location=${location}`;
    }
    if (full_time) {
        url += `&full_time=${full_time}`;
    }
    if (page) {
        url += `&page=${page}`;
    }
    try {
        const response = await axios.get(url);
        res.status(200).json(response.data);
    }
    catch (err) {
        console.log(err);
    }
}

export const getJobDetail = async (req, res) => {
    const id = req.param.id;
    let url = `http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`;
    try {
        const response = await axios.get(url);
        res.status(200).json(response.data);
    }
    catch (err) {
        console.log(err);
    }
}