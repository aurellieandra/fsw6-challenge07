// ini ga dipake, cuma sebagai referensi untuk bikin di helpernya

var AllCar = null

const getAllCar = () => {
    fetch('/get-cars')
        .then((response) => response.json())
        .then((data) => {
            const body = document.getElementById('cm-cards')
            for (let i = 0; i < data.length; i++) {
                const Car = document.createElement('div')
                Car.className = "col-3"

                Car.innerHTML = `
                    <div class="card cm-content">
                        <img src="${data[i].image}" alt="${data[i].manufacture}" style="width: 255px; height: 200px;">
                        <h5 style="padding-top: 20px">${data[i].model}</h5>
                        <h4>Rp. ${data[i].rentPerDay} / hari</h4>
                        <p style="height: 100px;">${data[i].description}</p>

                        <div class="row">
                            <div class="col-1">
                                <img class="cm-icon" src="./images/cm-icon/fi_users.png">
                            </div>
                            <div class="col">
                                <p>${data[i].capacity} orang</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-1">
                                <img class="cm-icon" src="./images/cm-icon/fi_settings.png">
                            </div>
                            <div class="col">
                                <p>${data[i].transmission}</p>
                            </div>
                        </div>      

                        <div class="row">
                            <div class="col-1">
                                <img class="cm-icon" src="./images/cm-icon/fi_calendar.png">
                            </div>
                            <div class="col">
                                <p>${data[i].year}</p>
                            </div>
                        </div>
                        
                        <a href="#" class="btn btn-success text-white" style="margin-bottom: 5px;">Pilih Mobil</a>
                    </div>
                `
                body.appendChild(Car)

            }
            AllCar = data
        })
}

getAllCar()

const filterCar = (avail, tanggal, waktu, kapasitas) => {
    // console.log(new Date('2022-03-23T15:49:05.563Z'))
    let newCar = AllCar.filter(car =>
        // {
        // console.log(new Date(car.availableAt).getHours(), waktu, '==========')
        // return new Date(car.availableAt).getHours() > waktu
        car.available.toString() == avail &&
        new Date(car.availableAt) < new Date(tanggal) &&
        new Date(car.availableAt).getHours() > waktu &&
        car.capacity == kapasitas
    );
    const body = document.getElementById('cm-cards')
    body.innerHTML = ''

    newCar.forEach((data) => {
        const Car = document.createElement('div')
        Car.className = "col-3"

        Car.innerHTML = `
            <div class="card cm-content">
                <img src="${data.image}" alt="${data.manufacture}" style="width: 255px; height: 200px;">
                <h5 style="padding-top: 20px">${data.model}</h5>
                <h4>Rp. ${data.rentPerDay} / hari</h4>
                <p style="height: 100px;">${data.description}</p>

                <div class="row">
                    <div class="col-1">
                        <img class="cm-icon" src="./images/cm-icon/fi_users.png">
                    </div>
                    <div class="col">
                        <p>${data.capacity} orang</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-1">
                        <img class="cm-icon" src="./images/cm-icon/fi_settings.png">
                    </div>
                    <div class="col">
                        <p>${data.transmission}</p>
                    </div>
                </div>      

                <div class="row">
                    <div class="col-1">
                        <img class="cm-icon" src="./images/cm-icon/fi_calendar.png">
                    </div>
                    <div class="col">
                        <p>${data.year}</p>
                    </div>
                </div>
                        
                <a href="#" class="btn btn-success text-white" style="margin-bottom: 5px;">Pilih Mobil</a>
            </div>
            `
        body.appendChild(Car);
    })
}

const filterCar2 = (avail, tanggal, waktu) => {
    let newCar = AllCar.filter(car =>
        car.available.toString() == avail &&
        new Date(car.availableAt) < new Date(tanggal) &&
        new Date(car.availableAt).getHours() > waktu
    );
    const body = document.getElementById('cm-cards')
    body.innerHTML = ''

    newCar.forEach((data) => {
        const Car = document.createElement('div')
        Car.className = "col-3"

        Car.innerHTML = `
            <div class="card cm-content">
                <img src="${data.image}" alt="${data.manufacture}" style="width: 255px; height: 200px;">
                <h5 style="padding-top: 20px">${data.model}</h5>
                <h4>Rp. ${data.rentPerDay} / hari</h4>
                <p style="height: 100px;">${data.description}</p>

                <div class="row">
                    <div class="col-1">
                        <img class="cm-icon" src="./images/cm-icon/fi_users.png">
                    </div>
                    <div class="col">
                        <p>${data.capacity} orang</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-1">
                        <img class="cm-icon" src="./images/cm-icon/fi_settings.png">
                    </div>
                    <div class="col">
                        <p>${data.transmission}</p>
                    </div>
                </div>      

                <div class="row">
                    <div class="col-1">
                        <img class="cm-icon" src="./images/cm-icon/fi_calendar.png">
                    </div>
                    <div class="col">
                        <p>${data.year}</p>
                    </div>
                </div>
                        
                <a href="#" class="btn btn-success text-white" style="margin-bottom: 5px;">Pilih Mobil</a>
            </div>
            `
        body.appendChild(Car);
    })
}

const getSelectValue = () => {
    let selectedValue = document.getElementById('list').value
    return selectedValue
}

const getDateValue = () => {
    let dateValue = document.getElementById('list2date').value
    let dateInput = new Date(dateValue)
    return dateInput
}

const getSelectValue3 = () => {
    let selectedValue3 = document.getElementById('list3').value
    return selectedValue3
}

const getSelectValue4 = () => {
    let selectedValue4 = document.getElementById('list4').value
    return selectedValue4
}

const cmForm = document.getElementById('cm-form')

cmForm.addEventListener('submit', (e) => {
    e.preventDefault()

    console.log('Form has been submitted!')
    console.log(getSelectValue())
    console.log(getDateValue())
    console.log(getSelectValue3())
    console.log(getSelectValue4())

    if (getSelectValue4() == 'null') {
        filterCar2(getSelectValue(), getDateValue(), getSelectValue3())
    } else {
        filterCar(getSelectValue(), getDateValue(), getSelectValue3(), getSelectValue4())
    }
})