import React from "react";

const certificates = [
  {
    title: "Cisco CyberOps Associate",
    issuer: "Cisco",
    date: "June 2025",
    description:
      "Cybersecurity Essentials, Threats, Operations, Architecture, and Engineering",
    credentialUrl:
      "https://drive.google.com/file/d/1Jq6R3AqHSMl7SbN4L5IxRDC05kWgU6tX/view?usp=sharing",
  },
  {
    title: "Cisco DevNet Associate",
    issuer: "Cisco",
    date: "June 2025",
    description: "Python, Docker, Software Development principles and DevOps",
    credentialUrl:
      "https://drive.google.com/file/d/1YJ_r3Pkl-eUecQM0K6TcgUE6LctSubVn/view?usp=sharing",
  },
  {
    title: "Cyber security base",
    issuer: "University of Helsinki",
    date: "March 2023",
    description:
      "Cybersecurity basics with the focus being on coding and code vulnerabilities",
    credentialUrl: "https://example.com/verify",
  },
];

export default function Certificates() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="lg:text-3xl text-xl font-bold text-white">
          Professional Certificates 🎓
        </h1>
        <p className="lg:text-sm text-xs text-graytext italic mt-2">
          Formal qualifications and continuous learning
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-800 rounded-lg p-4 lg:p-6 hover:border-accentOrange transition-all duration-300 hover:shadow-lg hover:shadow-accentOrange/10"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-1">
                <h2 className="text-lg lg:text-xl font-bold text-white mb-1">
                  {cert.title}
                </h2>
                <p className="text-sm lg:text-base text-graytext font-semibold">
                  {cert.issuer}
                </p>
              </div>
            </div>

            <p className="text-xs lg:text-sm text-graytext mb-3">
              📅 {cert.date}
            </p>

            <p className="text-sm lg:text-base text-white mb-4">
              {cert.description}
            </p>

            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm lg:text-base text-blue-500 hover:text-accentOrange font-medium transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Show certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
