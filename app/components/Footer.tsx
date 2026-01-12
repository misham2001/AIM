'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <div>
            <footer className="w-full py-6 px-4 bg-slate-500">
                <h2 className="sr-only">Footer</h2>
                <div className="mx-auto max-w-7xl flex flex-col items-center text-gray-200">
                    <div className="w-full flex flex-col md:flex-row flex-wrap justify-between items-start gap-8">

                        {/* :SOCIAL NETWORKS */}
                        <div className="w-full md:w-auto py-4 px-2 flex flex-wrap justify-center md:justify-start items-center gap-6">
                            <a
                                href="https://www.facebook.com/share/g/14gi7MMghz/"
                                className="text-gray-200 hover:text-white transition-colors duration-200"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="sr-only">Facebook</span>
                                <svg
                                    fill="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a
                                href="https://wa.me/919875456234"
                                className="text-gray-200 hover:text-white transition-colors duration-200"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="sr-only">WhatsApp</span>
                                <svg
                                    fill="currentColor"
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/aim_chennai?igsh=MWk0bGY1OGxpanZ5cw=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-200 hover:text-white transition-colors duration-200"
                            >
                                <span className="sr-only">Instagram</span>
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                >
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/john-davidson-a6616433b/?originalSubdomain=in"
                                className="text-gray-200 hover:text-white transition-colors duration-200"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="sr-only">LinkedIn</span>
                                <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="0"
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="none"
                                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                    ></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </div>

                        {/* :ADDRESS */}
                        <div className="w-full md:w-auto px-2">
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <FontAwesomeIcon
                                    icon={faMapMarkerAlt}
                                    className="text-gray-300 text-xl flex-shrink-0"
                                />
                                <a
                                    href="https://goo.gl/maps/oNqHxFb8JUCqxqav6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-200 hover:text-white transition-colors duration-200 text-center md:text-left text-sm"
                                >
                                    <span className="font-semibold">Address: </span>
                                    <span>Ashwas Church of God, Polachery, Mambakkam, Tamil Nadu 600127</span>
                                </a>
                            </div>
                        </div>

                        {/* :CONTACT */}
                        <div className="w-full md:w-auto px-2 flex flex-col items-center md:items-start gap-3">
                            <div className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 flex-shrink-0 text-gray-300"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <a
                                    href="mailto:ashwasministory@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-gray-200 font-medium tracking-wide hover:text-white transition-colors duration-200"
                                >
                                    ashwasministory@gmail.com
                                </a>
                            </div>

                            <div className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 flex-shrink-0 text-gray-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <span className="text-xs text-gray-200 font-bold">209-217-2459</span>
                            </div>
                        </div>
                    </div>

                    {/* :COPYRIGHT */}
                    <p className="pt-10 text-sm text-gray-300 text-center">
                        &copy; 2025, Ashwas Church of God
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
