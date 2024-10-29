import { data } from "../data";

export function sanitizeSearchTerm(term) {
  return term.replace(/[^\w\s]/gi, "").trim();
}

export function filterData(searchTerm) {
  if (
    !searchTerm ||
    typeof searchTerm !== "string" ||
    searchTerm.trim() === ""
  ) {
    return [];
  }

  const sanitizedTerm = sanitizeSearchTerm(searchTerm).toLowerCase();

  return data.filter((item) =>
    Object.values(item).some((value) =>
      value.toLowerCase().includes(sanitizedTerm)
    )
  );
}
