const getBlurDataUrl = () => {
  return "data:image/webp;base64,UklGRs4CAABXRUJQVlA4WAoAAAAgAAAAnwAAnwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg4AAAADAMAJ0BKqAAoAA+7W6vVamlo6MhVAoRMB2JaW7dfv8bCEAAMwAwZByNKo25AdWm9U5eWlb3lx2DeDHc08kWakPJypzwdLPfsyljoFVJap3tKBLFBxVPUzf3Jsv7DvlpVzPu/kdV+n93e4AA/u2wiuTEhisVj9cNacazgpJ+TJzOLMFE8rUdoapAeblQ4w6R1h2+EMvtvTy+FfiUQZGYFhj9XYydgqpxbB3mNxe2ScxNrKhUJTszxqNvbIIDVxQKXo6Ls2EFyM4vQ8QEYLNaCzlYigICXk+4huKejb/2QAAA";
};

const numberFormat = (number) => {
  return new Intl.NumberFormat().format(number);
};

const handleError = (message) => {
  if (typeof message === "object") {
    return Object.values(message)
      .flatMap((e) => e)
      .join();
  }

  return message;
};

export { getBlurDataUrl, numberFormat, handleError };

//! Other methods

// const handleError = (message) => {
//     if (typeof message === "object") {
//       const errors = [];
//       Object.keys(message).map((key) => {
//         message[key].map((e) => {
//           errors.push(e);
//         });
//       });

//       return errors.join();
//     }

//     return message;
//   };
