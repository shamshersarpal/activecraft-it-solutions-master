import PortfolioDetailsClient from "./PortfolioDetailsClient";

/**
 * ✅ Must be in page.js
 */
export async function generateStaticParams() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/get-portfolio-slugs`
    );
    const data = await res.json();

    if (!data || !Array.isArray(data)) return [];

    return data.map((item) => ({
      slug: item.slug.toString(),
    }));
  } catch (err) {
    console.error("Error fetching slugs:", err);
    return [];
  }
}

export default function Page({ params }) {
  return <PortfolioDetailsClient slug={params.slug} />;
}
