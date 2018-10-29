import Axios from 'axios'

export default Axios.create({
	baseURL: '/',
	timeout: 5000,
})
