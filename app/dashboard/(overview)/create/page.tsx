import { Breadcrumbs } from "@/lib/components/products/breadcrumbs";
import { InvoiceAddForm } from "@/lib/components/products/create-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Product",
};

const InvoiceCreatePage = async () => {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Products", href: "/dashboard" },
          {
            label: "Create Product",
            href: "/dashboard/create",
            active: true,
          },
        ]}
      />
      <InvoiceAddForm />
    </main>
  );
};
export default InvoiceCreatePage;
