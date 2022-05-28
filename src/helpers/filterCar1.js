export default ({ array, avail, tanggal, waktu, kapasitas }) => {
    return array.filter(car =>
        car.available.toString() == avail &&
        new Date(car.availableAt) < new Date(tanggal) &&
        new Date(car.availableAt).getHours() > waktu &&
        car.capacity == kapasitas
    );
}