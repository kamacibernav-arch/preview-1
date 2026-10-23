export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block bg-current ${className}`}
      style={{ WebkitMask: "url(/logo-s.png) center/contain no-repeat", mask: "url(/logo-s.png) center/contain no-repeat" }}
    />
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="font-display text-[1.05rem] font-semibold leading-none tracking-tight">
        Seitenwerk<span className="text-muted-foreground font-normal">-Heidekreis</span>
      </span>
    </span>
  );
}
