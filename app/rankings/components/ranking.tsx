import Link from "next/link";

const Ranking = ({
  label,
  value,
  year,
}: {
  label: string;
  value: string;
  year: string;
}) => {
  return (
    <div className="w-full flex justify-center mt-4">
      <Link
        href={`/rankings/${year}/${value}`}
        className="hover:underline hover:underline-offset-4 py-2 px-8 border md:border-none"
      >
        {label}
      </Link>
    </div>
  );
};

export default Ranking;
