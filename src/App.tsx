import TestimonialCard from "./components/TestimonialCard";

function App() {
  return (
    <main className="pt-[12.5rem] px-4 md:px-8 flex justify-center align-start min-h-dvh bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB]">
      <TestimonialCard
        fullname="Sara Dole"
        username="saradole"
        quote="I've been searching for high-quality abstract images for my design projects,
                and I'm thrilled to have found this platform. The variety and depth of
                creativity are astounding!"
        image="/images/profile-thumbnail.png"
      />
    </main>
  );
}

export default App;
