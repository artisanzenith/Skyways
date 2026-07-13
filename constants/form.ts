export const FORM_MESSAGES = {
  required: "This field is required.",
  invalidEmail: "Enter a valid email address.",
  invalidPhone: "Enter a valid phone number.",
  submitSuccess: "Your request has been submitted successfully.",
  submitError: "Something went wrong. Please try again.",
} as const;

export const VALIDATION_PATTERNS = {
  phone: /^\+?[0-9\s\-()]{7,20}$/,
};
