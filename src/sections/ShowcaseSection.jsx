import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <style jsx>{`
        .image-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.3s ease;
        }

        .image-wrapper:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .image-wrapper:hover img {
          opacity: 0.8;
          filter: brightness(1.1);
          transform: scale(1.05);
        }

        .image-wrapper a {
          display: block;
          width: 100%;
          height: 100%;
        }
      `}</style>
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <a href="https://yacine-dz-dev25.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img src="/images/logo.jpg" alt="Ryde App Interface" />
              </a>
            </div>
            <div className="text-content">
              <h2>Facebook Ad Campaigns</h2>
              <ul>
                <li> My passion for web development encouraged me to launch myself into the world of freelancing.</li>
                <li> The potential of e-commerce inspired me to create digital solutions for businesses</li>
                <li> The desire to design modern and interactive interfaces motivated me to start working hard</li>
              </ul>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper">
                <a href="https://yacine-devv.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/images/y.JPG"
                    alt="Library Management Platform"
                  />
                </a>
              </div>
              <div className="text-content">
                <h2>Frontend project</h2>
                <ul>
                  <li>. I work in web development and print media.</li>
                  <li >. Consists of creating your website so that it is both functional,</li>
                  <li>. Convey your message and identity in the most creative way possible</li>
                </ul>
              </div>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper">
                <a href="https://www.facebook.com/yacine.ar.1/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/web.jpg" alt="YC Directory App" />
                </a>
              </div>
              <div className="text-content">
              <h2>Facebook Ad Campaigns</h2>
              <ul>
                <li>🎯 <b>Objective:</b> Drive sales for a trending skincare item</li>
                <li>📊 <b>Strategy:</b> Retargeting + testimonials + interest targeting</li>
                <li>🧪 <b>Format:</b> Short UGC video + carousel ads</li>
                <li>📈 <b>Result:</b> 3.5x ROAS in 14 days</li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
