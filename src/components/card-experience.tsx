import { Experience } from './experiences';
import { CircleNotch } from '@phosphor-icons/react';

export function CardExperience({ data }: { data: Experience }) {
  return (
    <div className="flex flex-col gap-3 border border-lime-700 p-4 rounded-lg hover:bg-lime-50 cursor-pointer max-h-52 overflow-auto w-[48%] max-md:w-full">
      <div className="flex flex-row justify-between items-center flex-wrap">
        <div className="flex flex-row gap-2 items-center">
          <img src={data.logo} className="w-8 h-8 rounded-md" />
          <h1 className="text-lg font-semibold">{data.company}</h1>
        </div>

        <div className="flex flex-row items-center gap-3">
          <p className="text-base text-gray-500">{data.period}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">{data.position}</h2>

        {!data.description ? (
          <CircleNotch size={24} weight="fill" className="animate-spin" />
        ) : (
          <p className="text-sm">{data.description}</p>
        )}
      </div>
    </div>
  );
}
