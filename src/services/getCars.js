import api from './baseUrl'

export default async () => {
    try {
        const response = await api({
            url: '/fnurhidayat/probable-garbanzo/main/data/cars.min.json'
        })
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
}