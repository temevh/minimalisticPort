// Writing & research. Newest first.
//
// To add a blog post, add an object like this at the top of the array:
// {
//   slug: "my-post",              // used in the URL: /writing/my-post
//   type: "Blog",                 // "Blog" | "Thesis" | anything you like
//   title: "My post title",
//   date: "2026-11-10",           // optional, ISO date
//   language: "English",
//   summary: "One or two sentences shown in the list.",
//   tags: ["React", "Architecture"],
//   body: ["First paragraph.", "Second paragraph."],
//   links: [{ label: "Original post", href: "https://..." }],
// }
export const writing = [
  {
    slug: "microsoft-ai-tools-thesis",
    type: "Thesis",
    level: "Bachelor's thesis",
    institution: "Tampere University",
    language: "Finnish (English abstract)",
    title:
      "Microsoftin tekoälytyökalujen kartoitus : Azure ja muut ohjelmointia tukevat tekoälyratkaisut",
    // Translated by the site owner's assistant for convenience, not the official title.
    titleEn:
      "Mapping Microsoft's AI tools: Azure and other AI solutions supporting programming",
    summary:
      "A survey of Microsoft's AI tools (Azure Machine Learning, GitHub Copilot, Azure Databricks) and how they can support the software development process.",
    tags: ["AI", "GitHub Copilot", "Azure", "Software development"],
    takeaways: [
      "Microsoft's tools offer versatile, scalable solutions that can make developers more efficient and improve software quality.",
      "GitHub Copilot can generate and correct code and help with everyday tasks, speeding up development and reducing errors.",
      "Challenges remain: model inaccuracies and the need for human oversight.",
      "The ecosystem is broad and complex, so it takes dedicated expertise to use well.",
    ],
    abstract: {
      en: [
        "The rapid development and widespread adoption of artificial intelligence technologies have significantly transformed the field of software development. This bachelor's thesis explores the AI tools offered by Microsoft and their potential applications, particularly in supporting the programming process. The study examines tools such as Azure Machine Learning, GitHub Copilot, and Azure Databricks.",
        "The thesis presents the key features of Microsoft's AI tools, their use cases, and their integration into software development processes. Based on the research, Microsoft's tools offer versatile and scalable solutions that can significantly enhance the efficiency of software developers and improve the quality of software. For instance, GitHub Copilot can generate and correct code and assist software developers with daily tasks, accelerating the development process and reducing the number of errors.",
        "The study also highlights that while Microsoft's AI tools provide significant advantages, their use comes with challenges, such as inaccuracies in models and the need for oversight. Furthermore, Microsoft's ecosystem of tools is extensive and complex, which may require developers to acquire specific expertise and familiarity.",
      ],
      fi: [
        "Tekoälyteknologioiden nopea kehitys ja laajamittainen käyttöönotto ovat merkittävästi muuttaneet ohjelmistokehityksen kenttää. Tämä kandidaatintutkielma kartoittaa Microsoftin tarjoamia tekoälytyökaluja ja niiden hyödyntämismahdollisuuksia erityisesti ohjelmointiprosessin tukena. Tutkimuksessa käsitellään työkaluja kuten Azure Machine Learning, GitHub Copilot, Azure Databricks.",
        "Työssä esitetään Microsoftin tekoälytyökalujen keskeiset ominaisuudet, käyttömahdollisuudet ja niiden integrointi osaksi ohjelmistokehitysprosesseja. Tutkimuksen perusteella Microsoftin työkalut tarjoavat monipuolisia ja skaalautuvia ratkaisuja, jotka voivat merkittävästi tehostaa ohjelmistokehittäjien työtä ja parantaa ohjelmistojen laatua. Esimerkiksi GitHub Copilot voi tuottaa ja korjata koodia sekä auttaa ohjelmistokehittäjiä päivittäisissä tehtävissä, mikä nopeuttaa kehitysprosessia ja vähentää virheiden määrää.",
        "Tutkimus osoittaa myös, että vaikka Microsoftin tekoälytyökalut tarjoavat merkittäviä etuja, niiden käyttöön liittyy haasteita, kuten mallien virheellisyys ja tarve valvontaan. Lisäksi Microsoftin työkalujen ekosysteemi on laaja ja monimutkainen, mikä voi vaatia kehittäjiltä erityistä perehtyneisyyttä ja osaamista.",
      ],
    },
    links: [
      {
        label: "Read the thesis on Trepo (Tampere University)",
        href: "https://trepo.tuni.fi/handle/10024/225371",
      },
    ],
  },
];

export const getPost = (slug) => writing.find((post) => post.slug === slug);
