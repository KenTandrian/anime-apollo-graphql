import { StarIcon } from "@heroicons/react/24/outline";
import React from "react";
import { GetAnimePage_Page_media } from "../services/animeService/__generated__/GetAnimePage";

const AnimeItem = ({ anime }: { anime: GetAnimePage_Page_media | null }) => {
  const title =
    anime?.title?.english ||
    anime?.title?.romaji ||
    anime?.title?.native ||
    "Untitled";
  return (
    <div className="group relative">
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img
          alt={title}
          src={anime?.coverImage?.large || ""}
          className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700 truncate">{title}</h3>
      <div className="flex flex-row items-center gap-1 mt-1 ">
        <StarIcon className="h-6 w-6 flex-shrink-0 text-amber-600" />
        <p className="text-lg font-medium text-gray-900">
          {anime?.averageScore}
        </p>
      </div>
    </div>
  );
};

export default AnimeItem;
