// Questions fréquentes en <details> natifs : accessibles au clavier, sans JS.
export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq divide-y divide-trait border-y border-trait">
      {items.map((f) => (
        <details key={f.q}>
          <summary>
            <h3 className="font-sans text-[1.1rem] font-medium leading-snug">{f.q}</h3>
            <span className="signe" aria-hidden>
              +
            </span>
          </summary>
          <p className="max-w-texte pb-6 text-sourdine">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
