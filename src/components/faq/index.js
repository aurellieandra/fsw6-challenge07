import React from 'react'

import { Accordion, AccordionCollapse } from 'react-bootstrap'
import AccordionBody from 'react-bootstrap/esm/AccordionBody'
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader'
import AccordionItem from 'react-bootstrap/esm/AccordionItem'

export default function FAQ() {
    return (
        <div className="container-fluid mt-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h4 className="fw-bold">Frequently Asked Question</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div className="col-sm">
                        <Accordion defaultActiveKey="1">
                            <AccordionItem>
                                <AccordionHeader>
                                    Apa saja syarat yang dibutuhkan?
                                </AccordionHeader>
                                <AccordionBody>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion><br />
                        <Accordion defaultActiveKey="1">
                            <AccordionItem>
                                <AccordionHeader>
                                    Berapa hari minimal sewa mobil lepas kunci?
                                </AccordionHeader>
                                <AccordionBody>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion> <br />
                        <Accordion defaultActiveKey="1">
                            <AccordionItem>
                                <AccordionHeader>
                                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                                </AccordionHeader>
                                <AccordionBody>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion> <br />
                        <Accordion defaultActiveKey="1">
                            <AccordionItem>
                                <AccordionHeader>
                                    Apakah ada biaya antar-jemput?
                                </AccordionHeader>
                                <AccordionBody>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion> <br />
                        <Accordion defaultActiveKey="1">
                            <AccordionItem>
                                <AccordionHeader>
                                    Bagaimana jika terjadi kecelakaan?
                                </AccordionHeader>
                                <AccordionBody>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion> <br />
                    </div>
                </div>
            </div>
        </div >
    )
}