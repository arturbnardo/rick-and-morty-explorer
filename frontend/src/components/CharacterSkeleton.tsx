function CharacterSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="
        flex
        w-full
        mx-auto
        max-w-140
        h-52
        bg-gray-800
        border-2
        border-cyan-800/60
        rounded
        shadow-lg
        overflow-hidden
        motion-safe:animate-pulse
      "
    >
      <div className="h-full w-52 shrink-0 bg-gray-700/70" />

      <div className="flex flex-col p-4 w-full h-full">
        <div className="h-8 w-3/4 rounded bg-gray-700/80" />

        <div className="mt-4 flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-gray-600" />
          <div className="h-5 w-32 rounded bg-gray-700/70" />
        </div>

        <div className="mt-3 h-5 w-24 rounded bg-gray-700/60" />

        <div className="flex mt-auto justify-end">
          <div
            className="
              w-32
              h-12
              rounded
              bg-cyan-900/60
            "
          />
        </div>
      </div>
    </div>
  );
}

export default CharacterSkeleton;
