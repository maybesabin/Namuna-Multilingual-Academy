import heroImage from "../../../public/hero-image.jpg";
import placeholder from "../../../public/placeholder.png";
import Image from "next/image";
import PersonCard from "./components/PersonCard";
import AboutImage from "../../../public/about-image.jpg"
import TextHeader from "@/components/TextHeader";
import ShivaBahadur from "../../../public/shiva-bahadur-gharti-maagar.png";
import RoshniPun from "../../../public/roshni-pun.jpg";
import RamPrasad from "../../../public/ram-prasad-bhattarai.jpg"
import ShivaPrasad from "../../../public/shiva-prasad-jaisi.jpg"
import BishnuHamal from "../../../public/bishnu-hamal.jpg"
import SitaGhartiMagar from "../../../public/sita-gharti-magar.jpg"
import GaneshMagar from "../../../public/ganesh-magar.jpg"

export default function page() {

  const teamMembers = [
    {
      name: "Ganesh Kumar Gharti Magar",
      position: "Chairman",
      imageUrl: GaneshMagar.src
    },
    {
      name: "Bishnu Hamal",
      position: "Principal",
      imageUrl: BishnuHamal.src
    },
    {
      name: "Shiva Bahadur Gharti Magar",
      position: "Board Member",
      imageUrl: ShivaBahadur.src
    },
    {
      name: "Roshni Pun",
      position: "Board Member",
      imageUrl: RoshniPun.src
    },
    {
      name: "Ram Prasad Bhattarai",
      position: "Board Member",
      imageUrl: RamPrasad.src
    },
    {
      name: "Shiva Prasad Jaisi",
      position: "Board Member",
      imageUrl: ShivaPrasad.src
    },
    {
      name: "Sita Gharti Magar",
      position: "Board Member",
      imageUrl: SitaGhartiMagar.src
    }
  ];

  const blueBoxes = [
    { title: "2082 B.S", subtitle: "Year Established" },
    { title: "Multi", subtitle: "Language Curriculum" },
    { title: "100%", subtitle: "Student-Centered" }
  ]

  return (
    <>
      {/* About Namuna */}
      <div className="flex items-end lg:flex-row flex-col md:gap-12 w-full">

        <div className="lg:w-1/2 w-full">
          <TextHeader caption="what drives us" title="About Namuna" />

          <p className="xl:text-lg md:text-base text-sm mt-6 text-gray-600">
            Established in 2082 B.S., Namuna Multilingual Academy is a growing institution dedicated to fostering language proficiency and holistic learning in a supportive and forward-looking environment. With a focus on empowering students through communication, creativity, and critical thinking, the academy aims to prepare learners for opportunities in an increasingly connected world.
            <br /> <br />
            <span className="md:block hidden">
              At Namuna Multilingual Academy, we specialize in multilingual education, combining modern teaching methods with experienced instructors to ensure effective and engaging learning experiences. Our commitment goes beyond language skills—we strive to build confidence, cultural awareness, and practical knowledge that help students succeed both academically and professionally.
            </span>
          </p>

          {/* Blue boxes */}
          <div className="md:grid hidden lg:grid-cols-3 grid-cols-2 gap-3 mt-6">
            {blueBoxes.map((box, index) => (
              <div key={index} className="bg-blue-100/60 py-6 rounded-xl border border-blue-200 text-center">
                <h3 className="text-3xl font-bold text-blue-800 font-serif">{box.title}</h3>
                <p className="text-gray-600 text-xs mt-1">{box.subtitle}</p>
              </div>
            ))}
          </div>

        </div>

        <Image
          className="lg:w-1/2 w-full md:h-112 h-80 object-cover rounded-xl"
          src={heroImage}
          alt={placeholder.src}
        />
      </div>

      {/* Our Mission */}
      <div className="flex items-start lg:flex-row flex-col-reverse md:gap-12 gap-6 w-full">

        <Image
          className="lg:w-1/2 w-full md:h-112 h-80 object-cover rounded-xl"
          src={AboutImage}
          alt={placeholder.src}
        />

        <div className="lg:w-1/2 w-full lg:text-right">
          <TextHeader caption="what drives us" title="Our Mission" position="right" />

          <p className="xl:text-lg md:text-base text-sm mt-6 text-gray-600">
            Our mission is to empower learners with strong multilingual skills, confidence, and a global perspective that prepares them for real-world opportunities. We are dedicated to creating an engaging and inclusive learning environment where students can develop communication abilities, critical thinking, and cultural understanding.

            <span className="md:block hidden">
              Through innovative teaching methods and a student-centered approach, we strive to nurture individuals who are not only academically capable but also adaptable, creative, and ready to succeed in an ever-evolving world.
            </span>
          </p>

        </div>
      </div>

      {/* Board Members  */}
      <div className="flex flex-col items-center w-full mt-12">
        <TextHeader caption="meet the team" title="Our Team" position="center" />

        <div className="flex flex-wrap justify-center gap-12 w-full mt-12">
          {teamMembers.map((member, index) => (
            <PersonCard
              key={index}
              name={member.name}
              position={member.position}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
}