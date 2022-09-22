import React from "react";
import ColorInfo from "../components/ColorInfo";
import MainNav from "../components/MainNav";
import "./DesignSystem.css";

export default function DesignSystem() {
    return (
        <>
            <MainNav />
            <div className="design-system container flow">
                <h1>Design system</h1>
                <h2 className="uppercase ff-sans-cond fs-700 numbered-title">
                    <span>01</span> colors
                </h2>
                <div className="flex">
                    <ColorInfo
                        type="dark"
                        hex="#131416"
                        rgb="19, 20, 22"
                        hsl="218° 13% 8%"
                    />
                    <ColorInfo
                        type="white"
                        hex="#FFFFFF"
                        rgb="255, 255, 255"
                        hsl="0° 0% 100%"
                    />
                    <ColorInfo
                        type="light"
                        hex="#D2DFF9"
                        rgb="210, 223, 249"
                        hsl="220° 75% 90%"
                    />
                    <ColorInfo
                        type="accent-r"
                        hex="#E34F4F"
                        rgb="227, 79, 79"
                        hsl="0° 73% 60%"
                    />
                    <ColorInfo
                        type="accent-g"
                        hex="#3CF68D"
                        rgb="60, 246, 141"
                        hsl="146° 91% 60%"
                    />
                    <ColorInfo
                        type="accent-b"
                        hex="#4FC3E3"
                        rgb="68, 195, 227"
                        hsl="193° 73% 60%"
                    />
                </div>
                <h2 className="uppercase ff-sans-cond fs-700 numbered-title">
                    <span>02</span> typography
                </h2>
                <div className="flex">
                    <div
                        className="flow"
                        style={{
                            flexBasis: "100%",
                            "--flow-space": "4rem",
                        }}
                    >
                        <div>
                            <p className="text-light">
                                Heading 1 - Trirong - 900
                            </p>
                            <p className="fs-900 uppercase ff-serif">Lorem</p>
                        </div>
                        <div>
                            <p className="text-light">
                                Heading 2 - Trirong - 800
                            </p>
                            <p className="fs-800 uppercase ff-serif">Ipsum</p>
                        </div>
                        <div>
                            <p className="text-light">
                                Heading 3 - Trirong - 700
                            </p>
                            <p className="fs-700 uppercase ff-serif">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <div>
                            <p className="text-light">
                                Heading 4 - Trirong - 600
                            </p>
                            <p className="fs-600 uppercase ff-serif">
                                consectetur adipisicing elit.
                            </p>
                        </div>
                        <div>
                            <p className="text-light">
                                Heading 5 - Encode Sans Condensed Regular - 500
                                - 4.75 Character Space
                            </p>
                            <p className="text-light fs-500 uppercase ff-sans-cond letter-spacing-1">
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                        </div>
                    </div>

                    <div
                        className="flow"
                        style={{
                            flexBasis: "100%",
                            "--flow-space": "4rem",
                        }}
                    >
                        <div>
                            <p className="text-light">
                                Subheading 1 - Trirong - 500
                            </p>
                            <p className="fs-500 uppercase ff-serif">
                                123,456,789KM
                            </p>
                        </div>
                        <div>
                            <p className="text-light">
                                Subheading 2 - Encode Sans Condensed Regular -
                                200 - 2.35 Character Space
                            </p>
                            <p className="fs-200 ff-sans-cond uppercase letter-spacing-3">
                                Lorem Ipsum
                            </p>
                        </div>
                        <div>
                            <p className="text-light">
                                Nav Text - Encode Sans Condensed Regular - 300 -
                                2.7 Character Space
                            </p>
                            <p className="fs-300 ff-sans-cond uppercase letter-spacing-2">
                                Lorem Ipusm
                            </p>
                        </div>
                        <div>
                            <p className="text-light-dark">Body Text</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Phasellus hendrerit.
                                Pellentesque aliquet nibh nec urna. In nisi
                                neque, aliquet vel, dapibus id, mattis vel,
                                nisi. Sed pretium, ligula sollicitudin laoreet
                                viverra, tortor libero sodales leo, eget blandit
                                nunc tortor eu nibh. Nullam mollis. Ut justo.
                                Suspendisse potenti.Lorem ipsum dolor sit amet,
                                consectetuer adipiscing elit. Phasellus
                                hendrerit. Pellentesque aliquet nibh nec urna.
                                In nisi neque, aliquet vel, dapibus id, mattis
                                vel, nisi. Sed pretium, ligula sollicitudin
                                laoreet viverra, tortor libero sodales leo, eget
                                blandit nunc tortor eu nibh. Nullam mollis. Ut
                                justo. Suspendisse potenti.Lorem ipsum dolor sit
                                amet, consectetuer adipiscing elit. Phasellus
                                hendrerit. Pellentesque aliquet nibh nec urna.
                                In nisi neque, aliquet vel, dapibus id, mattis
                                vel, nisi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
