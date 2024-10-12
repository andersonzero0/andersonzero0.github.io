export function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="flex flex-col gap-4 px-4 py-12 items-center justify-center text-sm text-gray-400">
      <p className="text-4xl">😁</p>

      <div>&copy; {date} Anderson Viana. All rights reserved.</div>
    </footer>
  );
}
