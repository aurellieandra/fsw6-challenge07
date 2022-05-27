// export default ({ array, minValue }) => {
//     return array.filter(item => item.capacity > minValue)
// }

// FUNCTION SEMENTARA, SUDAH BERHASIL
export default ({ array, available }) => {
    const filteredData = array.filter((car) =>
        car.available.toString() == available
    )

    return filteredData
}

// FUNCTION YANG SEHARUSNYA DIGUNAKAN NANTI (BELUM JADI, LAGI SAKIT)

// export default () => {
//     const filterCar = ({ array, avail, tanggal, waktu, kapasitas }) => {
//         let newCar = array.filter(car =>
//             car.available.toString() == avail &&
//             new Date(car.availableAt) < new Date(tanggal) &&
//             new Date(car.availableAt).getHours() > waktu &&
//             car.capacity == kapasitas
//         );

//         return filterCar
//     }

//     const filterCar2 = ({array, avail, tanggal, waktu}) => {
//         let newCar = array.filter(car =>
//             car.available.toString() == avail &&
//             new Date(car.availableAt) < new Date(tanggal) &&
//             new Date(car.availableAt).getHours() > waktu
//         );
        
//         return filterCar2
//     }
// }