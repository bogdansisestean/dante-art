import type { Metadata } from "next";
import ServiceDetailSite from "../../service-detail-site";
import { buildServiceSchema, getService } from "../../service-data";

const service = getService("tratarea-cariilor-baia-mare")!;

export const metadata: Metadata = {
  title: service.meta.title,
  description: service.meta.description,
  alternates: { canonical: `/servicii/${service.slug}` },
};

export default function Page() {
  return (
    <>
      {buildServiceSchema(service).map((entry, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
      <ServiceDetailSite service={service} />
    </>
  );
}
