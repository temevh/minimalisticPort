import React from "react";

const certificates = [
  {
    title: "Cisco CyberOps Associate",
    issuer: "Cisco",
    date: "6/2025",
    description:
      "Cybersecurity Essentials, Threats,  Operations,  Architecture, and  Engineering",
    credentialUrl: "https://example.com/verify",
  },
  {
    title: "Cisco DevNet Associate",
    issuer: "Cisco",
    date: "6/2025",
    description: "Python, Docker, Software Development principles and DevOps",
    credentialUrl: "https://example.com/verify",
  },
  {
    title: "Cyber security base",
    issuer: "University of Helsinki",
    date: "3/2023",
    description:
      "Cybersecurity basics with the focus being on coding and code vulnerabilities",
    credentialUrl: "https://example.com/verify",
  },
];

export default function Certificates() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Certificates</h1>
        </div>

        <div className="gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-3">
                <h2 className="text-xl font-semibold text-white">
                  {cert.title}
                </h2>
                <p className="text-gray-600 text-sm">{cert.issuer}</p>
                <p className="text-xs text-gray-500 mb-2">{cert.date}</p>
                <p className="text-gray-700 text-sm mb-2">{cert.description}</p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Verify Certificate →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
