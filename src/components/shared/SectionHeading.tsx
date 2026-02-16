type Props = {
  title: string;
  subtitle?: string;
};

export function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="text-center mb-12">
      <h2 className="font-heading text-4xl md:text-5xl tracking-wider text-white mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sub-text text-sm tracking-widest">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto w-12 h-[2px] bg-neos-red" />
    </div>
  );
}
