import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/SectionLabel";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    title: "Нүүр царайгаар ирц бүртгэх систем",
    description:
      "Камераар хурдан, найдвартай ирц бүртгэл. Дараалал багасгаж, цаг хэмнэнэ.",
  },
  {
    title: "MongoKart — Цагийг хөгжилтэй өнгөрүүл",
    description:
      "Олон тоглогчтой тоглоомын платформ.",
  },
  {
    title: "eSIM борлуулалт",
    description:
      "Дата болон дуудлага — дижитал SIM-ээр шууд идэвхжүүлэх, аялалд бэлэн.",
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
    title: "RFID ухаалаг тооллого",
    description:
      "Оролцогч, бараа, урсгалыг RFID-ээр нарийвчлан хянах ухаалаг тооллогын шийдэл.",
  },
] as const;

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 md:h-16 md:px-8">
          <a href="#" className="font-mono text-xs font-medium tracking-[0.2em]">
            HAPPY SOLUTIONS
          </a>
          <nav
            className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-widest text-[var(--muted)]"
            aria-label="Гол навигаци"
          >
            <a href="#services" className="hover:text-foreground">
              Үйлчилгээ
            </a>
            <a href="#contact" className="hover:text-foreground">
              Холбоо барих
            </a>
          </nav>
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
              . Нэг шийдлээр биш — олон тогтолцоогоор.
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
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-16 px-5 py-20 md:px-8 md:py-24"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-10 border border-[var(--border)] bg-[var(--surface)] p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div>
              <SectionLabel>Дараагийн алхам</SectionLabel>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                Төслөө хамтран тодорхойлъё.
              </h2>
              <p className="mt-3 max-w-md text-[var(--muted)]">
                И-мэйл эсвэл мессежээр холбогдож, хэрэгцээнд нийцсэн санал аваарай.
              </p>
            </div>
            <Button
              href="mailto:hello@example.com"
              variant="primary"
              className="shrink-0 md:px-10"
            >
              И-мэйл илгээх
            </Button>
          </div>
        </section>
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
