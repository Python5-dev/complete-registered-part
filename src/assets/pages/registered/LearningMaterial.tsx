import { useRef } from "react";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";

const LearningMaterial = () => {
  const cardRef = useRef(null);
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;

    cardRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <div className="h-screen w-full flex justify-center items-center px-4 py-10">
      <div className={`flex flex-wrap justify-center gap-10 animate__animated animate__fadeInUp`}>
        <Card
          ref={cardRef}
          className="shadow-2xl hover:scale-110 text-center border border-[#003366] rounded-3xl bg-white/10 backdrop-blur-lg text-white transition-transform duration-300"
          hoverable
          style={{ width: 265, transformStyle: "preserve-3d" }}
          onClick={() => navigate("/slides")}
        >
          <img
            src="videos-removebg-preview.png"
            alt="slides"
            className="transition-transform duration-500"
          />
          <h3 className="text-[#003366] font-black text-lg">Slides</h3>
        </Card>
        <Card
          ref={cardRef}
          className="shadow-2xl hover:scale-110 text-center border border-[#003366] rounded-3xl bg-white/10 backdrop-blur-lg text-white transition-transform duration-300"
          hoverable
          style={{ width: 265, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={() => navigate("/books")}
        >
          <img
            src="books-removebg-preview.png"
            alt="books"
            className="transition-transform duration-500 py-8"
          />
          <h3 className="text-[#003366] font-black text-lg">Books</h3>
        </Card>
        <Card
          ref={cardRef}
          className="shadow-2xl hover:scale-110 text-center border border-[#003366] rounded-3xl bg-white/10 backdrop-blur-lg text-white transition-transform duration-300"
          hoverable
          style={{ width: 265, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={() => navigate("/videos")}
        >
          <img
            src="videos-removebg-preview (1).png"
            alt="videos"
            className="transition-transform duration-500 py-8"
          />
          <h3 className="text-[#003366] font-black text-lg">Videos</h3>
        </Card>
        <Card
          ref={cardRef}
          className="shadow-2xl hover:scale-110 text-center border border-[#003366] rounded-3xl bg-white/10 backdrop-blur-lg text-white transition-transform duration-300"
          hoverable
          style={{ width: 265, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={() => navigate("/pdf")}
        >
          <img
            src="pdf-removebg-preview (1).png"
            alt="pdf"
            className="transition-transform duration-500 py-12"
          />
          <h3 className="text-[#003366] font-black text-lg">PDF</h3>
        </Card>
      </div>
    </div>
  );
};

export default LearningMaterial;