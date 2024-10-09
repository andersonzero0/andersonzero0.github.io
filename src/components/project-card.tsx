export function ProjectCard({ alt = false }: { alt: boolean }) {
  return (
    <div
      className={`flex ${
        alt ? "flex-row-reverse" : "flex-row"
      } flex-wrap justify-center items-center w-full`}
    >
      <div
        className={`md:w-1/2 w-full flex flex-col gap-4 p-4 ${
          !alt
            ? "left-fade items-start text-left"
            : "right-fade items-end text-right"
        } z-10`}
      >
        <div className={`flex flex-col ${alt ? "items-end" : "items-start"}`}>
          <small className="text-sm font-medium leading-none">
            Email address
          </small>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            The Joke Tax
          </h3>
        </div>

        <div>
          <p className="leading-7 [&:not(:first-child)]:mt-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
            recusandae quae reprehenderit assumenda, ad eaque animi impedit
            minima voluptas expedita asperiores. Iure perferendis beatae
            doloremque sapiente ipsa qui ad quisquam.
          </p>
        </div>
      </div>
      <div className={`md:w-92 md:block hidden ${alt ? "left" : "right"}-fade`}>
        <img
          className="w-full rounded-lg"
          src="https://picsum.photos/300/200"
        />
      </div>
    </div>
  );
}
