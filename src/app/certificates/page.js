import React from "react";

const certificates = [
  {
    title: "Cisco CyberOps Associate",
    issuer: "Cisco",
    date: "5/2025",
    description:
      "Cybersecurity Essentials, Threats,  Operations,  Architecture, and  Engineering",
    imageUrl: "/path-to-certificate-image.jpg",
    credentialUrl: "https://example.com/verify",
  },
  {
    title: "Cisco DevNet Associate",
    issuer: "Cisco",
    date: "5/2025",
    description: "Python, Docker, Software Development principles and DevOps",
    imageUrl: "/path-to-certificate-image.jpg", // You'll need to add your certificate images to the public folder
    credentialUrl: "https://example.com/verify", // Optional: Link to verify the certificate
  },
  {
    title: "Cyber security base",
    issuer: "University of Helsinki",
    date: "3/2023",
    description:
      "Cybersecurity basics with the focus being on coding and code vulnerabilities",
    imageUrl: "/path-to-certificate-image.jpg", // You'll need to add your certificate images to the public folder
    credentialUrl: "https://example.com/verify", // Optional: Link to verify the certificate
  },
];

export default function Certificates() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Certificates</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {cert.title}
                </h2>
                <p className="text-gray-600 mb-2">{cert.issuer}</p>
                <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
                <p className="text-gray-700 mb-4">{cert.description}</p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
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
