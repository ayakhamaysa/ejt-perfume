const features = [
  { title: "جودة ماستر", text: "عطور عالمية بثبات وفوحان" },
  { title: "توصيل لكل المناطق", text: "الضفة، القدس، والداخل" },
  { title: "الدفع عند الاستلام", text: "ادفعي لما يوصلك طلبك" },
];

export default function Features() {
  return (
    <section className="max-w-6xl mx-auto px-5 grid gap-6 sm:grid-cols-3 text-center py-6">
      {features.map((f) => (
        <div key={f.title} className="border border-line rounded-2xl py-6 px-4">
          <div className="w-8 h-px bg-gold mx-auto mb-4" />
          <h3 className="font-bold">{f.title}</h3>
          <p className="text-sm text-muted mt-1">{f.text}</p>
        </div>
      ))}
    </section>
  );
}
