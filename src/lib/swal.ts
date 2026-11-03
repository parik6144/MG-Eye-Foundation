import Swal from "sweetalert2";

const base = {
  confirmButtonColor: "#1F8A9A",
  cancelButtonColor: "#64748b",
};

export function swalSuccess(title: string, text: string) {
  return Swal.fire({
    ...base,
    icon: "success",
    title,
    text,
  });
}

export function swalError(title: string, text: string) {
  return Swal.fire({
    ...base,
    icon: "error",
    title,
    text,
  });
}
