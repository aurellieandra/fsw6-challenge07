import React from 'react'
import styles from './style.module.css'

import { Container, Form, FormSelect, Button } from 'react-bootstrap'

import filterCarFunction from '../../helpers/filterCar'

export default function Filter({ cars, setCars }) {
    // tinggal di modifikasi di bagian ini saja, nanti dilanjutkan lagi
    // lagi sakit gabisa mikir
    const onFilterAvailable = () => {
        const filteredCar = filterCarFunction({ array: cars, available: "true" })
        setCars(filteredCar)
    }

    return (
        <div className="container-fluid mb-5">
            <div className={styles.forms}>
                <Container className="card" id={styles.forms}>
                    <Form className={styles.filter_form}>
                        <div className="row">
                            <div className="col">
                                <p>Tipe Driver</p>
                                <Form.Group>
                                    <FormSelect id="tipeDriverValue">
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
                                        id="tanggalValue"
                                    />
                                </Form.Group>
                            </div>
                            <div className="col">
                                <p>Waktu Jemput/ Ambil</p>
                                <Form.Group>
                                    <FormSelect id="waktuValue">
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
                                    <FormSelect id="penumpangValue">
                                        <option value="null">Jumlah Penumpang</option>
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
                            <div onClick={() => onFilterAvailable()}>Click me to filter availability true!</div>
                        </div>
                    </Form>
                </Container>
            </div>
        </div>
    )
}
