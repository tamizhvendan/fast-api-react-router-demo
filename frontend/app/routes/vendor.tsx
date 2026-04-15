// @ts-nocheck

export async function clientLoader() {
  const res = await fetch("/api/vendors")
  const vendors = await res.json();
  return {vendors: vendors}
}

export default function ({loaderData}) {
  return (
    <ul>
      {loaderData.vendors.map(
        (vendor) => <li>{vendor.name}</li>
      )}
    </ul>
  )
}