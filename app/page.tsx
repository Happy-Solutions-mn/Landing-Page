import { Button } from "@/components/ui/Button";
import { ContactEmailSection } from "@/components/ContactEmailSection";
import { SectionLabel } from "@/components/SectionLabel";
import { ServiceCard } from "@/components/ServiceCard";
import { ThemeToggle } from "@/components/ThemeToggle";

type Service = {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
};

const services: Service[] = [
  {
    title: "MongoKart — Цагийг хөгжилтэй өнгөрүүл",
    description:
      "Олон тоглогчтой тоглоомын платформ.",
    href: "https://mongo-cardd.vercel.app/",
    linkLabel: "MongoKart үзэх",
  },
  {
    title: "eSIM борлуулалт",
    description:
      "Дата болон дуудлага — дижитал SIM-ээр шууд идэвхжүүлэх, аялалд бэлэн.",
    href: "https://happy-esim.vercel.app/",
    linkLabel: "HappySim үзэх",
  },
  {
    title: "Чатбот",
    description:
      "24/7 автомат хариулт, захиалга болон түгээмэл асуултад шуурхай үйлчилгээ.",
  },
  {
    title: "Онлайн урилга",
    description:
      "Хурим, найр, төрсөн өдөр — бүх төрлийн арга хэмжээнд зориулсан дижитал урилга.",
  },
  {
    title: "Ухаалаг тооллогын систем",
    description:
      "Оролцогч, бараа, урсгалыг нарийвчлан хянах ухаалаг тооллогын шийдэл.",
  },
];

const teamMembers = [
  {
    name: "Э.Түвшинжаргал",
    role: "Үйл ажиллагаа",
    description: "Төслийн зохион байгуулалт, өдөр тутмын уялдаа холбоог бүтэн удирдана.",
    tone: "bg-emerald-500/12 text-emerald-600 dark:text-emerald-400",
  },
  {
    name: "Дэвжрэх",
    role: "Хөгжүүлэгч",
    description: "Системийн код хөгжүүлэлт, интеграц болон техникийн шийдлийг хэрэгжүүлнэ.",
    tone: "bg-sky-500/12 text-sky-600 dark:text-sky-400",
  },
  {
    name: "Б.Алтансүх",
    role: "Шүүмжлэлт сэтгэгч",
    description: "Бүтээгдэхүүний чиглэл, стратеги болон чанарын хяналтыг хариуцна.",
    tone: "bg-violet-500/12 text-violet-600 dark:text-violet-400",
  },
] as const;

function PersonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden
    >
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5 20c0-3.2 3.1-5.8 7-5.8s7 2.6 7 5.8" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 md:h-16 md:px-8">
          <a href="#" className="font-mono text-xs font-medium tracking-[0.2em]">
            HAPPY SOLUTIONS
          </a>
          <div className="flex items-center gap-4">
            <nav
              className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-widest text-[var(--muted)]"
              aria-label="Гол навигаци"
            >
              <a href="#services" className="hover:text-foreground">
                Үйлчилгээ
              </a>
              {/* <a href="#team" className="hover:text-foreground">
                Баг
              </a> */}
              <a href="#contact" className="hover:text-foreground">
                Холбоо барих
              </a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative border-b border-[var(--border)] px-5 py-20 md:px-8 md:py-28 lg:py-36">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
            style={{
              backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px),
 linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl">
            <SectionLabel>Solutions · Minimal · Fast</SectionLabel>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
              Ирээдүйг{" "}
              <span className="text-[var(--muted)] decoration-[var(--accent)] decoration-2 underline-offset-4">
                тодорхойл
              </span>
              . . .
              {/* Чанар болон хүртээмж. */}
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
              Бид дижитал орчинд шуурхай, ойлгомжтой бүтээгдэхүүн хөгжүүлдэг.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#services" variant="primary">
                Шийдлүүдийг үзэх
              </Button>
              <Button href="#contact" variant="ghost">
                Төсөл ярилцах
              </Button>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="scroll-mt-16 border-b border-[var(--border)] px-5 py-20 md:px-8 md:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <SectionLabel>Юу хийдэг вэ</SectionLabel>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
              Зөвхөн нэг чиглэл биш — платформ бүрт зориулсан тод шийдэл.
            </h2>
            <div className="mt-14 grid gap-px bg-[var(--border)] md:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <ServiceCard
                  key={s.title}
                  index={String(i + 1).padStart(2, "0")}
                  title={s.title}
                  description={s.description}
                  href={s.href}
                  linkLabel={s.linkLabel}
                />
              ))}
            </div>
          </div>
        </section>

        {/* <section
          id="team"
          className="scroll-mt-16 border-b border-[var(--border)] px-5 py-20 md:px-8 md:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <SectionLabel>Манай баг</SectionLabel>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
              Манай баг нь хурдтай бөгөөд уялдаатай ажилладаг.
            </h2>
            <div className="mt-14 grid gap-px bg-[var(--border)] md:grid-cols-3">
              {teamMembers.map((member) => (
                <article
                  key={member.name}
                  className="space-y-4 bg-[var(--surface)] p-6 md:p-7"
                >
                  <div
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] ${member.tone}`}
                  >
                    <PersonIcon />
                  </div>
                  <p className="font-mono text-xs tracking-[0.18em] text-[var(--muted)]">
                    {member.role}
                  </p>
                  <h3 className="text-xl font-semibold tracking-tight">{member.name}</h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">
                    {member.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section> */}

        <ContactEmailSection />
      </main>

      <footer className="border-t border-[var(--border)] px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} · Бүх эрх хуулиар хамгаалагдсан.</p>
          <p className="font-mono text-xs tracking-wider">
            Solutions · Minimal · Fast
          </p>
        </div>
      </footer>
    </div>
  );
}
