const DateRender = ({ date }: { date: string }) => {
  return (
    <span className="text-xs text-stone-400 italic">
      {new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })}
    </span>
    // Result: Jan 30, 2026
  );
};

export default DateRender;
