"use server";

async function FormContactAction(state, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const text = formData.get("text");

  if (name === "" || email === "" || subject === "" || text === "") {
    return {
      status: "error",
      message: "All items in our contact form are required",
    };
  }
}

export { FormContactAction };
