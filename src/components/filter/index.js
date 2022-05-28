import React, { useState } from 'react'
import styles from './style.module.css'

import { Container, Form, FormSelect, Button, FormControl } from 'react-bootstrap'

import filterCar1 from '../../helpers/filterCar1'
import filterCar2 from '../../helpers/filterCar2'

export default function Filter({ cars, setCars, normalCars }) {
    const [tipeDriver, setTipeDriver] = useState('')
    const [tanggal, setTanggal] = useState('')
    const [waktu, setWaktu] = useState('')
    const [penumpang, setPenumpang] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form has been submitted!')
        console.log(tipeDriver)
        console.log(tanggal)
        console.log(waktu)
        console.log(penumpang)

        if (penumpang) {
            setCars(filterCar1({ array: cars, avail: tipeDriver, tanggal: tanggal, waktu: waktu, kapasitas: penumpang }))
            console.log('===Complete SET!===')
        } else if (!penumpang) {
            setCars(filterCar2({ array: cars, avail: tipeDriver, tanggal: tanggal, waktu: waktu }))
            console.log('===A flaw!===')
        } else {
            console.log("Why would this happen?")
        }
    }

    return (
        <div className="container-fluid mb-5">
            <div className={styles.forms}>
                <Container className="card" id={styles.forms}>
                    <Form className={styles.filter_form} onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col">
                                <p>Tipe Driver</p>
                                <Form.Group>
                                    <FormSelect
                                        value={tipeDriver}
                                        onChange={(e) => setTipeDriver(e.target.value)}
                                    >
                                        <option hidden>Pilih Tipe Driver</option>
                                        <option value="true">Dengan Sopir</option>
                                        <option value="false">Tanpa Sopir (Lepas Kunci)</option>
                                    </FormSelect>
                                </Form.Group>
                            </div>
                            <div className="col">
                                <p>Tanggal</p>
                                <Form.Group>
                                    <Form.Control
                                        type="date"
                                        placeholder="Pilih Tanggal"
                                        value={tanggal}
                                        onChange={(e) => setTanggal(e.target.value)}
                                    />
                                </Form.Group>
                            </div>
                            <div className="col">
                                <p>Waktu Jemput/ Ambil</p>
                                <Form.Group>
                                    <FormSelect
                                        value={waktu}
                                        onChange={(e) => setWaktu(e.target.value)}
                                    >
                                        <option hidden>Pilih Waktu</option>
                                        <option value="8">08:00 WIB</option>
                                        <option value="9">09:00 WIB</option>
                                        <option value="10">10:00 WIB</option>
                                        <option value="11">11:00 WIB</option>
                                        <option value="23">23:00 WIB</option>
                                    </FormSelect>
                                </Form.Group>
                            </div>
                            <div className="col-3">
                                <p>Jumlah Penumpang (Opsional)</p>
                                <Form.Group>
                                    <FormSelect
                                        value={penumpang}
                                        onChange={(e) => setPenumpang(e.target.value)}
                                    >
                                        <option default value="null">Jumlah Penumpang</option>
                                        <option value="1">1 orang</option>
                                        <option value="2">2 orang</option>
                                        <option value="3">3 orang</option>
                                        <option value="4">4 orang</option>
                                        <option value="5">5 orang</option>
                                        <option value="6">6 orang</option>
                                    </FormSelect>
                                </Form.Group>
                            </div>
                            <div className="col-2">
                                <Button
                                    variant="success"
                                    type="submit"
                                    value="submit"
                                    className={styles.filter_submit}
                                >
                                    Cari Mobil
                                </Button>
                            </div>
                        </div>
                    </Form>
                </Container>
            </div>
        </div>
    )
}
