import ProfileCard from "./components/ProfileCard";
import PromptCard from "./components/PromptCard";
import VitalsCard from "./components/VitalsCard";
import PhotoCard from "./components/PhotoCard";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#f4f4f5] flex justify-center">
      <div className="w-full max-w-md bg-[#f4f4f5] min-h-screen flex flex-col gap-3 p-3 pb-10">

        {/* 1. Hero Profile Card */}
        <ProfileCard
          name="Rylee Johnston"
          imageSrc="/profile-main.png"
          tags={["Looksmaxing", "Trapezing", "Donating to Charity"]}
        />

        {/* 2. Prompt */}
        <PromptCard
          question="A fun fact about me"
          answer="I once ate a whole pizza in one sitting and didn't regret it."
        />

        {/* 3. Vitals */}
        <VitalsCard
          age={24}
          height="5'7&quot;"
          profession="Product Designer"
          location="Brooklyn, NY"
          relationshipType="Monogamy"
        />

        {/* 4. Photo */}
        <PhotoCard />

        {/* 5. Photo */}
        <PhotoCard />

        {/* 6. Prompt */}
        <PromptCard
          question="Dating me is like"
          answer="Finding a needle in a haystack, but the needle is made of chocolate."
        />

        {/* 7. Photo */}
        <PhotoCard />

        {/* 8. Prompt */}
        <PromptCard
          question="My simple pleasures"
          answer="Morning coffee, sunset walks, and the smell of old books."
        />

        {/* 9. Photo */}
        <PhotoCard />

        {/* 10. Photo */}
        <PhotoCard />

        {/* Bottom padding/space */}
        <div className="h-10" />
      </div>
    </main>
  );
}
