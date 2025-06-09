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
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/web.jpg" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
              1.Facebook Ad Campaigns


              </h2>
              <p className="text-white-50 md:text-xl">
             
              </p>
              <ul className="text-white-50 md:text-xl space-y-2">
                <li>🎯 Objective: Drive sales for a trending skincare item</li>
                <li>📊 Strategy: Retargeting + testimonials + interest targeting</li>
                <li>🧪 Format: Short UGC video + carousel ads</li>
                <li>✅ Result: 3.5x ROAS in 14 days</li>
              </ul>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/dz.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>A/B Testing Strategy</h2>
              <li>Headlines: "Glow Up Now" vs "Your Skin Deserves Better"
              </li>
              <li>CTA: "Shop Now" vs "Discover More"
              </li>
              <li>Creative formats: Static image vs customer video
              </li>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/smart sclae.png" alt="YC Directory App" />
              </div>
              <h2> Landing Page Optimization
              </h2>
              <li>I redesigned landing pages to highlight:
              </li>
              <li>Reviews + real results
              </li>
              <li>Trust icons + secure checkout
              </li>
              <li>📈 Result: +18% higher conversion rate
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
