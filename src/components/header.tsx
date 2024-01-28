export default function Header() {
  return (
    <header className="bg-[#0B1726] h-28 w-full rounded-b-3xl relative">
      <p className="flex flex-row justify-center items-center h-full text-white font-mono text-lg ">"code is art."</p>
      <img
        className="rounded-full max-sm:h-24 max-sm:-bottom-12 h-28 absolute -bottom-12 left-10 border-white border-4"
        src="https://github.com/andersonzero0.png"
        alt="profile-img"
      />
    </header>
  );
}
