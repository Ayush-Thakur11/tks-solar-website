const stages = [
  { label: "Sunlight", detail: "The source" },
  { label: "Roof or Land", detail: "The space" },
  { label: "Solar", detail: "The system" },
  { label: "Electricity", detail: "Measured in units" },
  { label: "Value", detail: "Savings or revenue" },
];

export function ElectricityFlow() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
      <p className="text-eyebrow mb-8 text-center">How sunlight becomes value</p>
      <div className="relative grid gap-6 sm:grid-cols-5 sm:gap-3">
        <svg
          className="pointer-events-none absolute inset-x-8 top-[1.35rem] hidden h-px w-[calc(100%-4rem)] sm:block"
          viewBox="0 0 100 1"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line
            className="energy-flow-line"
            x1="0"
            y1="0.5"
            x2="100"
            y2="0.5"
            stroke="#F5A900"
            strokeWidth="0.35"
            opacity="0.7"
          />
        </svg>
        {stages.map((stage) => (
          <div key={stage.label} className="relative z-10 flex flex-col items-center text-center">
            <span className="energy-pulse mb-4 h-3 w-3 rounded-full bg-[#F5A900] shadow-[0_0_18px_rgba(245,169,0,0.7)]" />
            <p className="text-sm font-semibold tracking-[-0.03em] text-white">{stage.label}</p>
            <p className="mt-1 text-xs text-slate-400">{stage.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
