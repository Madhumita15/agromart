import TextType from "../../components/TextType";
// import { useAppSeletor } from "../../services/helper/redux"

const Navbar = () => {
  // const {user} = useAppSeletor((state)=> state.auth)
  return (
    <>
      <div className="w-full flex items-center">
      <div className="text-2xl font-bold tracking-wide bg-gradient-to-r from-[#2a5203] via-[#3f3303] to-[#4a3006] bg-clip-text text-transparent">
        <TextType
          text={[
            "Welcome Madhumita to agromart admin panel",
            "Manage your platform parameters",
            "Happy monitoring!",
          ]}
          typingSpeed={60}
          pauseDuration={2000}
          showCursor={true}
          cursorCharacter="|"
          deletingSpeed={40}
          cursorBlinkDuration={0.6}
        />
      </div>
    </div>
    </>
  );
};

export default Navbar;


