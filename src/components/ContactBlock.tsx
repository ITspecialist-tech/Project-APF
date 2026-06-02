import type { SiteContent } from "@/lib/content";

type ContactBlockProps = {
  site: SiteContent;
};

export function ContactBlock({ site }: ContactBlockProps) {
  const { contact } = site;

  return (
    <section id="contact" className="bg-nusrl-navy text-white">
      <div className="mx-auto max-w-7xl section-padding">
        <h2 className="font-serif text-3xl font-bold md:text-4xl">Get in Touch</h2>
        <p className="mt-3 max-w-2xl text-gray-300">
          Reach out for information about the project, legal aid initiatives, continuous legal education
          programmes, or collaboration opportunities.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-white/10 p-6">
            <h3 className="font-semibold text-nusrl-gold">Email</h3>
            <a href={`mailto:${contact.email}`} className="mt-2 block text-sm hover:underline">
              {contact.email}
            </a>
          </div>
          {contact.phone && (
            <div className="rounded-xl bg-white/10 p-6">
              <h3 className="font-semibold text-nusrl-gold">Phone</h3>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="mt-2 block text-sm hover:underline">
                {contact.phone}
              </a>
            </div>
          )}
          <div className="rounded-xl bg-white/10 p-6 sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-nusrl-gold">Office Hours</h3>
            <p className="mt-2 text-sm">{contact.hours}</p>
          </div>
          <div className="rounded-xl bg-white/10 p-6 sm:col-span-2">
            <h3 className="font-semibold text-nusrl-gold">Address</h3>
            <p className="mt-2 whitespace-pre-line text-sm">{contact.address}</p>
          </div>
        </div>
        <div className="mt-10">
          <a
            href={`mailto:${contact.email}?subject=Enquiry%20-%20Undertrial%20Prisoners%20%26%20CLE%20Project`}
            className="inline-flex rounded-lg bg-nusrl-gold px-6 py-3 font-semibold text-nusrl-navy-dark transition hover:bg-nusrl-gold-light"
          >
            Send us an email
          </a>
        </div>
      </div>
    </section>
  );
}
