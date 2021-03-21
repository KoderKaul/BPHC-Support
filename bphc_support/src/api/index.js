import axios from 'axios'

const url = 'http://localhost:5000/problems';

export const fectchProblems = () => axios.get(url);